---
title: Start
description: One-command deployment for your BlockLink node
order: 1
---

# Quick Node Startup

Use a single command to complete full deployment of a BlockLink node on your server.

## Deployment Tutorial Video

If this is your first deployment, watch the full tutorial first. It walks through server preparation, node deployment, and startup verification step by step.

<div style="margin: 1.25rem 0 2rem; overflow: hidden; border: 1px solid var(--color-border); border-radius: 12px; background: var(--color-surface);">
  <iframe
    src="https://player.bilibili.com/player.html?bvid=BV1E9oLBDEuB&autoplay=0"
    title="BlockLink deployment tutorial video"
    allowfullscreen
    style="display: block; width: 100%; aspect-ratio: 16 / 9; height: auto; border: 0;"
  ></iframe>
</div>

If the embedded video does not load, open it directly on Bilibili: [BlockLink deployment tutorial](https://www.bilibili.com/video/BV1E9oLBDEuB).

## One-command Deployment

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/derek44554/block_shell/main/start.sh)
```

The script will automatically:

- Detect system environment (Linux / macOS)
- Download and install BlockBase node service
- Initialize config files
- Start the node and print access endpoints

## Function Menu

| Option | Description |
|------|------|
| 1) Fresh deploy | Generate top-level and node keypairs, clone project, and start services |
| 2) Add node | Generate and deploy a new node with an existing top-level key |
| 3) Start existing node | Start deployed containers directly |
| 4) Node upgrade | Pull latest code and rebuild |
| 5) Enable IPFS storage | Start and integrate IPFS container for an existing node |
