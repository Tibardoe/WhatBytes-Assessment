"use client";

import Header from "../organisms/Header";
import SideBar from "../organisms/SideBar";
import { useActiveLink } from "@/context/LinkContext";
import ContentArea from "../organisms/ContentArea";
import UpdatePopUp from "../organisms/UpdatePopUp";

export default function PageWrapper() {
  const { showPopup } = useActiveLink();

  return (
    <main className="relative">
      <Header />
      <div className="flex">
        <SideBar />
        <ContentArea />
      </div>

      {showPopup && <UpdatePopUp />}
    </main>
  );
}
