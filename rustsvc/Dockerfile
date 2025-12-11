FROM rust:1.71 as builder
WORKDIR /usr/src/app
COPY . .
RUN cargo install --path .

FROM debian:bookworm-slim
COPY --from=builder /usr/local/cargo/bin/rustsvc /usr/local/bin/rustsvc
CMD ["rustsvc"]
