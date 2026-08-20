# NexPyRS

A massive, production-ready, highly-scalable microservices monorepo.

This stack features 5 API backends, 5 frontend UIs, 5 shared internal libraries, robust infrastructure (SQL/NoSQL/Message Brokers), Web3 blockchain environments, and an MCP server—all orchestrated beautifully with Docker Compose and Traefik!

## 🚀 Quick Start

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Required)

### Getting Started

1. **Clone the repository & Set up Environment**
   ```bash
   git clone https://github.com/nishanth-kj/NexPyRS.git
   cd NexPyRS
   cp .env.example .env
   ```

2. **Start all services**
   ```bash
   docker-compose up -d --build
   ```

## 🌐 The Microservices Ecosystem

All services are accessible through the **Traefik** reverse proxy via subdomain routing on `localhost`:

### Frontends (UIs)
| Service | URL | Framework |
|---------|-----|-----------|
| **Next.js App** | http://next.localhost | Next.js (React) |
| **Angular App** | http://angular.localhost | Angular |
| **Vite App** | http://vite.localhost | Vite (React/Vue/TS) |
| **Vanilla Site** | http://site.localhost | Static HTML/CSS/JS |

### Backends (APIs)
| Service | URL | Language/Framework |
|---------|-----|--------------------|
| **FastAPI** | http://fastapi.localhost | Python |
| **Django** | http://django.localhost | Python |
| **Spring** | http://spring.localhost | Java |
| **Actix** | http://actix.localhost | Rust |
| **Drogon** | http://dragon.localhost | C++ |
| **WebSocket** | http://websocket.localhost | Node.js (ws) |

### Infrastructure & Tools
| Service | URL | Description |
|---------|-----|-------------|
| **PgAdmin** | http://pgadmin.localhost | PostgreSQL UI Manager |
| **Jenkins** | http://jenkins.localhost | CI/CD Server |
| **Traefik** | http://localhost:8090 | Reverse Proxy Dashboard |
| **Kafka UI** | http://kafka.localhost | Apache Kafka Web Manager |
| **MCP Server** | http://mcp.localhost | Model Context Protocol SSE Endpoint |

## 🏗️ Architecture

### Shared Libraries (`lib_*`)
To prevent code duplication, microservices import shared logic from these internal packages:
- `lib_npm`: Shared TypeScript interfaces and React utilities.
- `lib_pip`: Shared Python Pydantic models.
- `lib_maven`: Shared Java DTOs.
- `lib_cargo`: Shared Rust Structs.
- `lib_cmake`: Shared C++ definitions.

### Databases & State
- **PostgreSQL 17**: Relational Database (Initialized with `nexpyrs_dev`, `nexpyrs_stage`, `nexpyrs_prod`).
- **MongoDB 7.0**: NoSQL Document Database.
- **Redis**: Caching and Pub/Sub.
- **RabbitMQ**: AMQP Message Broker.
- **Apache Kafka**: High-throughput Event Streaming (KRaft mode).

### Web3 / Blockchain Environments
For decentralized development, this monorepo includes local blockchain nodes:
- **Ethereum (Hardhat)**: Runs a local EVM node on port `8545`. Contracts live in `/solidity`.
- **Solana**: Runs a local `solana-test-validator` on port `8899`. Programs live in `/solana`.

## 🐳 Docker Multi-Environment Support

This project includes specialized Docker configurations for different environments:

| Environment | Command | Description |
|-------------|---------|-------------|
| **Development** | `docker-compose -f docker-compose.dev.yml up -d` | Hot-reloading, dev databases. |
| **Staging**     | `docker-compose -f docker-compose.stage.yml up -d` | Pre-production testing with staging URLs. |
| **Production**  | `docker-compose -f docker-compose.prod.yml up -d` | Hardened security, HTTPS (TLS), production volumes. |

## 🤝 Open Source Standards

The `.github` directory is fully scaffolded with:
- `ISSUE_TEMPLATE` & `PULL_REQUEST_TEMPLATE.md`
- **Dependabot** configuration scanning all 19 ecosystems (Cargo, Maven, Pip, NPM, Docker).
- **Labeler Action**: Automatically tags PRs as `frontend`, `backend`, `infrastructure`, etc.
- **CI Workflow**: Validates Docker compositions automatically.

## 📄 License
MIT License - see LICENSE file for details

---
**Built with  using 15+ different technologies!**
