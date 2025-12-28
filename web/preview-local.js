#!/usr/bin/env node

/**
 * Local preview server for GitHub Pages build
 * This serves the 'out' directory at the root for easy local testing
 */

const handler = require('serve-handler');
const http = require('http');
const path = require('path');

const server = http.createServer((request, response) => {
    return handler(request, response, {
        public: 'out',
        cleanUrls: false,
        trailingSlash: true,
    });
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log('\n✓ Local preview server running!\n');
    console.log('  URLs to test:');
    console.log(`  - Root:       http://localhost:${PORT}/`);
    console.log(`  - With path:  http://localhost:${PORT}/NexPyRS/\n`);
    console.log('  Note: On GitHub Pages, your site will be at /NexPyRS/');
    console.log('        For local testing, both URLs above should work.\n');
    console.log('  Press Ctrl+C to stop\n');
});
