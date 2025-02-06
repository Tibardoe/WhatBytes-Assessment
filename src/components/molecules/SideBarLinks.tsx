"use client";

import { useActiveLink } from "@/context/LinkContext";
import Image from "next/image";
import Link from "next/link";

export default function SideBarLinks() {
  const { activeLink, setActiveLink } = useActiveLink();

  function handleActiveLink(title: string) {
    setActiveLink(title);
  }
  const sideBarLinks = [
    { ImageSrc: "/assets/sidebarImages/statistics.svg", title: "Dashboard" },
    { ImageSrc: "/assets/sidebarImages/medal.svg", title: "Skill Test" },
    { ImageSrc: "/assets/sidebarImages/file.svg", title: "Internship" },
  ];

  return (
    <div className="flex flex-col gap-3 font-bold text-lg mt-14">
      {sideBarLinks.map((link) => (
        <Link
          onClick={() => handleActiveLink(link.title)}
          key={link.title}
          href="#"
          className={`flex items-center gap-2 rounded-r-full p-4 ${
            activeLink === link.title && "text-blue-500 bg-gray-200"
          }`}
        >
          <Image
            src={link.ImageSrc}
            alt={`${link.title} logo`}
            width={30}
            height={30}
            className={activeLink === link.title ? "active-icon" : ""}
          />
          <p>{link.title}</p>
        </Link>
      ))}
    </div>
  );
}
