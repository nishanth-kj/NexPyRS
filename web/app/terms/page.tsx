import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
                <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            By accessing or using NexPyRS, you agree to be bound by these Terms of Service and all applicable
                            laws and regulations. If you do not agree with any of these terms, you are prohibited from using
                            or accessing this site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">License to Use</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            NexPyRS is an open-source project. The codebase is licensed under the MIT License, which grants you:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Permission to use, copy, modify, and distribute the software</li>
                            <li>The right to use the software for commercial purposes</li>
                            <li>The freedom to sublicense and/or sell copies of the software</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            The software is provided "as is", without warranty of any kind.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            You agree not to use NexPyRS to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Violate any applicable laws or regulations</li>
                            <li>Infringe upon the rights of others</li>
                            <li>Distribute malware or harmful code</li>
                            <li>Attempt to gain unauthorized access to our systems</li>
                            <li>Interfere with or disrupt the service</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The NexPyRS name, logo, and branding are trademarks. While the codebase is open-source,
                            the trademarks remain protected. You may not use our trademarks without prior written permission,
                            except as necessary to accurately describe the software.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            NexPyRS is provided "as is" and "as available" without any warranties of any kind, either express or implied.
                            We do not warrant that the service will be uninterrupted, secure, or error-free.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            In no event shall NexPyRS, its creators, or contributors be liable for any indirect, incidental,
                            special, consequential, or punitive damages arising out of your use of the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We reserve the right to modify or replace these Terms at any time. We will provide notice of any
                            material changes by posting the new Terms on this page. Your continued use of the service after
                            such changes constitutes acceptance of the new Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            If you have any questions about these Terms of Service, please reach out to us on social media:
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
