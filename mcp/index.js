const express = require("express");
const { McpServer } = require("@modelcontextprotocol/sdk/server/mcp.js");
const { SSEServerTransport } = require("@modelcontextprotocol/sdk/server/sse.js");
const { z } = require("zod");

const app = express();
const port = 3001;

const server = new McpServer({
  name: "NexPyRS-MCP",
  version: "1.0.0"
});

// Example Tool exposed via MCP
server.tool(
  "get_system_status",
  "Returns the status of all microservices",
  {},
  async () => {
    return {
      content: [
        { type: "text", text: "All NexPyRS microservices are running nominally. Redis: OK, RabbitMQ: OK, Kafka: OK." }
      ]
    };
  }
);

let transport;

app.get("/sse", async (req, res) => {
  transport = new SSEServerTransport("/message", res);
  await server.connect(transport);
});

app.post("/message", express.json(), async (req, res) => {
  if (transport) {
    await transport.handlePostMessage(req, res);
  } else {
    res.status(503).send("No SSE connection established");
  }
});

app.listen(port, () => {
  console.log(`NexPyRS MCP Server running on port ${port}`);
});
