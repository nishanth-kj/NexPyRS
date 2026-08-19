import Link from 'next/link';
import { ArrowLeft, Check, Terminal } from 'lucide-react';

export default function GettingStartedPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link href="/docs" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Docs
                </Link>

                <header className="mb-12 border-b border-white/10 pb-8">
                    <h1 className="text-4xl font-bold mb-4">Getting Started</h1>
                    <p className="text-xl text-neutral-400">
                        Setup your environment and run the full stack in minutes.
                    </p>
                </header>

                <section className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-indigo-400">Prerequisites</h2>
                        <ul className="space-y-3 text-neutral-300">
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Python 3.12+ installed</li>
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Node.js 18+ installed</li>
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> <code>uv</code> package manager (recommended)</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-indigo-400">Quick Start</h2>
                        <p className="text-neutral-400">Clone the repository and install dependencies.</p>

                        <div className="bg-neutral-900 rounded-lg border border-white/10 overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-white/5">
                                <Terminal className="w-4 h-4 text-neutral-500" />
                                <span className="text-xs text-neutral-500 font-mono">Terminal</span>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="font-mono text-sm text-green-400">
                                    {`# 1. Clone the repo
git clone https://github.com/nishanth-kj/NexPyRS.git
cd NexPyRS

# 2. Install Python dependencies
uv sync

# 3. Install Frontend dependencies
cd web
npm install
cd ..`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-indigo-400">Running Services</h2>
                        <p className="text-neutral-400">You can run services individually using our unified CLI.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-neutral-900 rounded-lg border border-white/10 p-4">
                                <h3 className="text-white font-medium mb-2">Start FastAPI</h3>
                                <code className="text-sm bg-white/10 px-2 py-1 rounded text-purple-300">uv run main.py fastapi</code>
                            </div>
                            <div className="bg-neutral-900 rounded-lg border border-white/10 p-4">
                                <h3 className="text-white font-medium mb-2">Start Django</h3>
                                <code className="text-sm bg-white/10 px-2 py-1 rounded text-green-300">uv run main.py django</code>
                            </div>
                            <div className="bg-neutral-900 rounded-lg border border-white/10 p-4">
                                <h3 className="text-white font-medium mb-2">Start Frontend</h3>
                                <code className="text-sm bg-white/10 px-2 py-1 rounded text-blue-300">cd web && npm run dev</code>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
