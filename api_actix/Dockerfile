# Build Stage
FROM rust:1.97-slim-bullseye AS build
WORKDIR /app
COPY . .
RUN cargo build --release

# Run Stage
FROM debian:bullseye-slim
WORKDIR /app
COPY --from=build /app/target/release/api_actix /app/api_actix
EXPOSE 8080
ENTRYPOINT ["./api_actix"]
