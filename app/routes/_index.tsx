export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
			<div className="p-8 rounded-xl shadow-lg bg-white/80 border border-blue-200">
				<h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4 text-center">
					Sterling Cloudflare Remix Starter
				</h1>
				<p className="text-lg text-blue-900 text-center mb-2">
					🚀 TailwindCSS is <span className="font-semibold text-green-600">working!</span>
				</p>
				<p className="text-base text-blue-800 text-center">
					Edit <code className="bg-blue-100 px-1 rounded">app/routes/_index.tsx</code> to get started.
				</p>
			</div>
		</div>
	);
}
