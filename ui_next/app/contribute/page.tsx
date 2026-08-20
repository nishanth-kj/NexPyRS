import Link from 'next/link';
import { ArrowLeft, Github, Code, GitPullRequest, Bug, Lightbulb } from 'lucide-react';

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contributing to NexPyRS</h1>
        <p className="text-xl text-muted-foreground mb-12">
          We welcome contributions from the community! Here's how you can help make NexPyRS better.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Github className="w-6 h-6 text-indigo-500" />
              Getting Started
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Before you start contributing, please read our contribution guidelines and code of conduct.
              </p>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>Fork the repository on GitHub</li>
                <li>Clone your fork locally: <code className="bg-secondary px-2 py-1 rounded">git clone https://github.com/nishanth-kj/NexPyRS.git</code></li>
                <li>Create a new branch: <code className="bg-secondary px-2 py-1 rounded">git checkout -b feature/your-feature-name</code></li>
                <li>Make your changes and commit them with clear messages</li>
                <li>Push to your fork and submit a Pull Request</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Ways to Contribute</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-border bg-secondary/30">
                <Code className="w-8 h-8 text-indigo-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Code Contributions</h3>
                <p className="text-sm text-muted-foreground">
                  Implement new features, improve existing code, or optimize performance.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-secondary/30">
                <Bug className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Bug Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Found a bug? Report it on GitHub Issues with detailed reproduction steps.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-secondary/30">
                <GitPullRequest className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Improve documentation, write tutorials, or fix typos.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-secondary/30">
                <Lightbulb className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Feature Requests</h3>
                <p className="text-sm text-muted-foreground">
                  Have an idea? Open a discussion on GitHub to share your thoughts.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Development Setup</h2>
            <div className="bg-neutral-900 dark:bg-neutral-950 rounded-lg border border-border p-6 overflow-x-auto">
              <pre className="text-sm text-green-400">
                {`# Install dependencies
uv sync
cd web && npm install

# Start development servers
uv run main.py fastapi  # FastAPI on :8000
uv run main.py django   # Django on :8001
cd web && npm run dev   # Next.js on :3000

# Run tests
uv run pytest           # Backend tests
cd web && npm test      # Frontend tests`}
              </pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Code of Conduct</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We are committed to providing a welcoming and inclusive environment for all contributors.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Be respectful and considerate of others</li>
                <li>Welcome newcomers and help them get started</li>
                <li>Accept constructive criticism gracefully</li>
                <li>Focus on what's best for the community</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Pull Request Guidelines</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed mb-4">
                To ensure your PR is accepted quickly:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Follow the existing code style and conventions</li>
                <li>Write clear, descriptive commit messages</li>
                <li>Add tests for new features</li>
                <li>Update documentation as needed</li>
                <li>Ensure all tests pass before submitting</li>
                <li>Keep PRs focused on a single feature or fix</li>
              </ul>
            </div>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or need help getting started, feel free to:{' '}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="https://github.com/nishanth-kj/NexPyRS/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
              >
                <Github className="w-5 h-5" />
                Open an Issue
              </a>
              <a
                href="https://github.com/nishanth-kj/NexPyRS/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/50 font-medium hover:bg-secondary transition-all"
              >
                Start a Discussion
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
