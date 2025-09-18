import { forwardRef } from "react";
import { Sarabun } from "next/font/google";
import { PiDiamondsFourFill } from "react-icons/pi";
import { AiOutlineMail, AiOutlinePhone, AiOutlineGithub } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";

import Image from "next/image";

const sarabun = Sarabun({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ResumePaperEN = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="mx-auto w-fit rounded-xl bg-white p-[20mm]">
      <div ref={ref} className={`a4-preview mb-20 ${sarabun.className}`}>
        <div className="flex h-fit w-full flex-row items-center justify-evenly">
          <div className="">
            <Image
              src="/images/image.png"
              alt="Profile photo"
              width={120}
              height={120}
              priority
              className="h-36 w-28 rounded-xl border border-gray-300 object-cover shadow-sm"
            />
          </div>
          <div className="w-4/5 py-4">
            <h1 className="text-3xl font-bold">ภาวิต ทองคำ</h1>
            <div className="mt-1">
              <p>
                103/59, หมู่ 11, ตำบลบางปลา, อำเภอบางพลี, จังหวัดสมุทรปราการ,
                10540
              </p>
              <div className="flex justify-between font-bold">
                <p>
                  <AiOutlinePhone className="mr-1 inline" />
                  062-408-1116
                </p>
                <a href="mailto:pawit.thongkum@gmail.com" className="underline">
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
        <div className="my-1 border-t-6 border-gray-400">
          <div className="my-2">
            <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
              สรุปโปรไฟล์
            </h2>
            <p className="indent-8 leading-relaxed">
              นักศึกษาวิศวกรรมคอมพิวเตอร์และหัวหน้าทีมเทคนิค
              มีประสบการณ์พัฒนาเว็บและโมบายแบบ End-to-End (React / Next.js,
              React Native, TypeScript, Express.js, MySQL / PostgreSQL)
              เน้นโครงสร้าง UI ที่สะอาด ออกแบบ API ชัดเจน ประสิทธิภาพ
              และการดูแลรักษาต่อยอดง่าย
              มองหาโอกาสในการมีส่วนร่วมในโปรเจกต์ที่มีความหมาย
              และเติบโตในฐานะนักพัฒนา
            </p>
          </div>
          <div className="my-3">
            <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
              การศึกษา
            </h2>
            <p className="flex flex-row justify-between">
              <strong className="flex items-center gap-4">
                <PiDiamondsFourFill />
                มหาวิทยาลัยเกษตรศาสตร์
                วิทยาเขตศรีราชา...............................................................................
              </strong>
              <span className="italic">2065 - ปัจจุบัญ</span>
            </p>
            <div className="flex flex-row justify-between text-sm italic">
              <p className="indent-8">
                ปริญญาวิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์
              </p>
              <p>จังหวัดชลบุรี</p>
            </div>
            <ul className="mt-2 ml-16 list-disc">
              <li>กำลังศึกษาในระดับปริญญาตรี สาขาวิศวกรรมคอมพิวเตอร์</li>
              <li>
                หัวหน้าทีมเทคนิคของชมรม Cybergeek
                ดูแลโปรเจกต์ด้านเทคโนโลยีและให้คำแนะนำแก่รุ่นน้อง
              </li>
              <li>
                <strong>เกรดเฉลี่ยปัจจุบัน :</strong> 3.54 / 4.00
                (เกียรนิยมอันดับ 1)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
              กิจกรรม
            </h2>
            <p className="flex flex-row justify-between">
              <strong className="flex items-center gap-4">
                <PiDiamondsFourFill />
                หัวหน้าทีมเทคนิค.....................................................................................................................
              </strong>
              <span className="italic">2566 - ปัจจุบัน</span>
            </p>
            <div className="flex flex-row justify-between text-sm italic">
              <p className="indent-8">
                หัวหน้าทีมเทคนิค, ชมรม Cybergeek มหาวิทยาลัยเกษตรศาสตร์
              </p>
              <p>จังหวัดชลบุรี</p>
            </div>
            <ul className="mt-2 ml-16 list-disc">
              <li>
                ดูแลทีมพัฒนา Fullstack ทั้งด้าน Frontend และ Backend รวม 3 คน
              </li>
              <li>ออกแบบและพัฒนา UI ด้วย React, Next.js, และ TypeScript</li>
              <li>
                วางสถาปัตยกรรมระบบหลังบ้าน (Backend) และออกแบบฐานข้อมูลด้วย
                MySQL และ PostgreSQL
              </li>
              <li>
                ทำงานร่วมกันในทีมเพื่อวางแผน พัฒนา
                และส่งมอบระบบที่สามารถขยายต่อได้ในระยะยาว
              </li>
            </ul>
          </div>
        </div>
        <div className="my-3">
          <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
            ผลงาน
          </h2>
          <p className="flex flex-row justify-between">
            <strong className="flex items-center gap-4">
              <PiDiamondsFourFill />
              Money Mind -
              แอปบริหารการเงินและวางแผนการเกษียณ..............................................................
            </strong>
            <span className="italic">มีนาคม 2568</span>
          </p>
          <div className="flex flex-row justify-between text-sm italic">
            <p className="indent-8">React Native, Express.js, MySQL</p>
          </div>
          <ul className="mt-2 ml-16 list-disc">
            <li>
              พัฒนา UI สำหรับมือถือ และระบบติดตามรายรับรายจ่ายด้วย React Native
            </li>
            <li>
              เชื่อมต่อระบบหน้าแอปกับหลังบ้านผ่าน API ของ Express.js และ MySQL
              เพื่อซิงก์ข้อมูลแบบ Real-Time
            </li>
          </ul>
          <p className="mt-2 flex flex-row justify-between">
            <strong className="flex items-center gap-4">
              <PiDiamondsFourFill />
              เว็บไซต์ชมรม Cybergeek -
              ระบบสมัครสมาชิกและจัดการกิจกรรมชมรม.........................................
            </strong>
            <span className="italic">มิถุนายน 2567</span>
          </p>
          <div className="flex flex-row justify-between text-sm italic">
            <p className="indent-8">Next.js, Express.js, MySQL, AWS S3</p>
          </div>
          <ul className="mt-2 ml-16 list-disc">
            <li>
              พัฒนาเว็บไซต์ชมรมครบวงจรด้วย Next.js สำหรับแสดงข่าวสาร ประวัติชมรม
              และระบบสมัครสมาชิก
            </li>
            <li>
              ออกแบบ API ฝั่ง Backend, จัดการฐานข้อมูล MySQL และเชื่อมต่อ AWS S3
              สำหรับเก็บรูปภาพและเอกสารของสมาชิก
            </li>
          </ul>
        </div>
        <div className="my-3">
          <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
            ทักษะ
          </h2>
          <ul className="ml-16 list-disc">
            <li>
              <strong>ภาษาโปรแกรม: </strong>C, C++, Java, Python, JavaScript,
              TypeScript, SQL
            </li>
            <li>
              <strong>เครื่องมือพัฒนา: </strong>VS Code, Android Studio, Xcode,
              APIdog
            </li>
            <li>
              <strong>เทคโนโลยีและเฟรมเวิร์ก: </strong>React, React Native,
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
