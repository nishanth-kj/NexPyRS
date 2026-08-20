export function Logo({ className = "w-8 h-8" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Solid rounded square background */}
            <rect
                x="10"
                y="10"
                width="80"
                height="80"
                rx="20"
                fill="currentColor"
                className="text-indigo-600 dark:text-indigo-500"
            />

            {/* Horizontal dash/line in the center */}
            <rect
                x="30"
                y="45"
                width="40"
                height="10"
                rx="5"
                fill="white"
            />
        </svg>
    );
}
