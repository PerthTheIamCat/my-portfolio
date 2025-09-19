import { forwardRef } from "react";
import { Sarabun } from "next/font/google";
import { PiDiamondsFourFill } from "react-icons/pi";
import { AiOutlineMail, AiOutlinePhone, AiOutlineGithub } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";

const sarabun = Sarabun({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const CV_TH = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="mx-auto w-fit">
      <div ref={ref}>
        {/* หน้า 1 */}
        <div className="mb-6 rounded-xl bg-white p-[20mm] print:mb-0 print:rounded-none print:bg-transparent print:p-0">
          <div className={`a4-preview ${sarabun.className}`}>
            {/* หัวกระดาษ */}
            <div className="flex h-fit w-full flex-row items-center">
              <div className="w-full py-8">
                <h1 className="text-center text-4xl font-bold">ภาวิต ทองคำ</h1>
                <div className="mt-1 text-center">
                  <p>ตำบล บางปลา, อำเภอ บางพลี, จังหวัด สมุทรปราการ, 10540</p>
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
                  <strong>วันเกิด:................................</strong>
                  <span className="italic">27 สิงหาคม 2546</span>
                </p>
                <p>
                  <strong>
                    สัญชาติ:..................................................
                  </strong>{" "}
                  <span className="italic">ไทย</span>
                </p>
              </div>

              {/* สรุปย่อ */}
              <div className="my-3">
                <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                  สรุปโปรไฟล์
                </h2>
                <p className="indent-8 leading-relaxed">
                  นักศึกษาวิศวกรรมคอมพิวเตอร์และหัวหน้าทีมเทคนิค
                  มีประสบการณ์พัฒนา Full‑Stack ทั้งฝั่ง Frontend (React,
                  Next.js, TypeScript) และ Backend (Express.js, SQL)
                  โฟกัสการออกแบบ UI ที่อ่านง่าย การออกแบบ API
                  และระบบที่ดูแลรักษาง่าย ชอบการทำงานเป็นทีมเล็ก ๆ
                  และส่งมอบงานที่ใช้งานได้จริง
                </p>
              </div>

              {/* การศึกษา */}
              <div className="my-3">
                <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                  การศึกษา
                </h2>
                <p className="flex flex-row justify-between">
                  <strong className="flex items-center gap-4">
                    <PiDiamondsFourFill />
                    มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา
                  </strong>
                  <span className="italic">2565 - ปัจจุบัน</span>
                </p>
                <div className="flex flex-row justify-between text-sm italic">
                  <p className="indent-8">
                    ปริญญาวิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์
                  </p>
                  <p>ชลบุรี</p>
                </div>
                <ul className="mt-2 ml-16 list-disc">
                  <li>กำลังศึกษาในระดับปริญญาตรี สาขาวิศวกรรมคอมพิวเตอร์</li>
                  <li>
                    หัวหน้าทีมเทคนิคชมรม Cybergeek
                    ดูแลโปรเจกต์และพี่เลี้ยงรุ่นน้อง
                  </li>
                  <li>
                    <strong>เกรดเฉลี่ยปัจจุบัน:</strong> 3.54 / 4.00
                  </li>
                </ul>
                <p className="mt-2 flex flex-row justify-between">
                  <strong className="flex items-center gap-4">
                    <PiDiamondsFourFill />
                    โรงเรียนพูลเจริญวิทยาคม
                  </strong>
                  <span className="italic">2559 - 2565</span>
                </p>
                <div className="flex flex-row justify-between text-sm italic">
                  <p className="indent-8">
                    หลักสูตรวิทย์-คณิต (Mini English Program - MEP)
                  </p>
                  <p>สมุทรปราการ</p>
                </div>
                <ul className="mt-2 ml-16 list-disc">
                  <li>สำเร็จการศึกษาจากโปรแกรม MEP</li>
                  <li>
                    เรียน คณิตศาสตร์ วิทยาศาสตร์ และคอมพิวเตอร์ เป็นภาษาอังกฤษ
                  </li>
                  <li>
                    <strong>GPA:</strong> 3.86 / 4.00
                  </li>
                </ul>
              </div>

              {/* ประสบการณ์ */}
              <div>
                <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                  กิจกรรม
                </h2>
                <p className="flex flex-row justify-between">
                  <strong className="flex items-center gap-4">
                    <PiDiamondsFourFill />
                    หัวหน้าทีมเทคนิค (Technical Team Lead)
                  </strong>
                  <span className="italic">2566 - ปัจจุบัน</span>
                </p>
                <div className="flex flex-row justify-between text-sm italic">
                  <p className="indent-8">
                    ชมรม Cybergeek มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา
                  </p>
                  <p>ชลบุรี</p>
                </div>
                <ul className="mt-2 ml-16 list-disc">
                  <li>
                    ดูแลทีมพัฒนา Full‑Stack 3 คน ทั้งฝั่ง Frontend และ Backend
                  </li>
                  <li>
                    พัฒนา UI ด้วย React/Next.js/TypeScript และออกแบบ API ด้วย
                    Express.js
                  </li>
                  <li>จัดการฐานข้อมูลและสคีมาด้วย MySQL และ PostgreSQL</li>
                  <li>วางแผนและส่งมอบระบบที่ขยายต่อได้และดูแลรักษาง่าย</li>
                </ul>
              </div>

              {/* ทักษะ */}
              <div className="my-3">
                <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                  ทักษะ
                </h2>
                <ul className="ml-16 list-disc">
                  <li>
                    <strong>ภาษาโปรแกรม: </strong>C, C++, Java, Python,
                    JavaScript, TypeScript, SQL
                  </li>
                  <li>
                    <strong>เครื่องมือพัฒนา: </strong>VS Code, Android Studio,
                    Xcode, APIdog
                  </li>
                  <li>
                    <strong>เทคโนโลยี/เฟรมเวิร์ก: </strong>React, React Native,
                    Next.js, Express.js, Node.js, MySQL, PostgreSQL,
                    TailwindCSS, SvelteKit
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* หน้า 2 */}
        <div className="page-break-before rounded-xl bg-white p-[20mm] print:rounded-none print:bg-transparent print:p-0">
          <div className={`a4-preview ${sarabun.className}`}>
            <div className="my-3">
              <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                ผลงาน (Projects)
              </h2>

              <p className="flex flex-row justify-between">
                <strong className="flex items-center gap-4">
                  <PiDiamondsFourFill />
                  Money Mind — แอปวางแผนการเงินและการเกษียณ
                </strong>
                <span className="italic">มีนาคม 2568</span>
              </p>
              <div className="flex flex-row justify-between text-sm italic">
                <p className="indent-8">React Native, Express.js, MySQL</p>
              </div>
              <ul className="mt-2 ml-16 list-disc">
                <li>
                  พัฒนา UI มือถือและฟีเจอร์ด้านการเงิน (บันทึกรายรับ‑รายจ่าย,
                  สรุปผล)
                </li>
                <li>
                  เชื่อมต่อ API ระหว่างแอปกับหลังบ้าน (Express.js + MySQL)
                  เพื่อซิงก์ข้อมูล
                </li>
              </ul>

              <p className="mt-2 flex flex-row justify-between">
                <strong className="flex items-center gap-4">
                  <PiDiamondsFourFill />
                  Solar Sync — ระบบติดตามดวงอาทิตย์สำหรับแผงโซลาร์เซลล์ (ESP32)
                </strong>
                <span className="italic">กันยายน 2567</span>
              </p>
              <div className="flex flex-row justify-between text-sm italic">
                <p className="indent-8">
                  ESP32 (C/C++), เซนเซอร์แสง, มอเตอร์, ออกแบบ Schematic & PCB
                </p>
              </div>
              <ul className="mt-2 ml-16 list-disc">
                <li>
                  ออกแบบและประกอบกลไกให้แผงโซลาร์หมุนรับแสงอาทิตย์อัตโนมัติ
                </li>
                <li>
                  เขียนโปรแกรมบน ESP32
                  อ่านค่าจากเซนเซอร์และควบคุมมอเตอร์แบบเรียลไทม์
                </li>
                <li>
                  วางแผนตรรกะระบบ ออกแบบวงจรและแผ่น PCB และทดสอบฮาร์ดแวร์ครบวงจร
                </li>
              </ul>

              <p className="mt-2 flex flex-row justify-between">
                <strong className="flex items-center gap-4">
                  <PiDiamondsFourFill />
                  เว็บไซต์ชมรม Cybergeek — ระบบสมาชิกและกิจกรรมชมรม
                </strong>
                <span className="italic">มิถุนายน 2567</span>
              </p>
              <div className="flex flex-row justify-between text-sm italic">
                <p className="indent-8">Next.js, Express.js, MySQL, AWS S3</p>
              </div>
              <ul className="mt-2 ml-16 list-disc">
                <li>
                  พัฒนาหน้าเว็บประชาสัมพันธ์ ฟีดข่าว และระบบสมัครสมาชิกด้วย
                  Next.js
                </li>
                <li>
                  ออกแบบ REST API โครงสร้างฐานข้อมูล MySQL และเชื่อมต่อ S3
                  สำหรับไฟล์
                </li>
              </ul>
            </div>

            <div className="my-3">
              <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                เกียรติบัตร/ใบรับรอง
              </h2>
              <ul className="ml-16 list-disc">
                <li>
                  การทดสอบภาษาอังกฤษ KU‑EXITE — CEFR B1 (69/100), ใช้ได้ถึง ก.ค.
                  2570
                </li>
                <li>
                  เกียรติบัตรผลการเรียนดี — มหาวิทยาลัยเกษตรศาสตร์
                  คณะวิศวกรรมศาสตร์ ศรีราชา — 2568
                </li>
                <li>
                  เกียรติบัตรผลการเรียนดี — มหาวิทยาลัยเกษตรศาสตร์
                  คณะวิศวกรรมศาสตร์ ศรีราชา — 2567
                </li>
              </ul>
            </div>

            {/* รายวิชาที่เกี่ยวข้อง */}
            <div className="my-3">
              <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                รายวิชาที่เกี่ยวข้อง
              </h2>
              <ul className="ml-16 grid list-disc grid-cols-2">
                <li>โครงสร้างข้อมูลและอัลกอริทึม</li>
                <li>ระบบฐานข้อมูล</li>
                <li>เครือข่ายคอมพิวเตอร์</li>
                <li>ระบบปฏิบัติการ</li>
                <li>วิศวกรรมซอฟต์แวร์</li>
                <li>การพัฒนาเว็บ</li>
                <li>การพัฒนาแอปบนมือถือ</li>
                <li>ระบบสมองกลฝังตัว</li>
                <li>ตรรกะดิจิทัล</li>
              </ul>
            </div>
            {/* ภาษา */}
            <div className="my-3">
              <h2 className="mb-2 bg-gray-100 py-2 text-center text-xl font-bold underline underline-offset-4">
                ภาษา
              </h2>
              <ul className="ml-16 list-disc">
                <li>ไทย: ภาษาแม่ (Native)</li>
                <li>อังกฤษ: ฟัง พูด อ่าน เขียน ได้ในระดับดี (KU-EXITE B1)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

CV_TH.displayName = "CV_TH";

export default CV_TH;
