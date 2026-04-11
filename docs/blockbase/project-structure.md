---
title: 项目结构
description: BlockBase 项目目录结构说明
order: 3
---

# 项目结构

```
BlockBase/
├── apps/              # 功能模块
├── data/              # 数据存储
│   ├── connect/       # 链接节点信息
│   ├── database/      # 数据库信息
│   └── signature/     # 其他节点签名信息
├── resources/         # 密钥与证书
│   ├── private_key.pem       # 节点私钥
│   ├── public_key.pem        # 节点公钥
│   ├── public_key_top.pem    # 顶级公钥
│   └── signature.yml         # 授权证书
├── node.yml           # 节点配置（BID 等）
└── .env               # 项目配置
```

## 配置文件说明

### node.yml

节点配置文件，包含以下参数：

| 参数 | 说明 |
|------|------|
| `ipfs_api` | IPFS 接口地址，如 `http://127.0.0.1:5001/api/v0` |
| `pivot` | 是否为转发节点，设为 `true` 可作为节点间流量转发的中枢 |

### .env

项目环境变量配置：

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `SIGNATURE_PATH` | 签名文件路径 | `resources/signature.yml` |
| `TOP_VERIFY_PUBLIC_PEY_PATH` | 顶级验证公钥路径 | `resources/public_key_top.pem` |
| `NODE_PRIVATE_PEY_PATH` | 节点私钥路径 | `resources/private_key.pem` |
| `IDENTITY` | 身份密钥，用于 App 或 API 交互 | — |