---
title: Project Structure
description: Directory structure of the BlockBase project
order: 3
---

# Project Structure

```text
BlockBase/
├── apps/              # Feature modules
├── data/              # Data storage
│   ├── connect/       # Connected node info
│   ├── database/      # Database info
│   └── signature/     # Signature info for other nodes
├── resources/         # Keys and certificates
│   ├── private_key.pem       # Node private key
│   ├── public_key.pem        # Node public key
│   ├── public_key_top.pem    # Top-level public key
│   └── signature.yml         # Authorization certificate
├── node.yml           # Node config (BID, etc.)
└── .env               # Project environment config
```

## Configuration Files

### node.yml

Node config file containing:

| Parameter | Description |
|------|------|
| `ipfs_api` | IPFS API endpoint, e.g. `http://127.0.0.1:5001/api/v0` |
| `pivot` | Whether this is a relay node. Set `true` to relay traffic between nodes |

### .env

Project environment variables:

| Variable | Description | Default |
|------|------|--------|
| `SIGNATURE_PATH` | Signature file path | `resources/signature.yml` |
| `TOP_VERIFY_PUBLIC_PEY_PATH` | Top-level verification public key path | `resources/public_key_top.pem` |
| `NODE_PRIVATE_PEY_PATH` | Node private key path | `resources/private_key.pem` |
| `IDENTITY` | Identity key used for App/API access | — |
