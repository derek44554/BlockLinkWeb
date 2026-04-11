---
title: 手动部署
description: 手动部署 BlockBase 节点
order: 2
---

# 手动部署

## 前置要求

- Python 3.8+
- Docker & Docker Compose
- pip

## 密钥配置

BlockBase 使用顶级密钥对节点进行授权，所有节点必须经过顶级密钥签名才能加入你的网络。

### 1. 安装 BlockLink

```bash
pip install blocklink
```

### 2. 生成顶级密钥对

> 如果已生成过顶级密钥，可跳过此步骤。顶级密钥请妥善保管，切勿泄露。

```python
from blocklink.adapters.key.key_loot import generate_and_save_rsa_keys

generate_and_save_rsa_keys()
```

生成文件：
- `private_key_top.pem` — 顶级私钥
- `public_key_top.pem` — 顶级公钥

### 3. 生成节点密钥与授权证书

```python
from blocklink.adapters.key.key_loot import generate_node

generate_node(private_key_top_path="private_key_top.pem")
```

生成文件：
- `node.yml` — 节点信息
- `signature.yml` — 授权证书（由顶级私钥签名）
- `private_key.pem` — 节点私钥
- `public_key.pem` — 节点公钥

## 部署

### 1. 克隆项目

```bash
git clone https://github.com/derek44554/BlockBase.git
```

### 2. 放置配置文件

将生成的密钥和配置文件放置到以下目录：

```
BlockBase/
├── node.yml
└── resources/
    ├── private_key.pem
    ├── public_key.pem
    ├── public_key_top.pem
    └── signature.yml
```

### 3. 启动服务

```bash
docker network create block
docker-compose up -d
```

### 4. 验证部署

服务启动后可通过以下地址访问：

- 本地：`http://localhost:24001`
- 局域网：`http://<局域网IP>:24001`
- 公网：`http://<公网IP>:24001`

## 更新重新部署

```bash
docker-compose down
docker-compose up -d --build
```

> 请妥善保管所有私钥文件，切勿上传到公共仓库或分享给他人。

## 图片上传对接（可选）

BlockBase 支持对接 IPFS 存储文件。

### 创建 IPFS 容器

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

IPFS 持久化默认目录在 `/home/IPFS`。

> **Windows 用户**：`-v /home/IPFS:/data/ipfs` 需替换为 Windows 路径格式，例如 `-v C:/IPFS:/data/ipfs`。

### 节点对接

在 `node.yml` 中添加：

```yaml
ipfs_api: http://ipfs:5001/api/v0
```

## 环境变量配置

在项目目录创建 `.env` 文件，配置 App 访问密钥：

```text
IDENTITY=App配置密钥
```

生成密钥：

```python
import os, base64

b64_token = base64.b64encode(os.urandom(32)).decode("utf-8")
```
