---
title: Manual Deployment
description: Deploy BlockBase node manually
order: 2
---

# Manual Deployment

## Prerequisites

- Python 3.8+
- Docker & Docker Compose
- pip

## Key Setup

BlockBase uses a top-level key to authorize nodes. All nodes must be signed by the top-level key before joining your network.

### 1. Install BlockLink

```bash
pip install blocklink
```

### 2. Generate Top-level Key Pair

> If you've already generated top-level keys, skip this step. Store top-level keys securely and never leak them.

```python
from blocklink.adapters.key.key_loot import generate_and_save_rsa_keys

generate_and_save_rsa_keys()
```

Generated files:
- `private_key_top.pem` - top-level private key
- `public_key_top.pem` - top-level public key

### 3. Generate Node Keys and Authorization Certificate

```python
from blocklink.adapters.key.key_loot import generate_node

generate_node(private_key_top_path="private_key_top.pem")
```

Generated files:
- `node.yml` - node info
- `signature.yml` - authorization certificate (signed by top-level private key)
- `private_key.pem` - node private key
- `public_key.pem` - node public key

## Deployment

### 1. Clone Repository

```bash
git clone https://github.com/derek44554/BlockBase.git
```

### 2. Place Configuration Files

Place generated keys and config files in:

```text
BlockBase/
├── node.yml
└── resources/
    ├── private_key.pem
    ├── public_key.pem
    ├── public_key_top.pem
    └── signature.yml
```

### 3. Start Services

```bash
docker network create block
docker compose up -d
```

### 4. Verify Deployment

After startup, access through:

- Local: `http://localhost:24001`
- LAN: `http://<LAN_IP>:24001`
- Public: `http://<PUBLIC_IP>:24001`

## Update and Redeploy

```bash
docker compose down
docker compose up -d --build
```

> Keep all private key files secure. Never upload them to public repositories or share them.

## Optional Image Upload Integration (IPFS)

BlockBase supports IPFS integration for file storage.

### Create IPFS Container

```bash
docker run -d \
  --name ipfs \
  --restart always \
  --network block \
  -v /home/IPFS:/data/ipfs \
  -p 4001:4001 \
  -p 8080:8080 \
  -p 127.0.0.1:5001:5001 \
  -e IPFS_PATH=/data/ipfs \
  ipfs/go-ipfs:latest \
  daemon --migrate=true --agent-version-suffix=docker
```

Default persistence path is `/home/IPFS`.

> **Windows users**: Replace `-v /home/IPFS:/data/ipfs` with Windows path format, e.g. `-v C:/IPFS:/data/ipfs`.

### Node Integration

Add to `node.yml`:

```yaml
ipfs_api: http://ipfs:5001/api/v0
```

## Environment Variables

Create `.env` in the project directory and configure app access key:

```text
IDENTITY=AppAccessKey
```

Generate a key:

```python
import os, base64

b64_token = base64.b64encode(os.urandom(32)).decode("utf-8")
```
