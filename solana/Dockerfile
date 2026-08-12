FROM rust:1.76-slim

# Install dependencies for Solana and Anchor
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    pkg-config \
    libssl-dev \
    libudev-dev \
    clang \
    && rm -rf /var/lib/apt/lists/*

# Install Solana CLI
RUN sh -c "$(curl -sSfL https://release.solana.com/v1.18.4/install)"
ENV PATH="/root/.local/share/solana/install/active_release/bin:${PATH}"

WORKDIR /app
EXPOSE 8899 8900
# Run the local Solana test validator
CMD ["solana-test-validator"]
