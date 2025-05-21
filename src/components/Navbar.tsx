export default function Navbar() {
  return (
    <nav
      className="sticky top-0 flex items-center justify-between px-4 text-white shadow-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="text-lg font-bold">Perth&apos;s Folio</div>
      <ul className="flex space-x-4" aria-label="Primary site links">
        <li>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
