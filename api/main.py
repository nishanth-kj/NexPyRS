from fastapi import FastAPI
from fastapi.responses import JSONResponse
# strawberry / websockets imports would go here
# Keeping it simple for restoration as per original request + UV support

app = FastAPI()

@app.get("/api/health")
async def health():
    return {"service": "fastapi", "status": "ok"}

@app.get("/")
async def root():
    return {"message": "NexPyRS API"}
