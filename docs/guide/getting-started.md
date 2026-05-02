---
title: 开始
description: 一键部署你的 BlockLink 节点
order: 1
---

# 快速启动节点

只需一条命令，即可在你的服务器上完成 BlockLink 节点的完整部署。

## 部署教程视频

第一次部署建议先观看完整视频教程，按视频步骤执行可以更直观地完成服务器环境准备、节点部署和启动验证。

<div style="margin: 1.25rem 0 2rem; overflow: hidden; border: 1px solid var(--color-border); border-radius: 12px; background: var(--color-surface);">
  <iframe
    src="https://player.bilibili.com/player.html?bvid=BV1E9oLBDEuB&autoplay=0"
    title="BlockLink 部署教程视频"
    allowfullscreen
    style="display: block; width: 100%; aspect-ratio: 16 / 9; height: auto; border: 0;"
  ></iframe>
</div>

如果视频无法加载，可以直接在 B 站打开：[BlockLink 部署教程](https://www.bilibili.com/video/BV1E9oLBDEuB)。

## 一键部署

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/derek44554/block_shell/main/start.sh)
```

脚本会自动完成以下步骤：

- 检测系统环境（Linux / macOS）
- 下载并安装 BlockBase 节点服务
- 初始化配置文件
- 启动节点并输出访问地址


## 功能菜单

| 选项 | 说明 |
|------|------|
| 1) 全新部署 | 生成顶级密钥对、节点密钥，克隆项目并启动服务 |
| 2) 新增节点 | 使用已有顶级密钥生成新节点并部署 |
| 3) 启动已有节点 | 直接启动已部署的容器 |
| 4) 节点升级 | 拉取最新代码并重新构建 |
| 5) 开启 IPFS 存储 | 为已有节点启动 IPFS 容器并完成对接 |
