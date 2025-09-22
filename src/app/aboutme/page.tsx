import FadeInDiv from "@/animation/FadeInDiv";
import StartSpark from "@/animation/StarSpark";
import Image from "next/image";

export const metadata = {
  title: "My Portfolio - About Me",
  description: "Learn more about me and my background.",
};

export default function AboutMe() {
  return (
    <div className="flex min-h-[calc(100vh-100px)] flex-col">
      <FadeInDiv
        delay={0.1}
        className="mb-10 flex flex-col-reverse md:grid md:grid-cols-2"
      >
        <div className="flex flex-col self-center md:pl-44">
          <h1 className="text-xl font-bold">Hello, I&apos;m Pawit</h1>
          <h1 className="bg-gradient-to-br from-[rgba(102,204,255,1)] to-[rgba(255,153,255,0.8)] bg-clip-text text-2xl font-bold text-transparent md:text-9xl">
            Full Stack Developer
          </h1>
        </div>
        <Image
          src={"/images/profiles/image.png"}
          width={300}
          height={400}
          alt="profile image"
          className="scale-[calc(100vw / 400)] m-4 place-self-center rounded-xl border border-gray-300 object-cover shadow-lg md:scale-100"
        />
      </FadeInDiv>
      <FadeInDiv className="flex flex-col items-center justify-center">
        <StartSpark>
          <h1 className="text-2xl font-bold">About Me</h1>
        </StartSpark>
      </FadeInDiv>
      <div className="flex md:grid md:grid-cols-[40%_60%]">
        <FadeInDiv delay={0.2} className="flex flex-col items-center">
          <h1 className="text-center text-4xl font-bold">Pawit Thongkum</h1>
        </FadeInDiv>
        <FadeInDiv delay={0.4} className="h-full w-full">
          <p className="mt-4">
            I am a Computer Engineering student at Kasetsart University. I have
            a passion for technology and love to learn new things. In my free
            time, I enjoy reading books, playing video games, and exploring the
            outdoors.
          </p>
        </FadeInDiv>
      </div>
    </div>
  );
}
