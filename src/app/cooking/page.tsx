import type { Metadata } from "next";
import { CookingGuide } from "@/components/CookingGuide";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "おいしい炊き方"
};

export default function CookingPage() {
  return (
    <>
      <CookingGuide />
      <CTASection />
    </>
  );
}
