import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { SecurityCompliance } from "@/components/sections/SecurityCompliance";
import { TechArchitecture } from "@/components/sections/TechArchitecture";
import { InteractiveDemo } from "@/components/sections/InteractiveDemo";
import { Team } from "@/components/sections/Team";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <SecurityCompliance />
      <TechArchitecture />
      <InteractiveDemo />
      <Team />
    </>
  );
}
