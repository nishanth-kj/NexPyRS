import asyncio
import grpc
# Mocking proto imports for simplicity of restoration or assuming generated
# import nexpyrs_pb2
# import nexpyrs_pb2_grpc

async def serve():
    server = grpc.aio.server()
    # nexpyrs_pb2_grpc.add_NexServiceServicer_to_server(NexService(), server)
    server.add_insecure_port('[::]:50051')
    print("Starting server on port 50051")
    await server.start()
    await server.wait_for_termination()

if __name__ == '__main__':
    asyncio.run(serve())
