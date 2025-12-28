'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Server, Activity, Database, Code, Github, BookOpen, Menu, X } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/Logo';

export default function Home() {
  const [apiStatus, setApiStatus] = useState<'loading' | 'online' | 'offline'>('loading');
  const [djangoStatus, setDjangoStatus] = useState<'loading' | 'online' | 'offline'>('loading');

  useEffect(() => {
    // Check FastAPI Health
    fetch('http://localhost:8000/api/health')
      .then(res => res.ok ? setApiStatus('online') : setApiStatus('offline'))
      .catch(() => setApiStatus('offline'));

    // Check Django Health
    fetch('http://localhost:8001/')
      .then(res => res.ok ? setDjangoStatus('online') : setDjangoStatus('offline'))
      .catch(() => setDjangoStatus('offline'));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-indigo-500 selection:text-white bg-gradient-overlay relative">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 dark:bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 dark:bg-purple-600/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 border-b border-border bg-background/50 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Logo className="w-8 h-8" />
            <span>NexPyRS</span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/docs" className="hover:text-foreground transition-colors">Documentation</Link>
            <Link href="/components" className="hover:text-foreground transition-colors">Components</Link>
            <a href="https://github.com/nishanth-kj/NexPyRS" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6">
          <div className="w-full max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-medium text-indigo-500 dark:text-indigo-400 mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              v0.1.0 Monorepo Active
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              The Ultimate Python <br /> Full-Stack Monorepo.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Build scalable applications with <strong>Next.js 14</strong> frontend, high-performance <strong>FastAPI</strong>, and robust <strong>Django</strong> services. All unified in a single, powerful workspace.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/docs/getting-started" className="group h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:opacity-90 transition-all">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="h-12 px-6 rounded-full border border-border bg-secondary/50 text-foreground font-medium flex items-center gap-2 hover:bg-secondary transition-all cursor-copy" onClick={() => navigator.clipboard.writeText('uv run main.py start')}>
                $ uv run main.py start
              </div>
            </div>
          </div>
        </section>

        {/* Status Dashboard */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Frontend Card */}
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Code className="w-6 h-6" />
                  </div>
                  <span className="px-2 py-1 rounded-md bg-green-500/20 text-green-400 text-xs font-medium flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Online
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Next.js Frontend</h3>
                <p className="text-sm text-neutral-400">React 18, Tailwind CSS, and Shadcn UI ready. Served on port 3000.</p>
              </div>

              {/* FastAPI Card */}
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400">
                    <Activity className="w-6 h-6" />
                  </div>
                  <StatusBadge status={apiStatus} />
                </div>
                <h3 className="text-lg font-semibold mb-2">FastAPI Service</h3>
                <p className="text-sm text-neutral-400">High-performance async Python API. Running on port 8000.</p>
              </div>

              {/* Django Card */}
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-green-900/40 text-green-400">
                    <Database className="w-6 h-6" />
                  </div>
                  <StatusBadge status={djangoStatus} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Django Service</h3>
                <p className="text-sm text-neutral-400">Robust backend with ORM and Admin. Running on port 8001.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Engineered for Scale</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Type Safe', desc: 'End-to-end type safety with TypeScript and Pydantic.' },
                { title: 'Dockerized', desc: 'Production-ready containers for all services.' },
                { title: 'Unified Tooling', desc: 'Space-age development with Astral UV and Turbopack.' },
                { title: 'Modern UI', desc: 'Beautiful, accessible components built right in.' },
              ].map((feature, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function StatusBadge({ status }: { status: 'loading' | 'online' | 'offline' }) {
  if (status === 'loading') {
    return <span className="px-2 py-1 rounded-md bg-yellow-500/10 text-yellow-400 text-xs font-medium">Checking...</span>;
  }
  if (status === 'online') {
    return (
      <span className="px-2 py-1 rounded-md bg-green-500/20 text-green-400 text-xs font-medium flex items-center gap-1">
        <CheckCircle className="w-3 h-3" /> Online
      </span>
    );
  }
  return (
    <span className="px-2 py-1 rounded-md bg-red-500/20 text-red-400 text-xs font-medium flex items-center gap-1">
      <Server className="w-3 h-3" /> Offline
    </span>
  );
}
