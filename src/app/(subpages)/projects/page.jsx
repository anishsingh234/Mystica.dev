"use client";
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import { projectsData } from "../../data";
import ProjectList from "@/components/projects";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background */}
      <div className="fixed inset-0 -z-50">
        <Image
          src={bg}
          alt="Projects background"
          className="w-full h-full object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent" />
        {/* Additional overlay for mobile */}
        <div className="absolute inset-0 bg-background/20 md:bg-transparent" />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <ProjectList projects={projectsData} />
      </main>

      {/* 3D Model - Hidden on mobile for performance */}
      <div className="hidden lg:block fixed top-16 lg:top-20 left-1/2 lg:-left-24 -translate-x-1/2 lg:translate-x-0 -z-10 h-screen pointer-events-none">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </div>
  );
}