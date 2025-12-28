export async function GET() {
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NexPyRS - Python Full-Stack Monorepo</title>
    <link>http://localhost:3000</link>
    <description>Build scalable applications with Next.js, FastAPI, and Django</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="http://localhost:3000/feed.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title>Getting Started with NexPyRS</title>
      <link>http://localhost:3000/docs/getting-started</link>
      <description>Learn how to set up and run NexPyRS in minutes</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>http://localhost:3000/docs/getting-started</guid>
    </item>
    
    <item>
      <title>Component Library</title>
      <link>http://localhost:3000/components</link>
      <description>Explore the reusable component library built with Tailwind CSS</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>http://localhost:3000/components</guid>
    </item>
  </channel>
</rss>`;

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 's-maxage=3600, stale-while-revalidate',
        },
    });
}
