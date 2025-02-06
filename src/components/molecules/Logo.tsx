import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/assets/images/whatbytesLogo.jpg"
        alt="WhatBytes company logo"
        height={60}
        width={60}
      />
      <p className="text-3xl font-bold">WhatBytes</p>
    </div>
  );
}
