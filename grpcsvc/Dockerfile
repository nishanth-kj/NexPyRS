FROM python:3.12-slim

WORKDIR /app

# Install grpcio dependencies directly with pip
RUN pip install --no-cache-dir grpcio grpcio-tools

# Copy application code
COPY . .

EXPOSE 50051

CMD ["python", "server.py"]
