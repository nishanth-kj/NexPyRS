# Tools & Integrations

The NexPyRS repository is equipped with several modern integrations to streamline development.

## AI Agent Customizations (`.agents`)

The `.agents` directory is automatically discovered by your AI Agent. It is used to customize the agent's behavior globally for this specific project.

*   **`rules/`**: Contains markdown files defining universal coding standards, git workflows, and testing principles. The agent automatically adheres to these rules while generating or reviewing code.
*   **`skills/`**: Contains custom skills (e.g., `generate_tests`, `refactor_code`) that you can trigger on demand to execute multi-step workflows.

## gRPC & Protocol Buffers (`grpc`)

The `grpc/` directory contains all `.proto` definitions and generation configurations for our polyglot microservices.

*   We use **Buf** to manage and compile Protobufs. It leverages remote plugins, meaning **no local `protoc` installation is required**.
*   To generate the code for all languages (Python, Go, TypeScript, Java, C++, Rust), simply run:
    ```bash
    cd grpc
    buf generate
    ```
*   The generated code will be placed in `grpc/generated/<language>/`.

## CI/CD Pipeline (`jenkins`)

The project includes a customized Jenkins setup for automated builds and testing.

*   The root `docker-compose.yml` runs a tailored Jenkins image (built from `jenkins/Dockerfile`) that includes the **Docker CLI** (for sibling container builds) and **Buf** (for automated gRPC generation).
*   The `jenkins/Jenkinsfile` provides a starting declarative pipeline for checking out code, installing dependencies, running Python/Rust tests in parallel, and building artifacts.

## Web3 Local Nodes (`web3`)

For blockchain and smart contract development, the `web3` configuration provides local test nodes.

*   Pre-configured local nodes for **Ethereum** (via Ganache) and **Solana** (via `solana-test-validator`).
*   These servers can be spun up using Docker Compose for isolated and deterministic local blockchain testing.
