import Link from 'next/link';
import { ArrowLeft, Box } from 'lucide-react';

export default function ComponentsPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white p-6 md:p-12">
            <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <div className="max-w-6xl mx-auto">
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-tr from-pink-500/20 to-purple-500/20 mb-6">
                        <Box className="w-8 h-8 text-pink-400" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                        Component Library
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        A collection of reusable, accessible, and beautiful components built with Tailwind CSS and Radix UI.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Buttons Card */}
                    <div className="p-8 rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur">
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-4">Buttons</h3>
                        <div className="flex flex-col gap-4">
                            <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors">Primary Button</button>
                            <button className="px-4 py-2 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/5">Secondary Button</button>
                            <button className="px-4 py-2 rounded-lg border border-red-500/30 text-red-400 font-medium hover:bg-red-500/10 transition-colors">Destructive</button>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="p-8 rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur">
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-4">Cards</h3>
                        <div className="p-4 rounded-xl border border-white/10 bg-neutral-800/50">
                            <div className="h-32 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-4 flex items-center justify-center">
                                <span className="text-xs text-white/40">Image Placeholder</span>
                            </div>
                            <div className="h-4 w-2/3 bg-white/10 rounded mb-2"></div>
                            <div className="h-3 w-1/2 bg-white/5 rounded"></div>
                        </div>
                    </div>

                    {/* Badges & Tags */}
                    <div className="p-8 rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur">
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-4">Badges</h3>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium border border-indigo-500/20">New</span>
                            <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium border border-green-500/20">Success</span>
                            <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-medium border border-yellow-500/20">Warning</span>
                            <span className="px-2 py-1 rounded-full bg-neutral-700 text-neutral-300 text-xs font-medium border border-white/10">Default</span>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-neutral-500 text-sm">More components coming soon via Shadcn UI integration.</p>
                </div>
            </div>
        </div>
    );
}
