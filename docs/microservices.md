# Microservices Architecture

NexPyRS is a polyglot microservices ecosystem. Below is a comprehensive list of all backend microservices, their tech stacks, and how they are routed via our Traefik reverse proxy.

## Backend APIs & Services

| Service | Directory | Tech Stack | Internal Port | Local Domain | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **FastAPI** | `api_fastapi/` | Python / FastAPI | 8000 | `api.localhost` | High-performance async Python API. |
| **Django** | `api_django/` | Python / Django | 8000 | `django.localhost` | Full-featured Python web framework API. |
| **Rust Service** | `rustsvc/` | Rust | 8080 | `rust.localhost` | Core Rust microservice connecting to PostgreSQL. |
| **gRPC Service** | `grpcsvc/` | Polyglot (gRPC) | 50051 | `grpc.localhost` | High-performance RPC service via Protobuf. |
| **Spring API** | `api_spring/` | Java / Spring Boot | 8080 | `spring.localhost` | Enterprise Java microservice. |
| **Drogon API** | `api_dragon/` | C++ / Drogon | 8080 | `drogon.localhost` | Ultra-fast C++ web application framework. |
| **Actix API** | `api_actix/` | Rust / Actix-Web | 8080 | `actix.localhost` | Highly concurrent Rust web server. |
| **WebSockets** | `websocket/` | Node / Rust | 8080 | `ws.localhost` | Real-time bi-directional communication service. |

## Data & Message Brokers

The microservices communicate and persist data using the following supporting infrastructure:

*   **PostgreSQL** (`db`): Relational database, managed locally via **pgAdmin** (`pgadmin.localhost`).
*   **MongoDB** (`mongodb`): NoSQL document database (Port 27017).
*   **Redis** (`redis`): In-memory caching and transient pub/sub (Port 6379).
*   **RabbitMQ** (`rabbitmq`): Message broker for AMQP protocols (Port 5672, Admin: 15672).
*   **Apache Kafka** (`kafka`): Distributed event streaming platform. Managed locally via **Kafka UI** (`kafka.localhost`).

## Reverse Proxy (Traefik)

All traffic is managed by **Traefik**, which dynamically routes requests based on hostnames. 
You do not need to expose individual ports to your host machine for every service; simply navigate to the assigned `Local Domain` in your browser (e.g., `http://api.localhost`).
