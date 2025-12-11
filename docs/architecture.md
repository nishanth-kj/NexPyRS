# Architecture

NexPyRS follows a microservices architecture orchestrated by Docker Compose.

```mermaid
graph TD
    User[User / Client] -->|HTTP/HTTPS| Traefik[Traefik Proxy];
    
    subgraph "Docker Network (nexnet)"
        Traefik -->|host:3000| Frontend[Next.js Frontend];
        Traefik -->|/api| API[FastAPI Backend];
        Traefik -->|/rust| Rust[Rust Service];
        
        Frontend -->|gRPC-Web| Envoy[Envoy Proxy];
        Envoy -->|gRPC| GrpcSvc[Python gRPC Service];
        
        API --> DB[(PostgreSQL)];
        Rust --> DB;
        GrpcSvc --> DB;
    end
```

## Services

| Service | Technology | Port (Internal) | Description |
| :--- | :--- | :--- | :--- |
| **Frontend** | Next.js (React) | 3000 | The main user interface. |
| **API** | FastAPI (Python) | 8000 | REST API for general business logic. |
| **RustSvc** | Actix-web (Rust) | 8001 | High-performance compute tasks. |
| **GrpcSvc** | gRPC (Python) | 50051 | Microservice for real-time/streaming. |
| **Database** | PostgreSQL | 5432 | Primary data store. |
