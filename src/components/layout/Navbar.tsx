export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-gray-800">
        {/* Left nav links */}
        <a
          href="#"
          className="text-2xl font-bold tracking-wider font-serif text-purple-800 no-underline"
        >
          Miss ✨ Baguio<span className="ml-1 text-yellow-500"></span>
        </a>

        {/* Center navigation links */}
        <div className="flex gap-6 text-sm font-medium">
          <a
            href="#about"
            className="hover:text-purple-600 transition no-underline"
          >
            About
          </a>
          <a
            href="#partners"
            className="hover:text-purple-600 transition no-underline"
          >
            Partners
          </a>
          <a
            href="#contact"
            className="hover:text-purple-600 transition no-underline"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}
