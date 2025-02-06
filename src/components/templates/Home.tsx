"use client";

import { ActiveLinkProvider } from "@/context/LinkContext";
import PageWrapper from "../organisms/PageWrapper";

export default function LandingPage() {
  return (
    <ActiveLinkProvider>
      <PageWrapper />
    </ActiveLinkProvider>
  );
}
