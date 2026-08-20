import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Welcome to NexPyRS. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you about how we look after your personal data when you visit our
                            website and tell you about your privacy rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li><strong>Technical Data:</strong> IP address, browser type, operating system, and device information</li>
                            <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
                            <li><strong>Contact Data:</strong> Email address and name (if you contact us)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Provide, operate, and maintain our website</li>
                            <li>Improve, personalize, and expand our services</li>
                            <li>Understand and analyze how you use our website</li>
                            <li>Communicate with you about updates and changes</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We use cookies and similar tracking technologies to track activity on our website and store certain information.
                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We have implemented appropriate security measures to prevent your personal data from being accidentally lost,
                            used, or accessed in an unauthorized way. We limit access to your personal data to those who have a genuine
                            business need to know it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Under data protection laws, you have rights including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>The right to access your personal data</li>
                            <li>The right to correct inaccurate data</li>
                            <li>The right to request deletion of your data</li>
                            <li>The right to object to processing of your data</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy, please reach out to us on social media:
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/nishanth-kj/NexPyRS"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary/50 hover:bg-secondary transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://x.com/nishanth_kj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary/50 hover:bg-secondary transition-colors"
                            >
                                X (Twitter)
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
