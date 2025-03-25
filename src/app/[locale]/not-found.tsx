import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl mb-8">Page Not Found</h2>
            <p className="text-white/70 mb-8 text-center max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-[#fbd784] text-black font-medium rounded-md hover:bg-[#fbd784]/90 transition-colors"
            >
                Return to Homepage
            </Link>
        </div>
    )
}

