"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ResumePaperEN from "@/components/resume/ResumeEN";

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Pawit_Thongkum_Resume",
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        title="Download Resume"
        onClick={handlePrint}
        className="my-10 w-full max-w-fit cursor-pointer rounded-full border-2 border-white px-10 py-2 md:px-20"
      >
        Download PDF
      </button>
      <ResumePaperEN ref={resumeRef} />
    </div>
  );
}
