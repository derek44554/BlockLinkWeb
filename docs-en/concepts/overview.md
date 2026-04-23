---
title: Overview
description: Core concepts and design philosophy of BlockLink
order: 1
---

# BlockLink Overview

BlockLink = **Block** (data block) + **Node**

A distributed ecosystem that gives you full control over your own data. Build your own private node network, store everything, and make data truly work for you.

## Three-layer Architecture

### Data Layer - Block

A block is the smallest data unit in BlockLink. It can store anything: photos, videos, notes, articles, contacts, accounts, ideas, and more.

Each block has:
- Unique BID (globally addressable)
- Type and tags
- Permission level
- Relationships with other blocks

Blocks can be linked together and organized via tags for retrieval, offering much stronger organization than traditional folders.

### Network Layer - Node

A machine running the BlockLink service is a node. Nodes provide capabilities such as block storage and retrieval, and can also be extended with custom features.

BlockLink networking differs from traditional networking:

- **BID-only routing, no IP required** - The framework locates target nodes/blocks and computes optimal paths automatically
- **Cross-NAT communication** - Internal devices can communicate through relay forwarding
- **Automatic LAN discovery** - Devices in the same network are discovered and connected directly
- Devices without public IP are no longer isolated data islands

### Extension Layer - App Ecosystem

Nodes are highly extensible with loosely coupled, pluggable modules:

- Add official or community extensions to quickly gain new capabilities
- Build your own extensions for custom functionality
- Build independent apps on BlockLink with shared data interoperability across the network

## Security

BlockLink security is based on a **top-level key**:

- Only nodes signed by the top-level key can join your network
- The signing process is cryptographic and can be completed fully offline
- Whoever owns the top-level key owns the network
- Every node and block has independent permission levels, requiring authorization or sufficient privileges
- Encrypted blocks are supported; only holders of decryption keys can view content, and even the top-level key cannot decrypt them

## Typical Use Cases

- **Personal knowledge base** - Store notes, journals, and articles as blocks and sync across devices
- **Private album / music library** - Keep data on your own nodes without third-party platforms
- **Distributed file system** - Build your own cloud storage across multiple devices
- **Password manager** - Store account data as encrypted blocks for secure access
- **Custom apps** - Build blogs, content systems, and automation workflows on top of BlockLink
