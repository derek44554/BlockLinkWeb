---
title: Start
description: One-command deployment for your BlockLink node
order: 1
---

# Quick Node Startup

Use a single command to complete full deployment of a BlockLink node on your server.

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
