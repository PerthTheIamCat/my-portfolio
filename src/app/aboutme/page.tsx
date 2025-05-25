import FadeInDiv from "@/animation/FadeInDiv";
import StartSpark from "@/animation/StarSpark";

export const metadata = {
  title: "My Portfolio - About Me",
  description: "Learn more about me and my background.",
};

export default function AboutMe() {
  return (
    <FadeInDiv className="flex flex-col items-center justify-center">
      <StartSpark>
        <h1 className="text-2xl font-bold">About Me</h1>
      </StartSpark>
      <p className="mt-4 text-center">
        I am a Computer Engineering student at Kasetsart University. I have a
        passion for technology and love to learn new things. In my free time, I
        enjoy reading books, playing video games, and exploring the outdoors.
      </p>
    </FadeInDiv>
  );
}
