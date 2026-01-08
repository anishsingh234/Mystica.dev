"use client";
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import { projectsData } from "../../data";
import ProjectList from "@/components/projects";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-50">
        <Image
          src={bg}
          alt="Projects background"
          className="w-full h-full object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background/95" />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <ProjectList projects={projectsData} />
      </main>
    </div>
  );
}