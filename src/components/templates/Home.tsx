"use client";

import { useState } from "react";
import Header from "../organisms/Header";
import SideBar from "../organisms/SideBar";
import { ActiveLinkProvider } from "@/context/LinkContext";
import ContentArea from "../organisms/ContentArea";

export default function LandingPage() {
  return (
    <ActiveLinkProvider>
      <Header />
      <div className="flex min-h-screen">
        <SideBar />
        <ContentArea />
      </div>
    </ActiveLinkProvider>
  );
}
