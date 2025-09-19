import { forwardRef } from "react";
import { Inter } from "next/font/google";
import { PiDiamondsFourFill } from "react-icons/pi";
import { AiOutlineMail, AiOutlinePhone, AiOutlineGithub } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const CV_EN = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="mx-auto w-fit">
      <div ref={ref}>
        {/* Page 1 */}
        <div className="mb-6 rounded-xl bg-white p-[20mm] print:mb-0 print:rounded-none print:bg-transparent print:p-0">
          <div className={`a4-preview ${inter.className} relative`}>
            {/* Header */}
            <div className="flex h-fit w-full flex-row items-center">
              <div className="w-full py-8">
                <h1 className="text-center text-3xl font-bold">
                  PAWIT THONGKUM
                </h1>
                <div className="mt-1 text-center">
                  <p>
                    Bang Pla Subdistrict, Bang Phli District, Samut Prakan,
                    10540
                  </p>
                  <div className="flex justify-between font-bold">
                    <p>
                      <AiOutlinePhone className="mr-1 inline" />
                      062-408-1116
                    </p>
                    <a
                      href="mailto:pawit.thongkum@gmail.com"
                      className="underline"
                    >
                      <AiOutlineMail className="mr-1 inline" />
                      pawit.thongkum@gmail.com
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
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https:www.pawit.dev"
                      className="underline"
                    >
                      <CiGlobe className="mr-1 inline" />
                      pawit.dev
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-2 border-t-6 border-gray-400">
              <div className="flex justify-between pt-3 text-sm">
                <p>
                  <strong>
                    Date of Birth:................................
                  </strong>
                  <span className="italic">August 27, 2003</span>
                </p>
                <p>
                  <strong>
                    Nationality:..................................................
                  </strong>{" "}
                  <span className="italic">Thai</span>
                </p>
              </div>

              {/* Summary */}
              <div className="my-3">
                <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                  SUMMARY
                </h2>
                <p className="indent-8 leading-relaxed">
                  Computer Engineering student and technical team lead with
                  hands-on experience across full-stack development. Comfortable
                  with React, Next.js, and TypeScript on the frontend, and
                  Express.js with SQL databases on the backend. Strong focus on
                  clean UI, API design, and maintainable systems. Passionate
                  about shipping useful products and collaborating effectively
                  in small teams.
                </p>
              </div>

              {/* Education */}
              <div className="my-3">
                <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                  EDUCATION
                </h2>
                <p className="flex flex-row justify-between">
                  <strong className="flex items-center gap-4">
                    <PiDiamondsFourFill />
                    Kasetsart University Sriracha Campus
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
                    Lead Tech of the Cybergeek Club; managing technical projects
                    and mentoring juniors.
                  </li>
                  <li>
                    <strong>Current GPA:</strong> 3.54 / 4.00
                  </li>
                </ul>
                <p className="mt-2 flex flex-row justify-between">
                  <strong className="flex items-center gap-4">
                    <PiDiamondsFourFill />
                    Poolcharoen Witthayakhom
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
                    Studied Mathematics, Science, and Computer in English.
                  </li>
                  <li>
                    <strong>GPA:</strong> 3.86 / 4.00
                  </li>
                </ul>
              </div>

              {/* Experience */}
              <div>
                <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                  ACTIVITIES
                </h2>
                <p className="flex flex-row justify-between">
                  <strong className="flex items-center gap-4">
                    <PiDiamondsFourFill />
                    Technical Team Lead
                  </strong>
                  <span className="italic">2023 - Present</span>
                </p>
                <div className="flex flex-row justify-between text-sm italic">
                  <p className="indent-8">
                    Technical Team Lead, Cybergeek Club at Kasetsart University
                  </p>
                  <p>Chon Buri</p>
                </div>
                <ul className="mt-2 ml-16 list-disc">
                  <li>
                    Led a team of 3 full-stack developers across front-end and
                    back-end.
                  </li>
                  <li>
                    Built UIs with React/Next.js/TypeScript; designed APIs with
                    Express.js.
                  </li>
                  <li>
                    Managed database schema and operations with MySQL and
                    PostgreSQL.
                  </li>
                  <li>
                    Planned, delivered, and maintained scalable and reliable
                    systems.
                  </li>
                </ul>
              </div>

              {/* Skills */}
              <div className="my-3">
                <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                  SKILLS
                </h2>
                <ul className="ml-16 list-disc">
                  <li>
                    <strong>Languages: </strong>C, C++, Java, Python,
                    JavaScript, TypeScript, SQL
                  </li>
                  <li>
                    <strong>Developer Tools: </strong>VS Code, Android Studio,
                    Xcode, APIdog
                  </li>
                  <li>
                    <strong>Technologies/Framework: </strong>React, React
                    Native, Next.js, Express.js, Node.js, MySQL, PostgreSQL,
                    TailwindCSS, Svelte Kit
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="page-break-before rounded-xl bg-white p-[20mm] print:rounded-none print:bg-transparent print:p-0">
          <div className={`a4-preview ${inter.className}`}>
            <div className="my-3">
              <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                PROJECTS
              </h2>
              <p className="flex flex-row justify-between">
                <strong className="flex items-center gap-4">
                  <PiDiamondsFourFill />
                  Money Mind - Personal Finance & Retirement Planning App
                </strong>
                <span className="italic">March 2025</span>
              </p>
              <div className="flex flex-row justify-between text-sm italic">
                <p className="indent-8">React Native, Express.js, MySQL</p>
              </div>
              <ul className="mt-2 ml-16 list-disc">
                <li>
                  Built mobile UI and finance features (expense tracking,
                  summaries) with React Native.
                </li>
                <li>
                  Integrated Express.js + MySQL APIs to sync and persist data.
                </li>
              </ul>
              <p className="mt-2 flex flex-row justify-between">
                <strong className="flex items-center gap-4">
                  <PiDiamondsFourFill />
                  Solar Sync — ESP32-based Solar Panel Sun-Tracking System
                </strong>
                <span className="italic">September 2024</span>
              </p>
              <div className="flex flex-row justify-between text-sm italic">
                <p className="indent-8">
                  ESP32 (C/C++), light sensors, motors, PCB & schematic design
                </p>
              </div>
              <ul className="mt-2 ml-16 list-disc">
                <li>
                  Designed and built a mechanism that automatically rotates a
                  solar panel to maximize sunlight exposure throughout the day.
                </li>
                <li>
                  Programmed an ESP32 microcontroller to read sensor input and
                  control motors for real-time sun tracking.
                </li>
                <li>
                  Planned system logic, designed circuit schematic and PCB, and
                  assembled and tested the hardware end-to-end.
                </li>
              </ul>
              <p className="mt-2 flex flex-row justify-between">
                <strong className="flex items-center gap-4">
                  <PiDiamondsFourFill />
                  Cybergeek Club Website - Membership & Activity Portal
                </strong>
                <span className="italic">June 2024</span>
              </p>
              <div className="flex flex-row justify-between text-sm italic">
                <p className="indent-8">Next.js, Express.js, MySQL, AWS S3</p>
              </div>
              <ul className="mt-2 ml-16 list-disc">
                <li>
                  Implemented public pages, news feed, and member registration
                  in Next.js.
                </li>
                <li>
                  Designed RESTful APIs, MySQL schema, and S3 integration for
                  assets.
                </li>
              </ul>
            </div>

            <div className="my-3">
              <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                CERTIFICATIONS
              </h2>
              <ul className="ml-16 list-disc">
                <li>
                  KU-EXITE English Proficiency — CEFR B1 (69/100), valid until
                  Jul 2027
                </li>
                <li>
                  Good Academic Performance Certificate — Kasetsart University,
                  Faculty of Engineering Sriracha — 2025
                </li>
                <li>
                  Good Academic Performance Certificate — Kasetsart University,
                  Faculty of Engineering Sriracha — 2024
                </li>
              </ul>
            </div>

            {/* Coursework */}
            <div className="my-3">
              <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                RELEVANT COURSEWORK
              </h2>
              <ul className="ml-16 grid list-disc grid-cols-2">
                <li>Data Structures and Algorithms</li>
                <li>Database Systems</li>
                <li>Computer Networks</li>
                <li>Operating Systems</li>
                <li>Software Engineering</li>
                <li>Web Programming</li>
                <li>Mobile Application Development</li>
                <li>Embedded Systems</li>
                <li>Digital Logic Design</li>
              </ul>
            </div>

            {/* Language */}
            <div className="my-3">
              <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                LANGUAGES
              </h2>
              <ul className="ml-16 list-disc">
                <li>Thai: Native proficiency</li>
                <li>English: Professional working proficiency (CEFR B1)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

CV_EN.displayName = "CV_EN";

export default CV_EN;
