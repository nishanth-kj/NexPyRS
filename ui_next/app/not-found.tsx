export default function NotFound() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6">
            <div className="text-center">
                <h1 className="text-9xl font-bold bg-gradient-to-br from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">
                    404
                </h1>
                <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-neutral-400 mb-8 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <a
                    href="/"
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-neutral-950 font-semibold hover:bg-neutral-200 transition-all"
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
}
