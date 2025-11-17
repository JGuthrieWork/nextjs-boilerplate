// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold font-sans tracking-tighter">
              Sparkle<span className="text-blue-600">Detail</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link href="/about" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</Link>
              <Link href="/gallery" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Gallery</Link>
              <Link href="/contact" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
              <Link href="/schedule" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}