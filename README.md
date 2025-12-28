# NexPyRS

A production-ready full-stack monorepo featuring Next.js, FastAPI, Django, Rust (Actix), Python gRPC, PostgreSQL, Jenkins CI/CD, and Traefik reverse proxy - all containerized with Docker.

## 🚀 Quick Start

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Required)
- [uv](https://github.com/astral-sh/uv) (Recommended for local development)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/nishanth-kj/NexPyRS.git
   cd NexPyRS
   ```

2. **Start all services**
   ```bash
   docker-compose up -d --build
   ```

3. **Access your services** (see URLs below)

That's it! All services will be running and accessible through Traefik.

## 🌐 Service URLs

All services are accessible through **Traefik** reverse proxy with subdomain-based routing:

| Service | URL | Description |
|---------|-----|-------------|
| **Frontend** | http://localhost | Next.js application (Port 80) |
| **FastAPI** | http://api.localhost | FastAPI backend with auto docs |
| **Django Admin** | http://django.localhost/admin | Django administration panel |
| **PgAdmin** | http://pgadmin.localhost | PostgreSQL database management |
| **Jenkins** | http://jenkins.localhost | CI/CD automation server |
| **Traefik Dashboard** | http://localhost:8090 | Monitor all routes and services |
| **gRPC Service** | http://grpc.localhost | Python gRPC service |
| **Rust Service** | http://rust.localhost | Actix-web microservice |

### 🔐 Default Credentials

**PgAdmin:**
- Email: `admin@nexpyrs.dev`
- Password: `admin`

**PostgreSQL:**
- User: `postgres`
- Password: `password`
- Database: `nexpyrs`

**Jenkins:**
- Get initial password:
  ```bash
  docker exec nexpyrs-jenkins-1 cat /var/jenkins_home/secrets/initialAdminPassword
  ```

## 📁 Project Structure

```
NexPyRS/
├── web/                    # Next.js 14 frontend
│   ├── app/               # App router pages
│   ├── components/        # React components
│   └── Dockerfile
├── api/                    # Python backend services
│   ├── fastapi_app/       # FastAPI application
│   ├── django_app/        # Django application
│   ├── Dockerfile.fastapi
│   └── Dockerfile.django
├── grpcsvc/               # Python gRPC service
│   ├── server.py
│   └── Dockerfile
├── rustsvc/               # Rust Actix-web service
│   ├── src/
│   └── Dockerfile
├── traefik/               # Traefik configuration
│   └── dynamic.yml        # Static route definitions
├── docker-compose.yml     # Main orchestration file
└── .env.example          # Environment variables template

```

## 🛠️ Development

### Local Development Setup

1. **Copy environment file**
   ```bash
   cp .env.example .env
   ```

2. **Install Python dependencies** (optional, for IDE support)
   ```bash
   cd api
   uv sync
   ```

3. **Install Node dependencies** (optional, for IDE support)
   ```bash
   cd web
   npm install
   ```

### Running Services Locally (Without Docker)

**Frontend:**
```bash
cd web
npm run dev
# Access at http://localhost:3000
```

**FastAPI:**
```bash
cd api
uv run main.py fastapi
# Access at http://localhost:8000
```

**Django:**
```bash
cd api
uv run main.py django
# Access at http://localhost:8001
```

### Direct Port Access (For Debugging)

Uncomment the `ports` section in `docker-compose.yml` to enable direct access:

```yaml
# Example for frontend:
ports:  # Uncomment for direct access (bypassing Traefik)
  - "3000:3000"
```

This allows accessing services directly:
- Frontend: `http://localhost:3000`
- FastAPI: `http://localhost:8000`
- Django: `http://localhost:8001`

## 🐳 Docker Commands

### Multi-Environment Support

This project includes specialized Docker configurations for different environments:

| Environment | Command | Description |
|-------------|---------|-------------|
| **Development** | `docker-compose -f docker-compose.dev.yml up -d` | Hot-reloading, debug mode, direct port access. |
| **Staging**     | `docker-compose -f docker-compose.stage.yml up -d` | Pre-production testing with staging URLs. |
| **Production**  | `docker-compose -f docker-compose.prod.yml up -d` | Hardened security, HTTPS (TLS), resource limits. |

### Default Start
```bash
docker-compose up -d
```

### View logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f frontend
```

### Restart a service
```bash
docker-compose restart frontend
```

### Check running containers
```bash
docker-compose ps
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the project root (use `.env.example` as template):

```env
# Project
PROJECT_NAME=NexPyRS
STACK_NAME=nexpyrs
DOMAIN=localhost

# Database
POSTGRES_SERVER=db
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_DB=nexpyrs

# PgAdmin
PGADMIN_DEFAULT_EMAIL=admin@nexpyrs.dev
PGADMIN_DEFAULT_PASSWORD=admin

# Ports (for direct access)
FRONTEND_PORT=3000
API_PORT=8000
DJANGO_PORT=8001
```

### Traefik Configuration

Traefik uses two configuration methods:

1. **Docker Labels** (in `docker-compose.yml`) - For auto-discovery
2. **Static File** (`traefik/dynamic.yml`) - For manual route definitions

The static file is used as a fallback on Windows where Docker socket access may have issues.

## 🏗️ Architecture

### Tech Stack

**Frontend:**
- Next.js 14 (React 18, App Router)
- TailwindCSS
- Shadcn UI
- TypeScript

**Backend:**
- FastAPI (Python 3.12) - REST API
- Django 5.0 (Python 3.12) - Admin & ORM
- Python gRPC - Microservices communication
- Rust Actix-web - High-performance service

**Infrastructure:**
- PostgreSQL 17 - Database
- Traefik v3.0 - Reverse proxy & load balancer
- Jenkins LTS - CI/CD automation
- PgAdmin - Database management
- Docker & Docker Compose

### Traffic Flow

```
Browser Request
    ↓
Traefik (Port 80)
    ↓
├─→ localhost              → Frontend (Next.js)
├─→ api.localhost          → FastAPI Backend
├─→ django.localhost       → Django Backend
├─→ pgadmin.localhost      → PgAdmin
├─→ jenkins.localhost      → Jenkins
├─→ grpc.localhost         → gRPC Service
└─→ rust.localhost         → Rust Service
```

## 🔄 CI/CD

### GitHub Actions

A CI/CD workflow is included in `.github/workflows/ci.yml` that:
- Runs backend tests (FastAPI & Django)
- Runs frontend tests (linting, build, unit tests)
- Builds Docker images
- Performs code quality checks (ruff, mypy)

### Jenkins

Jenkins is pre-configured with Docker-in-Docker support for building and deploying containers.

**First-time setup:**
1. Access http://jenkins.localhost
2. Get password: `docker exec nexpyrs-jenkins-1 cat /var/jenkins_home/secrets/initialAdminPassword`
3. Install suggested plugins
4. Create admin user

## 📊 Database Management

### PgAdmin Access

1. Go to http://pgadmin.localhost
2. Login with credentials (see above)
3. Add server:
   - Host: `db`
   - Port: `5432`
   - Username: `postgres`
   - Password: `password`

### Direct Database Access

```bash
docker exec -it nexpyrs-db-1 psql -U postgres -d nexpyrs
```

## 🧪 Testing

### Backend Tests
```bash
cd api
uv run pytest
```

### Frontend Tests
```bash
cd web
npm test
```

## 📝 API Documentation

- **FastAPI Docs**: http://api.localhost/docs (Swagger UI)
- **FastAPI ReDoc**: http://api.localhost/redoc
- **Django Admin**: http://django.localhost/admin

## 🐛 Troubleshooting

### Port 80 shows 404
- Restart Traefik: `docker-compose restart traefik`
- Check Traefik dashboard: http://localhost:8090

### Database connection errors
- Wait 10-15 seconds for PostgreSQL to initialize
- Check DB health: `docker-compose ps db`

### Jenkins 403 Forbidden
- This is normal - Jenkins is working
- Just access http://jenkins.localhost in browser

### Service not accessible
```bash
# Check if container is running
docker-compose ps

# View logs
docker-compose logs <service-name>

# Restart service
docker-compose restart <service-name>
```

### Traefik can't discover containers (Windows)
- The project uses static file configuration as fallback
- Routes are defined in `traefik/dynamic.yml`
- No action needed - everything should work

## 🔐 Security Notes

**For Production:**
1. Change all default passwords in `.env`
2. Enable HTTPS in Traefik configuration
3. Set secure database credentials
4. Configure proper CORS settings
5. Enable authentication on all services
6. Review and update security headers

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Django Documentation](https://docs.djangoproject.com/)
- [Traefik Documentation](https://doc.traefik.io/traefik/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

## 🤝 Contributing

See [CONTRIBUTING.md](web/app/contribute/page.tsx) for guidelines.

## 📄 License

MIT License - see LICENSE file for details

## 👥 Authors

- Nishanth KJ - [GitHub](https://github.com/nishanth-kj)

---

**Built with ❤️ using Next.js, FastAPI, Django, Rust, and Docker**
