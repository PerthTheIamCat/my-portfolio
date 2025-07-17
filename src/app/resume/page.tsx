"use client";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import dynamic from "next/dynamic";
const ResumePaperEN = dynamic(() => import("@/components/resume/ResumeEN"));
const ResumePaperTH = dynamic(() => import("@/components/resume/ResumeTH"));

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "th">("en");

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Pawit_Thongkum_Resume",
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-5">
        <div className="relative flex w-20 justify-evenly rounded-full border-2 py-2">
          <div
            className={`absolute top-0 -z-10 h-full w-1/2 rounded-full bg-white transition-all duration-300 ease-out ${
              selectedLanguage === "th" ? "left-0" : "left-1/2"
            }`}
          ></div>
          <button
            className={`${
              selectedLanguage === "th" ? "text-black" : "text-gray-200"
            }`}
            onClick={() => {
              setSelectedLanguage("th");
            }}
          >
            TH
          </button>
          <button
            className={`${
              selectedLanguage === "en" ? "text-black" : "text-gray-200"
            }`}
            onClick={() => {
              setSelectedLanguage("en");
            }}
          >
            EN
          </button>
        </div>
        <button
          title="Download Resume"
          onClick={handlePrint}
          className="my-10 w-full max-w-fit cursor-pointer rounded-full border-2 border-white px-10 py-2 md:px-20"
        >
          Download PDF
        </button>
      </div>
      {selectedLanguage === "en" ? (
        <ResumePaperEN ref={resumeRef} />
      ) : (
        <ResumePaperTH ref={resumeRef} />
      )}
    </div>
  );
}
