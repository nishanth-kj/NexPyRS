import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
    return (
        <footer className="relative z-10 border-t border-border bg-background/50 backdrop-blur-xl mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4">
                            <Logo className="w-8 h-8" />
                            <span>NexPyRS</span>
                        </div>
                        <p className="text-sm text-neutral-400">
                            Build scalable applications with Next.js, FastAPI, and Django.
                        </p>
                    </div>

                    {/* Documentation */}
                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Documentation</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/docs/getting-started" className="hover:text-foreground transition-colors">Getting Started</Link></li>
                            <li><Link href="/docs" className="hover:text-foreground transition-colors">API Reference</Link></li>
                            <li><Link href="/components" className="hover:text-foreground transition-colors">Components</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="https://github.com/nishanth-kj/NexPyRS" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a></li>
                            <li><Link href="/feed.xml" className="hover:text-foreground transition-colors">RSS Feed</Link></li>
                            <li><a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Next.js Docs</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
                        <div className="flex gap-4">
                            <a href="https://github.com/nishanth-kj" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://x.com/nishanth_kj" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/nishanth-kj" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} NexPyRS. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
