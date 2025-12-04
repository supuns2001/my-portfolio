export default function Footer() {
    return (
        <footer className="py-8 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Supun Sulakshana. All rights reserved.</p>
                <p className="mt-2">Built with Next.js & Tailwind CSS</p>
            </div>
        </footer>
    );
}
