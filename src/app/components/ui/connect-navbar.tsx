export default function connectNavbar() {
  return (
    <nav className="navbar flex flex-col top-10 px-7 md:px-2 py-3 space-y-4 bg-gray-800 text-white w-64">
      <ul>
        <li className="px-3 py-2 hover:bg-gray-700 rounded">
          <a
            href="https://twitter.com/tamalCodes"
            aria-label="Twitter profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* SVG Icon */}
            Twitter
          </a>
        </li>
        <li className="px-3 py-2 hover:bg-gray-700 rounded">
          <a
            href="https://github.com/tamalCodes"
            aria-label="GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* SVG Icon */}
            GitHub
          </a>
        </li>
        <li className="px-3 py-2 hover:bg-gray-700 rounded">
          <a
            href="https://linkedin.com/in/tamalCodes"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* SVG Icon */}
            LinkedIn
          </a>
        </li>
      </ul>
      <p className="px-3 py-2">Menu</p>
    </nav>
  );
}
