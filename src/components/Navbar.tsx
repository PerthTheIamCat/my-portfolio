import SpringFromAbove from "@/animation/SpringFromAbove";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "About Me", href: "/aboutme" },
  { label: "Project", href: "/projects" },
  { label: "Resume", href: "/resume" },
] as const;

export default function Navbar() {
  const router = useRouter();
  return (
    <nav
      className="sticky top-0 z-10 flex items-center justify-between px-4 py-4 text-white backdrop-blur-xs"
      role="navigation"
      aria-label="Main navigation"
    >
      <div>
        <SpringFromAbove className="text-2xl font-bold">
          <button
            onClick={() => {
              router.push("/");
            }}
          >
            Perth
          </button>
        </SpringFromAbove>
      </div>
      <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm sm:text-base">
        {navItems.map((item, index) => (
          <SpringFromAbove key={item.href} delay={0.1 * (index + 1)}>
            <button
              type="button"
              className="transition-colors duration-200 hover:text-white/80"
              onClick={() => {
                router.push(item.href);
              }}
            >
              {item.label}
            </button>
          </SpringFromAbove>
        ))}
        <SpringFromAbove delay={0.4}>
          <button
            type="button"
            onClick={() => {
              router.push("/contact");
            }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-white to-white/85 px-4 py-2 font-semibold text-black shadow-lg shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5 hover:from-white hover:to-white"
          >
            Contact
          </button>
        </SpringFromAbove>
      </div>
    </nav>
  );
}
