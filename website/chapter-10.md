# 第 10 章　Agent 异步任务与自动化流程

先读《Agent 异步任务与自动化流程综述》，了解任务模型、异步调度、定时触发和工作流，以及恢复、幂等与业务完成的责任边界。

《Durable Agent 详解：如何让 Agent 在云端长期稳定运行》以向五位客户发送邮件为例，说明会话恢复与任务恢复的区别，展开持久任务、原子提交和外部操作确认，再讨论云端托管与 Brain–Hands 分离的设计。

《AgentScope Durable 详解》介绍 ReActAgent、HarnessAgent 与 Durable 的分工，并通过代码示例说明请求排队、执行中插话、会话回放、异步工具、跨实例接管与多 Thread 协作。

<ChapterIndex :chapter="10" />

<script setup>
import { onMounted } from 'vue'
import { useRouter, withBase } from 'vitepress'

const router = useRouter()
onMounted(() => {
  const hash = window.location.hash
  const id = decodeURIComponent(hash.slice(1))
  if (/^_10-/.test(id) || id === '本章小结') {
    router.go(withBase('/run/chapter-10/overview.html') + hash)
  }
})
</script>
