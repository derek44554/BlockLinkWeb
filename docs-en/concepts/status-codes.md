---
title: Status Codes
description: Status code reference in the BlockLink network
order: 2
---

# Status Codes

BlockLink uses a unified status code scheme for request and operation outcomes. Codes are grouped by category, and the tens digit identifies the category.

## 2X - Success

| Code | Description |
|--------|------|
| 21 | Successfully processed |

## 3X - Block Retrieval Errors

| Code | Description |
|--------|------|
| 31 | BID does not exist |
| 32 | Request error, not processed (typically malformed incoming data) |
| 33 | Request error, not processed (typically server-side issues) |

## 4X - Request Errors

| Code | Description |
|--------|------|
| 41 | Route not found |
| 42 | Invalid request body |

## 5X - Connection-related

| Code | Description |
|--------|------|
| 51 | Not connected / not registered |
| 52 | Registration rejected |
| 53 | Already connected and currently connecting with a new node |

## 6X - Forwarding-related

| Code | Description |
|--------|------|
| 61 | Command cannot be forwarded to target BID; no available path (e.g. A -> B -> C is broken) |
| 62 | Command cannot be sent by this node; possibly no direct peers, or peers cannot forward |
| 63 | This node is not responsible for forwarding this command |

## 7X - Permission-related

| Code | Description |
|--------|------|
| 71 | Permission denied (route/node/block permission), absolute denial |
| 72 | Permission denied but conditional; may pass under specific conditions (time, request content, etc.) |
| 73 | Authorization required; except for super permissions, access must be authorized |
