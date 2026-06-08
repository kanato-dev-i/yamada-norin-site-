import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FarmerProfile } from "@/components/FarmerProfile";

export const metadata: Metadata = {
  title: "農家紹介"
};

export default function FarmerPage() {
  return (
    <>
      <FarmerProfile />
      <CTASection />
    </>
  );
}
