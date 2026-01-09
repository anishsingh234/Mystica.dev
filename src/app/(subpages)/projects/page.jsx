"use client";
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import { projectsData } from "../../data";
import ProjectList from "@/components/projects";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with improved styling */}
      <div className="fixed inset-0 -z-50">
        <Image
          src={bg}
          alt="Projects background"
          className="w-full h-full object-cover object-center opacity-5"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-background/50 to-background" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* 3D Wizard Model - Floating on right side */}
      <div className="fixed top-1/4 right-10 w-[500px] h-[500px] pointer-events-none z-0 opacity-25 hidden xl:block">
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <ProjectList projects={projectsData} />
      </main>
    </div>
  );
}