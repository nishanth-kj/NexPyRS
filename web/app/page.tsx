'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type ChatMessage = {
  user?: string;
  content: string;
};

export default function Home() {
  const [wsMessage, setWsMessage] = useState<string>('');
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Connect to WebSocket
    // In browser, host needs to be localhost or the public IP.
    // Since Nginx proxies /ws to API, we use window.location.host
    if (typeof window !== 'undefined') {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const wsUrl = `${protocol}//${window.location.host}/ws`;
        
        const ws = new WebSocket(wsUrl);
        wsRef.current = ws;

         ws.onopen = () => {
          console.log('Connected to WS');
        };

        ws.onmessage = (event: MessageEvent) => {
          try {
            const data = JSON.parse(event.data);
            setChatLog((prev) => [...prev, data]);
          } catch (e) {
            setChatLog((prev) => [...prev, { content: event.data }]);
          }
        };

        return () => {
          ws.close();
        };
    }
  }, []);

  const sendBroadcast = () => {
    if (wsRef.current && wsMessage) {
      wsRef.current.send(JSON.stringify({ type: 'broadcast', message: wsMessage }));
      setWsMessage('');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div className="flex items-center gap-4 mb-6">
        <Image src="/logo.svg" alt="NexPyRS Logo" width={120} height={120} priority />
      </div>
      <nav>
        <ul>
          <li><a href="/api/health">Check API Health</a></li>
          <li><a href="/graphql">GraphQL Playground</a></li>
          <li><a href="/rust/health">Check Rust Health</a></li>
          <li><a href="/grpc-test">Go to gRPC Test Page</a></li>
          <li><a href="/contribute" style={{ color: 'green', fontWeight: 'bold' }}>Contribute</a></li>
        </ul>
      </nav>

      <hr />

      <h2>WebSocket Broadcast Test</h2>
      <input 
        type="text" 
        value={wsMessage} 
        onChange={(e) => setWsMessage(e.target.value)}
        placeholder="Type a message..."
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <button onClick={sendBroadcast} style={{ padding: '8px 16px' }}>Broadcast</button>
      
      <div style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '1rem', height: '200px', overflowY: 'auto', background: 'white' }}>
        {chatLog.map((msg, idx) => (
          <div key={idx}><strong>{msg.user || 'System'}:</strong> {msg.content}</div>
        ))}
      </div>
    </div>
  );
}
