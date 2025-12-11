# Deployment

NexPyRS is designed to be deployed as a containerized stack.

## Production Checklist

1.  [ ] **Environment Variables**: Ensure `.env` is populated with strong passwords and production settings.
2.  [ ] **HTTPS**: Configure Traefik with Let's Encrypt (CertResolver) for automatic SSL.
3.  [ ] **Database**: Consider using a managed database (RDS, Cloud SQL) instead of the containerized one for data persistence safety.

## Docker Swarm / Compose (Simple)

The easiest way to deploy to a VPS (DigitalOcean, EC2, Linode):

1.  **Clone & Setup**:
    ```bash
    git clone ...
    cd NexPyRS
    # Configure production settings
    uv run manage.py setup
    ```

2.  **Run in Detached Mode**:
    ```bash
    docker-compose -f docker-compose.yml up -d --build
    ```

## Kubernetes (K8s)

To deploy to Kubernetes, you will need to convert the `docker-compose.yml` to K8s manifests.

*   **Kompose**: You can use `kompose convert` to generate base manifests.
*   **Ingress**: Use `Traefik` IngressRoute CRDs instead of Docker labels.

## GitHub Pages (Documentation)

This documentation site is ready for GitHub Pages!

1.  Push the `docs/` folder to your main branch.
2.  Go to Repo Settings > Pages.
3.  Select `/docs` folder as source.
