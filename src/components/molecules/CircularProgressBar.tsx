import { useEffect, useState } from "react";
import Image from "next/image";

type CircularProgressBarProps = {
  score: number | undefined;
  total: number;
};

export default function CircularProgressBar({
  score,
  total,
}: CircularProgressBarProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (score !== undefined) {
      const percentage = (score / total) * 100;
      setRotation((percentage / 100) * 360);
    }
  }, [score, total]);

  return (
    //  Circular Progress Bar
    <div className="relative w-40 h-40 flex justify-center items-center">
      {/* Background Circle */}
      <div className="absolute w-full h-full rounded-full border-[25px] border-blue-200" />
      {/* Progress Circle */}
      <div
        className="absolute w-full h-full rounded-full border-[25px] border-blue-500"
        style={{
          maskImage: `conic-gradient(blue ${rotation}deg, transparent ${rotation}deg)`,
          WebkitMaskImage: `conic-gradient(blue ${rotation}deg, transparent ${rotation}deg)`,
          transition:
            "mask-image 0.5s ease-in-out, -webkit-mask-image 0.5s ease-in-out",
        }}
      />

      {/* Image Display */}
      <div className="absolute flex flex-col items-center">
        <Image
          src="/assets/images/target.png"
          alt="Emoji"
          width={45}
          height={45}
        />
      </div>
    </div>
  );
}
