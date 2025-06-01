import SpringFromAbove from "@/animation/SpringFromAbove";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 flex items-center justify-between px-4 text-white shadow-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div>
        <SpringFromAbove className="text-2xl font-bold">
          <button>Perth</button>
        </SpringFromAbove>
      </div>
      <div className="flex space-x-4">
        <SpringFromAbove delay={0.1}>
          <button>About Me</button>
        </SpringFromAbove>
        <SpringFromAbove delay={0.2}>
          <button>Project</button>
        </SpringFromAbove>
        <SpringFromAbove delay={0.3}>
          <button>Contact</button>
        </SpringFromAbove>
      </div>
    </nav>
  );
}
