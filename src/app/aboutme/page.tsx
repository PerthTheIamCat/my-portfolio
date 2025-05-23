import FadeInDiv from "@/components/animation/FadeInDiv";

export default function AboutMe() {
  return (
    <FadeInDiv className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">About Me</h1>
      <p className="mt-4 text-center">
        I am a Computer Engineering student at Kasetsart University. I have a
        passion for technology and love to learn new things. In my free time, I
        enjoy reading books, playing video games, and exploring the outdoors.
      </p>
    </FadeInDiv>
  );
}
