// 只上传玩家主动提交的身份、主页和浏览器成绩，不上传代码。
(() => {
'use strict';
const $ = id => document.getElementById(id);
const unavailable = '排行榜服务尚未接通，暂时无法查看或提交。闯关和本机成绩不受影响。';
const idPattern = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/;
const timeFormat = new Intl.DateTimeFormat('sv-SE', {
  timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit',
  hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
});
function safeHomepage(value) {
  if (typeof value !== 'string' || value.length > 2048) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}
function validEntry(entry) {
  return entry && Number.isInteger(entry.rank) && entry.rank > 0 &&
    typeof entry.githubId === 'string' && entry.githubId.length <= 39 && idPattern.test(entry.githubId) &&
    safeHomepage(entry.homepage) && Number.isInteger(entry.score) && entry.score >= 60 && entry.score <= 100 &&
    typeof entry.submittedAt === 'string' && Number.isFinite(Date.parse(entry.submittedAt));
}
function validBoard(data) {
  return data && Array.isArray(data.entries) && Number.isInteger(data.total) && data.total >= 0 &&
    data.entries.length === Math.min(20, data.total) &&
    data.entries.every((entry, index) => {
      if (!validEntry(entry) || entry.rank !== index + 1) return false;
      const previous = data.entries[index - 1];
      return !previous || previous.score > entry.score ||
        (previous.score === entry.score && Date.parse(previous.submittedAt) <= Date.parse(entry.submittedAt));
    });
}
function validSubmission(data, body) {
  if (!['created', 'improved', 'unchanged'].includes(data.status) || !validEntry(data.entry)) return false;
  const entry = data.entry;
  if (entry.githubId.toLowerCase() !== body.githubId.toLowerCase() || entry.rank > data.total) return false;
  if (data.status === 'unchanged' ? entry.score < body.score : entry.score !== body.score || safeHomepage(entry.homepage) !== body.homepage) return false;
  if (entry.rank <= 20) {
    const ranked = data.entries[entry.rank - 1];
    return ranked.githubId === entry.githubId && ranked.score === entry.score &&
      ranked.homepage === entry.homepage && ranked.submittedAt === entry.submittedAt;
  }
  return true;
}
window.createChallengeLeaderboard = ({ getResult, onOpen }) => {
  const apiUrl = window.ChallengeLeaderboardConfig?.apiUrl || '';
  const level = document.body.dataset.level;
  const version = document.body.dataset.version;
  let submitting = false;
  let loading = false;
  function status(id, message, kind = '') {
    $(id).textContent = message;
    $(id).className = 'leaderboard-status' + (kind ? ' ' + kind : '');
  }
  function sync() {
    const result = getResult();
    $('scoreActions').hidden = !result;
    $('submitScoreBtn').disabled = !result || !apiUrl || submitting;
    $('confirmScoreBtn').disabled = !result || !apiUrl || submitting;
    $('leaderboardAvailability').textContent = apiUrl ? '' : '排行榜服务尚未接通';
    if ($('submitDialog').open && !result && !submitting) {
      status('submitStatus', '本次成绩已失效，请重新运行并过关后提交。', 'error');
    }
  }
  async function request(method, body) {
    if (!apiUrl) throw new Error(unavailable);
    const url = new URL(apiUrl, location.href);
    if (method === 'GET') { url.searchParams.set('level', level); url.searchParams.set('version', version); }
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(url, {
        method, mode: 'cors', credentials: 'omit', cache: 'no-store', signal: controller.signal,
        ...(body ? { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {}),
      });
      const data = await response.json();
      if (!response.ok) {
        const messages = {
          400: method === 'POST' ? '提交信息不符合要求，请检查 GitHub ID 和 HTTPS 主页；主页不能使用本地地址。' : '关卡或评分版本不匹配，请刷新页面重试。',
          403: '排行榜尚未允许这个站点访问，请稍后再试。',
          409: '排行榜暂时已满，请稍后再试。',
          413: '提交内容过长，请缩短个人主页链接。',
          429: '提交过于频繁，请一分钟后重试。',
          500: '排行榜未能确认保存成功，请稍后重试。',
        };
        throw new Error(messages[response.status] || '排行榜服务暂时不可用，请稍后再试。');
      }
      if (!validBoard(data)) throw new Error('排行榜返回了无效数据，请稍后再试。');
      return data;
    } catch (error) {
      if (error.name === 'AbortError') throw new Error(method === 'POST'
        ? '提交暂未收到确认。可稍后重试；重复提交同分不会改变排名时间。'
        : '排行榜加载超时，请点击刷新重试。');
      if (error instanceof TypeError || error instanceof SyntaxError) throw new Error('无法连接排行榜，请检查网络后重试。');
      throw error;
    } finally { clearTimeout(timer); }
  }
  function renderBoard(data) {
    const rows = document.createDocumentFragment();
    for (const entry of data.entries) {
      const row = document.createElement('tr');
      const rank = document.createElement('td');
      rank.textContent = entry.rank;
      const identity = document.createElement('td');
      const link = document.createElement('a');
      link.textContent = entry.githubId;
      link.href = safeHomepage(entry.homepage);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.title = `打开 ${entry.githubId} 的个人主页`;
      identity.append(link);
      const score = document.createElement('td');
      score.textContent = entry.score;
      const submitted = document.createElement('td');
      const time = document.createElement('time');
      time.dateTime = entry.submittedAt;
      time.textContent = timeFormat.format(new Date(entry.submittedAt));
      submitted.append(time);
      row.append(rank, identity, score, submitted);
      rows.append(row);
    }
    $('leaderboardRows').replaceChildren(rows);
    $('leaderboardTableWrap').hidden = !data.entries.length;
    status('leaderboardStatus', data.entries.length
      ? `共 ${data.total} 人提交，展示前 ${data.entries.length} 名。`
      : '还没有人提交成绩。过关后，你可以成为第一位。');
  }
  async function loadBoard() {
    if (loading) return;
    if (!apiUrl) { status('leaderboardStatus', unavailable); $('leaderboardTableWrap').hidden = true; return; }
    loading = true;
    $('refreshLeaderboardBtn').disabled = true;
    $('leaderboardTableWrap').hidden = true;
    status('leaderboardStatus', '正在加载排行榜…');
    try { renderBoard(await request('GET')); }
    catch (error) { status('leaderboardStatus', error.message, 'error'); }
    finally { loading = false; $('refreshLeaderboardBtn').disabled = false; }
  }
  function openBoard() {
    onOpen();
    $('submitDialog').close();
    if (!$('leaderboardDialog').open) $('leaderboardDialog').showModal();
    loadBoard();
  }
  $('leaderboardBtn').addEventListener('click', openBoard);
  $('viewLeaderboardBtn').addEventListener('click', openBoard);
  $('refreshLeaderboardBtn').addEventListener('click', loadBoard);
  for (const id of ['githubId', 'homepage']) $(id).addEventListener('input', () => {
    if (!submitting && $('submitStatus').classList.contains('error')) status('submitStatus', '');
  });
  $('submitScoreBtn').addEventListener('click', () => {
    const result = getResult();
    if (!result || !apiUrl || submitting) return;
    onOpen();
    $('submissionScore').textContent = result.score;
    $('viewLeaderboardBtn').hidden = true;
    status('submitStatus', '同一 ID 只保留最高分，同分重复提交不改变时间。');
    $('submitDialog').showModal();
    sync();
  });
  $('leaderboardForm').addEventListener('submit', async event => {
    event.preventDefault();
    if (submitting) return;
    const result = getResult();
    if (!result) { sync(); return; }
    const githubId = $('githubId').value.trim();
    const homepage = safeHomepage($('homepage').value.trim());
    if (!idPattern.test(githubId) || githubId.length > 39) {
      status('submitStatus', '请填写合法的 GitHub ID，不要填写昵称或完整链接。', 'error');
      $('githubId').focus(); return;
    }
    if (!homepage) { status('submitStatus', '请填写不含登录凭据的 HTTPS 个人主页链接。', 'error'); $('homepage').focus(); return; }
    // 提交时截取本次有效成绩；网络等待期间的新运行不会串入这次请求。
    const body = { level, version, githubId, homepage, score: result.score };
    submitting = true;
    $('githubId').disabled = true;
    $('homepage').disabled = true;
    $('confirmScoreBtn').textContent = '正在提交…';
    $('viewLeaderboardBtn').hidden = true;
    status('submitStatus', '正在提交成绩…');
    sync();
    try {
      const data = await request('POST', body);
      if (!validSubmission(data, body)) throw new Error('返回的成绩与本次提交不一致，请稍后重试。');
      const entry = data.entry;
      const prefix = data.status === 'unchanged' ? `已保留最高成绩 ${entry.score} 分，原提交时间不变。` : `提交成功，${entry.score} 分。`;
      status('submitStatus', prefix + (entry.rank <= 20 ? `目前排名第 ${entry.rank}。` : `目前排名第 ${entry.rank}，尚未进入 TOP20。`), 'success');
      $('viewLeaderboardBtn').hidden = false;
    } catch (error) { status('submitStatus', error.message, 'error'); }
    finally {
      submitting = false;
      $('githubId').disabled = false;
      $('homepage').disabled = false;
      $('confirmScoreBtn').textContent = '提交到排行榜';
      sync();
    }
  });
  sync();
  return { sync };
};
})();
