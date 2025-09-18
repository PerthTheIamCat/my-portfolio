import SpringFromAbove from "@/animation/SpringFromAbove";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav
      className="sticky top-0 z-10 flex items-center justify-between px-4 text-white backdrop-blur-xs"
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
      <div className="flex space-x-4">
        <SpringFromAbove delay={0.1}>
          <button
            onClick={() => {
              router.push("/aboutme");
            }}
          >
            About Me
          </button>
        </SpringFromAbove>
        <SpringFromAbove delay={0.2}>
          <button
            onClick={() => {
              router.push("/projects");
            }}
          >
            Project
          </button>
        </SpringFromAbove>
        <SpringFromAbove delay={0.3}>
          <button
            onClick={() => {
              router.push("/aboutme");
            }}
          >
            Contact
          </button>
        </SpringFromAbove>
      </div>
    </nav>
  );
}
