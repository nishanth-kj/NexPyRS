import Link from 'next/link';
import { ArrowLeft, BookOpen, Code, Terminal, Layers } from 'lucide-react';

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white p-6 md:p-12">
            <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Documentation
                </h1>
                <p className="text-xl text-neutral-400 mb-12">
                    Everything you need to build scalable full-stack applications with NexPyRS.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <DocCard
                        href="/docs/getting-started"
                        icon={<BookOpen className="w-6 h-6 text-indigo-400" />}
                        title="Getting Started"
                        desc="Installation, project structure, and running your first service."
                    />
                    <DocCard
                        href="#"
                        icon={<Terminal className="w-6 h-6 text-teal-400" />}
                        title="API Reference"
                        desc="Detailed endpoints for FastAPI and Django services."
                    />
                    <DocCard
                        href="#"
                        icon={<Layers className="w-6 h-6 text-purple-400" />}
                        title="Architecture"
                        desc="Deep dive into the monorepo structure and design patterns."
                    />
                    <DocCard
                        href="#"
                        icon={<Code className="w-6 h-6 text-pink-400" />}
                        title="Frontend Guide"
                        desc="Using Next.js, Tailwind, and Shadcn UI components effectively."
                    />
                </div>
            </div>
        </div>
    );
}

function DocCard({ href, icon, title, desc }: { href: string; icon: React.ReactNode; title: string; desc: string }) {
    return (
        <Link href={href} className="block p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-500/50 hover:bg-white/10 transition-all group">
            <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                {title}
            </h3>
            <p className="text-neutral-400 text-sm">
                {desc}
            </p>
        </Link>
    );
}
