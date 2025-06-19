import { PiStarFourFill } from "react-icons/pi";

export default function Loading() {
  return (
    <div className="absolute z-50 flex h-screen w-full items-center justify-center bg-[#14181a]">
      <PiStarFourFill className="animate-spin text-6xl text-white" />
      <span className="ml-4 text-lg text-gray-700">Loading...</span>
    </div>
  );
}
