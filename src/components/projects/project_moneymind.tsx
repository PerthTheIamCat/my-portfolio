import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import FadeInDiv from "@/animation/FadeInDiv";
import SpringFormAbove from "@/animation/SpringFromAbove";

export default function ProjectMoneyMind() {
  return (
    <SpringFormAbove className="flex min-h-screen w-full justify-center">
      <FadeInDiv className="flex h-fit w-full max-w-4/5 flex-col-reverse items-center gap-6 p-4 md:max-h-1/3 md:flex-row md:justify-center">
        <div className="flex flex-col md:w-1/2">
          <h1 className="text-4xl">MoneyMind</h1>
          <p className="text-lg">
            Track smarter. Spend clearer. Grow further. MoneyMind helps you log
            income & expenses fast, stay on budget, unlock insights, and build
            toward long-term goals—right up to retirement.
          </p>
          <a
            className="my-10 w-full max-w-fit cursor-pointer rounded-full border-2 border-white px-10 py-2 md:px-20"
            href="https://github.com/PerthTheIamCat/MoneyMind.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
            <FaGithub className="ml-2 inline scale-110" />
          </a>
        </div>
        <Image
          src={"/images/MoneyMind/LOGO.png"}
          alt="MoneyMind LOGO"
          width={300}
          height={300}
          priority
          className="h-[250px] w-[250px] scale-75 md:h-[300px] md:w-[300px] md:scale-100"
        />
      </FadeInDiv>
    </SpringFormAbove>
  );
}
