import Profile from "@/components/profile";
import InteractiveCircle from "@/components/InteractiveCircle";

export const metadata = {
  title: "My Portfolio - Home",
  description: "Welcome to my portfolio showcasing my work and skills.",
};

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[1fr_200px] overflow-hidden md:grid-cols-[1fr_1fr] md:grid-rows-1 md:justify-center">
      <Profile />
      <InteractiveCircle />
    </div>
  );
}
