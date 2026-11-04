// 本地联合预览：重新构建仅用于本地的 API 地址，不发布任何外部服务。
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const cwd = fileURLToPath(new URL('../', import.meta.url));
const webPort = Number(process.env.LEADERBOARD_PREVIEW_PORT || 4173);
const apiPort = Number(process.env.LEADERBOARD_PORT || 4180);
for (const port of [webPort, apiPort]) {
  if (!Number.isInteger(port) || port < 1024 || port > 65535) throw new Error('本地预览端口必须在 1024～65535 之间');
}
if (webPort === apiPort) throw new Error('网页和排行榜服务不能使用相同端口');
const env = {
  ...process.env,
  LEADERBOARD_API_URL: `http://127.0.0.1:${apiPort}/api/leaderboard`,
  LEADERBOARD_PORT: String(apiPort),
  LEADERBOARD_HOST: '127.0.0.1',
  LEADERBOARD_ALLOWED_ORIGINS: `http://127.0.0.1:${webPort},http://localhost:${webPort}`,
};
const children = new Set();
let stopping = false;
function start(command, args) {
  // 单独进程组：取消 npm 构建时也停止它派生的 shell/VitePress。
  const child = spawn(command, args, { cwd, env, stdio: 'inherit', detached: process.platform !== 'win32' });
  children.add(child);
  child.once('exit', () => children.delete(child));
  return child;
}
function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  process.exitCode = code;
  for (const child of children) {
    try {
      if (process.platform !== 'win32' && child.pid) process.kill(-child.pid, 'SIGTERM');
      else child.kill('SIGTERM');
    } catch (error) { if (error.code !== 'ESRCH') console.error(error.message); }
  }
}
process.on('SIGINT', () => stop());
process.on('SIGTERM', () => stop());
const build = start('npm', ['run', 'build']);
const built = await new Promise(resolve => {
  build.once('error', error => { console.error(error.message); resolve(false); });
  build.once('exit', code => resolve(code === 0));
});
if (!built) { stop(1); }
else if (!stopping) {
  const api = start(process.execPath, ['challenges/leaderboard/server.mjs']);
  const web = start(process.execPath, ['node_modules/vitepress/bin/vitepress.js', 'preview', '--host', '127.0.0.1', '--port', String(webPort), '--strictPort']);
  for (const child of [api, web]) {
    child.once('error', error => { console.error(error.message); stop(1); });
    child.once('exit', code => { if (!stopping) stop(code || 1); });
  }
  const base = process.env.SITE_BASE || '/ai-agent-handbook/';
  console.log(`本地排行榜预览：http://127.0.0.1:${webPort}${base}challenges/01-refund-timeout/`);
  console.log('这是本地体验榜，不代表已在 GitHub Pages 上线。');
}
