import { forwardRef } from "react";

const ResumePaperTH = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="mx-auto w-fit bg-white p-[20mm]">
      <div ref={ref} className="a4-preview">
        <h1 className="text-center text-3xl font-bold">ภวิษย์ ทองคำ</h1>
        <p className="text-center text-lg">นักพัฒนา Full Stack</p>

        <div className="mt-1 text-center">
          <p>103/59 หมู่ 11 ตำบลบางปลา อำเภอบางพลี จังหวัดสมุทรปราการ 10540</p>
          <p>
            062-408-1116 |{" "}
            <a href="mailto:pawit.th@ku.th" className="underline">
              pawit.th@ku.th
            </a>
          </p>
        </div>

        <div className="my-6 border-t border-gray-400 pt-4">
          <h2 className="mb-2 text-xl font-bold">โปรไฟล์</h2>
          <p>
            ข้าพเจ้าเป็นนักศึกษาวิศวกรรมคอมพิวเตอร์ที่มหาวิทยาลัยเกษตรศาสตร์
            ศรีราชา มีทักษะความเป็นผู้นำและการพัฒนา full-stack อย่างแข็งแกร่ง
            เคยเป็นหัวหน้าทีมในการพัฒนาเว็บแอปพลิเคชันโดยใช้ Next.js, PostgreSQL
            และ Node.js สนใจการเขียนโค้ดที่สะอาด การออกแบบระบบที่ขยายได้
            และการเรียนรู้เทคโนโลยีใหม่ ๆ อย่างต่อเนื่อง
            ปัจจุบันกำลังมองหาโอกาสฝึกงานเพื่อพัฒนาตนเองและสร้างผลงานจริงในโลกการทำงาน
          </p>
        </div>

        <div className="my-6 border-t border-gray-400 pt-4">
          <h2 className="mb-2 text-xl font-bold">ประสบการณ์ทำงาน</h2>
          <h3 className="font-semibold">
            หัวหน้าทีมเทคนิค, ชมรม Cybergeek มหาวิทยาลัยเกษตรศาสตร์ ศรีราชา
          </h3>
          <p className="text-sm italic">2566 - ปัจจุบัน | ชลบุรี</p>
          <ul className="mt-2 list-inside list-disc">
            <li>ดูแลทีม full-stack จำนวน 3 คน ทั้งด้าน frontend และ backend</li>
            <li>ออกแบบและพัฒนา UI โดยใช้ React, Next.js และ TypeScript</li>
            <li>
              จัดการโครงสร้าง backend และออกแบบฐานข้อมูลด้วย MySQL และ
              PostgreSQL
            </li>
            <li>
              วางแผน พัฒนา และ deploy
              ระบบร่วมกับทีมให้สามารถดูแลต่อได้ง่ายและขยายต่อได้
            </li>
          </ul>
        </div>

        <div className="my-6 border-t border-gray-400 pt-4">
          <h2 className="mb-2 text-xl font-bold">การศึกษา</h2>
          <h3 className="font-semibold">โรงเรียนพูลเจริญวิทยาคม</h3>
          <p className="text-sm italic">2559 - 2565 | สมุทรปราการ</p>
          <p>วุฒิมัธยมศึกษาตอนปลาย (แผนการเรียนวิทย์-คณิต โปรแกรม MEP)</p>
          <ul className="mt-2 list-inside list-disc">
            <li>จบการศึกษาจากโครงการ Mini English Program (MEP)</li>
            <li>
              เรียนวิชาแกนหลักเป็นภาษาอังกฤษ เช่น คณิตศาสตร์ วิทยาศาสตร์
              และคอมพิวเตอร์
            </li>
            <li>
              <strong>เกรดเฉลี่ย:</strong> 3.86 / 4.00
            </li>
          </ul>

          <h3 className="mt-4 font-semibold">มหาวิทยาลัยเกษตรศาสตร์ ศรีราชา</h3>
          <p className="text-sm italic">2565 - ปัจจุบัน | ชลบุรี</p>
          <p>วิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์</p>
          <ul className="mt-2 list-inside list-disc">
            <li>กำลังศึกษาในระดับปริญญาตรี สาขาวิศวกรรมคอมพิวเตอร์</li>
            <li>
              หัวหน้าฝ่ายเทคนิคของชมรม Cybergeek
              ดูแลโปรเจกต์และให้คำปรึกษารุ่นน้อง
            </li>
          </ul>
        </div>

        <div className="my-6 border-t border-gray-400 pt-4">
          <h2 className="mb-2 text-xl font-bold">ทักษะ</h2>
          <ul className="grid list-inside list-disc grid-cols-2">
            <li>
              <strong>Node.js:</strong> ระดับดี
            </li>
            <li>
              <strong>MySQL & PostgreSQL:</strong> ระดับดี
            </li>
            <li>
              <strong>HTML & CSS:</strong> ระดับเชี่ยวชาญ
            </li>
            <li>
              <strong>React:</strong> ระดับเชี่ยวชาญ
            </li>
            <li>
              <strong>JavaScript & TypeScript:</strong> ระดับดี
            </li>
            <li>
              <strong>Next.js:</strong> ระดับเชี่ยวชาญ
            </li>
          </ul>
        </div>

        <div className="my-6 border-t border-gray-400 pt-4 text-sm">
          <p>
            <strong>วันเกิด:</strong> 27 สิงหาคม 2546
          </p>
          <p>
            <strong>สัญชาติ:</strong> ไทย
          </p>
        </div>
      </div>
    </div>
  );
});

ResumePaperTH.displayName = "ResumePaper";

export default ResumePaperTH;
