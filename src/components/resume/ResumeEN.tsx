import { forwardRef } from "react";
import { Inter } from "next/font/google";
import { PiDiamondsFourFill } from "react-icons/pi";
import { AiOutlineMail, AiOutlinePhone, AiOutlineGithub } from "react-icons/ai";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ResumePaperEN = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="mx-auto w-fit rounded-xl bg-white p-[20mm]">
      <div ref={ref} className={`a4-preview ${inter.className}`}>
        <h1 className="text-center text-3xl font-bold">PAWIT THONGKUM</h1>
        <div className="mt-1 text-center">
          <p>
            103/59, Moo 11, Bang Pla Subdistrict, Bang Phli District, Samut
            Prakan, 10540
          </p>
          <div className="flex justify-evenly font-bold">
            <p>
              <AiOutlinePhone className="mr-1 inline" />
              062-408-1116
            </p>
            <a href="mailto:pawit.th@ku.th" className="underline">
              <AiOutlineMail className="mr-1 inline" />
              pawit.th@ku.th
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/PerthTheIamCat"
              className="underline"
            >
              <AiOutlineGithub className="mr-1 inline" />
              PerthTheIamCat
            </a>
          </div>
        </div>
        <div className="my-2 border-t-6 border-gray-400">
          <div className="flex justify-between pt-3 text-sm">
            <p>
              <strong>Date of Birth:................................</strong>
              <span className="italic">August 27, 2003</span>
            </p>
            <p>
              <strong>
                Nationality:..................................................
              </strong>{" "}
              <span className="italic">Thai</span>
            </p>
          </div>
          <div className="my-3">
            <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
              EDUCATION
            </h2>
            <p className="flex flex-row justify-between">
              <strong className="flex items-center gap-4">
                <PiDiamondsFourFill />
                Kasetsart University Sriracha
                Campus.................................................................
              </strong>
              <span className="italic">2022 - Present</span>
            </p>
            <div className="flex flex-row justify-between text-sm italic">
              <p className="indent-8">
                Bachelor of Engineering in Computer Engineering
              </p>
              <p>Chon Buri</p>
            </div>
            <ul className="mt-2 ml-16 list-disc">
              <li>
                Currently pursuing a Bachelor&apos;s degree in Computer
                Engineering.
              </li>
              <li>
                Lead Tech of the university&apos;s Cybergeek Club, managing
                technical projects and mentoring junior members.
              </li>
            </ul>
            <p className="mt-2 flex flex-row justify-between">
              <strong className="flex items-center gap-4">
                <PiDiamondsFourFill />
                Poolcharoen
                Witthayakhom....................................................................................
              </strong>
              <span className="italic">2016 - 2022</span>
            </p>
            <div className="flex flex-row justify-between text-sm italic">
              <p className="indent-8">
                High School Diploma (Science-Math Program, MEP)
              </p>
              <p>Samut Prakan</p>
            </div>
            <ul className="mt-2 ml-16 list-disc">
              <li>Graduated from the Mini English Program (MEP).</li>
              <li>
                Studied core subjects in English: Mathematics, Science, and
                Computer.
              </li>
              <li>
                <strong>GPA:</strong> 3.86 / 4.00
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
              EXPERIENCE
            </h2>
            <p className="flex flex-row justify-between">
              <strong className="flex items-center gap-4">
                <PiDiamondsFourFill />
                Technical Team
                Lead.........................................................................................
              </strong>
              <span className="italic">2023 - Present</span>
            </p>
            <div className="flex flex-row justify-between text-sm italic">
              <p className="indent-8">
                Technical Team Lead, Cybergeek Club At Kasetsart University
              </p>
              <p>Chon Buri</p>
            </div>
            <ul className="mt-2 ml-16 list-disc">
              <li>
                Led a team of 3 full-stack developers, overseeing both front-end
                and back-end development processes.
              </li>
              <li>
                Designed and implemented user interfaces using React, Next.js,
                and TypeScript.
              </li>
              <li>
                Managed back-end architecture and database design using MySQL
                and PostgreSQL.
              </li>
              <li>
                Collaborated with the team to plan, build, and deploy scalable
                and maintainable systems.
              </li>
            </ul>
          </div>
        </div>
        <div className="my-3">
          <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
            PROJECT
          </h2>
          <p className="flex flex-row justify-between">
            <strong className="flex items-center gap-4">
              <PiDiamondsFourFill />
              Money Mind - Personal Finance & Retirement Planning
              App.......................................
            </strong>
            <span className="italic">March 2025</span>
          </p>
          <div className="flex flex-row justify-between text-sm italic">
            <p className="indent-8">React Native, Express.js, MySQL</p>
          </div>
          <ul className="mt-2 ml-16 list-disc">
            <li>
              Developed mobile UI and financial features using React Native,
              including expense tracking and summary views.
            </li>
            <li>
              Connected frontend with backend via Express.js + MySQL APIs to
              support real-time data sync.
            </li>
          </ul>
          <p className="mt-2 flex flex-row justify-between">
            <strong className="flex items-center gap-4">
              <PiDiamondsFourFill />
              Cybergeek Club Website - Membership & Activity
              Portal.............................................
            </strong>
            <span className="italic">June 2024</span>
          </p>
          <div className="flex flex-row justify-between text-sm italic">
            <p className="indent-8">Next.js, Express.js, MySQL, AWS S3</p>
          </div>
          <ul className="mt-2 ml-16 list-disc">
            <li>
              Developed a full-featured club website with Next.js for public
              pages, news updates, and online member registration.
            </li>
            <li>
              Designed and implemented RESTful backend APIs, managed MySQL
              schema, and integrated AWS S3 for document/image storage.
            </li>
          </ul>
        </div>
        <div className="my-3">
          <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
            SKILLS
          </h2>
          <ul className="ml-16 list-disc">
            <li>
              <strong>Languages: </strong>C, C++, Java, Python, JavaScript,
              TypeScript, SQL
            </li>
            <li>
              <strong>Developer Tools: </strong>VS Code, Android Studio, Xcode,
              APIdog
            </li>
            <li>
              <strong>Technologies/Framework: </strong>React, React Native,
              Next.js, Express.js, Node.js, MySQL, PostgreSQL, TailwindCSS,
              Svelte Kit
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

ResumePaperEN.displayName = "ResumePaper";

export default ResumePaperEN;
