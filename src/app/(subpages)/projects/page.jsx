"use client";
import { projectsData } from "../../data";
import ProjectList from "@/components/projects";

export default function ProjectsPage() {
  return (
    <div className="relative w-full">
      {/* ── Premium background ── */}
      <div className="fixed inset-0 -z-20 bg-[#0a0a0f]">
        {/* Primary radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.18),transparent_55%)]" />
        {/* Secondary accent glow bottom-right */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.07),transparent_45%)]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Bottom fade so content flows into page */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>

      <ProjectList projects={projectsData} />
    </div>
  );
}
