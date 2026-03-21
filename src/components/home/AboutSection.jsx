"use client";
import { Mail, Linkedin } from "lucide-react";
import { SectionLabel, FadeUp } from "./SharedComponents";

export default function AboutSection() {
  const stats = [
    { value: "12+", label: "Projects Shipped", sub: "Web & AI" },
    { value: "350+", label: "DSA Problems Solved", sub: "C++ & Java" },
    { value: "4+", label: "AI Systems Built", sub: "RAG, Agents" },
    { value: "2026", label: "Graduating 2026", sub: "AI & ML" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-white/[0.06] scroll-mt-20 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <FadeUp>
            <SectionLabel>About</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">AI Engineer</span> building real-world systems
            </h2>
            <div className="space-y-5 text-foreground/70 leading-[1.7] text-[16px] sm:text-[17px] max-w-lg">
              <p>
                I&apos;m a full-stack developer focused on building production-grade AI systems using <span className="font-semibold text-white">LLMs</span>, <span className="font-semibold text-white">RAG</span>, and scalable backend architectures.
              </p>
              <p>
                I&apos;ve built and shipped multiple applications used by real users, combining modern frontend development with intelligent <span className="font-semibold text-white">AI systems</span>.
              </p>
              <p>
                Currently exploring multi-agent systems and advanced AI tooling.
              </p>
            </div>
            
            <div className="mt-10">
              <p className="text-sm font-medium text-foreground/50 mb-3 ml-0.5">
                Open to opportunities
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:anishsingh210204@gmail.com"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-[15px] font-semibold rounded-lg hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
                <a
                  href="https://linkedin.com/in/anish-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white border border-white/10 text-[15px] font-semibold rounded-lg transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label, sub }, i) => (
              <FadeUp key={label} delay={i * 0.1}>
                <div className="p-6 rounded-[1.5rem] bg-white/[0.015] border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_16px_rgba(0,0,0,0.1)] hover:bg-white/[0.03] hover:border-purple-500/[0.25] hover:-translate-y-1 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_12px_32px_rgba(139,92,246,0.12)] transition-all duration-300 ease-out">
                  <p className="text-3xl font-extrabold text-foreground mb-1.5 tracking-tight">{value}</p>
                  <p className="text-[13px] font-semibold text-foreground/70">{label}</p>
                  <p className="text-[11px] font-medium text-purple-400/80 mt-1">{sub}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
