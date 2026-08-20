import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'NexPyRS - Python Full-Stack Monorepo',
  description: 'Build scalable applications with Next.js 14, FastAPI, and Django. All unified in a single, powerful workspace.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full dark">
      <body className="min-h-full bg-background text-foreground font-sans antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        {children}
        <Script
          id="unregister-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for(let registration of registrations) {
                      registration.unregister();
                    }
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
