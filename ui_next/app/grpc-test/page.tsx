'use client';

import { useState } from 'react';

export default function GrpcTestPage() {
  const [echoResponse] = useState<string>('Waiting for action...');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>gRPC-Web Test</h1>
      <p>
        To test gRPC-Web fully, you need to generate the JS stubs from the proto file.
        Run <code>npm run proto:gen</code> in the frontend directory (requires protoc).
      </p>
      <p>
        Envoy is running at /grpc (local 8080 mapped).
      </p>
      <div style={{ marginTop: '20px' }}>
        Status: {echoResponse}
      </div>
      <div style={{ marginTop: '20px' }}>
         <a href="/">Back to Home</a>
      </div>
    </div>
  );
}
