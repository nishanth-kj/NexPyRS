'use client';

import React from 'react';

export default function ContributePage() {
  return (
    <div className="container mx-auto p-8 max-w-2xl bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">Contribute to NexPyRS</h1>
      <p className="mb-4 text-gray-700">
        We are excited that you are interested in contributing! 
        NexPyRS is a monorepo designed to demonstrate a polyglot microservices architecture.
      </p>

      <h2 className="text-xl font-semibold mb-2">Ways to Contribute</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Report bugs and issues.</li>
        <li>Suggest new features.</li>
        <li>Improve documentation.</li>
        <li>Submit Pull Requests.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
      <div className="flex gap-4">
        <a 
          href="https://github.com/nishanthkj/NexPyRS" 
          target="_blank" 
          className="text-blue-600 hover:underline"
          rel="noreferrer"
        >
          GitHub Repository
        </a>
        <a 
          href="/docs/contributing" 
          className="text-blue-600 hover:underline"
        >
            (Local) CONTRIBUTING.md
        </a>
      </div>

      <div className="mt-8 border-t pt-4">
        <a href="/" className="text-gray-500 hover:text-gray-900">&larr; Back to Home</a>
      </div>
    </div>
  );
}
