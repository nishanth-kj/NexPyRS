# Build stage
FROM drogonframework/drogon:latest AS build
WORKDIR /workspace
COPY . .
RUN cmake -B build -S . && cmake --build build

# Run stage
FROM drogonframework/drogon:latest
WORKDIR /app
COPY --from=build /workspace/build/api_dragon /app/api_dragon
EXPOSE 8080
ENTRYPOINT ["./api_dragon"]
