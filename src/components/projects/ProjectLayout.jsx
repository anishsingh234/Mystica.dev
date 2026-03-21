"use client";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

// ── Card entrance animation ───────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

// ── Status badge ─────────────────────────────────────────────────────────
const STATUS_CFG = {
  completed: {
    cls: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_10px_rgba(34,197,94,0.25)]",
    dot: "bg-emerald-400",
    label: "Completed",
    pulse: true,
  },
  "always working": {
    cls: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    dot: "bg-amber-400",
    label: "Active",
    pulse: false,
  },
  "in progress": {
    cls: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    dot: "bg-blue-400",
    label: "In Progress",
    pulse: false,
  },
};

const StatusBadge = ({ status }) => {
  const cfg = STATUS_CFG[status?.toLowerCase()] ?? {
    cls: "bg-white/5 border-white/10 text-white/40",
    dot: "bg-white/30",
    label: status,
    pulse: false,
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${cfg.cls}`}
    >
      {/* Pulsing dot — live indicator feel */}
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        {cfg.pulse && (
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${cfg.dot}`}
          />
        )}
        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${cfg.dot}`}
        />
      </span>
      {cfg.label}
    </span>
  );
};

// ── Card ────────────────────────────────────────────────────────────────
const ProjectLayout = ({
  name,
  tag,
  featured,
  description,
  bullets,
  status,
  techStack = [],
  GithubLink,
  demoLink,
}) => {
  return (
    <motion.div variants={cardVariants} className="relative group h-full">
      {/* Reduced ambient glow — balanced, not overpowering */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300 -z-10 pointer-events-none" />

      {/* Card surface */}
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={[
          "relative flex flex-col h-full rounded-2xl overflow-hidden",
          // Glass base
          "bg-white/[0.04] backdrop-blur-md",
          // Border: subtle → purple tint on hover
          "border border-white/10 group-hover:border-purple-500/30",
          // Lift shadow on hover
          "transition-all duration-300 ease-out",
          "group-hover:shadow-[0_10px_40px_rgba(139,92,246,0.2)]",
        ].join(" ")}
      >
        {/* Inner depth gradient — layering effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

        {/* Top accent shimmer line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full p-6">
          {/* ─ Header: tag + Featured badge ─ */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="min-w-0">
              {tag && (
                <p className="text-[11px] font-bold uppercase tracking-widest text-purple-400 mb-2">
                  {tag}
                </p>
              )}
              {/* Title — semibold for cleaner hierarchy */}
              <h3 className="text-xl font-semibold text-white leading-tight">
                {name}
              </h3>
            </div>

            {/* Featured badge with shimmer sweep */}
            {featured && (
              <div className="relative flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 overflow-hidden">
                <motion.span
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 pointer-events-none"
                />
                <Star className="w-3 h-3 fill-purple-400 text-purple-400 relative z-10" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 relative z-10">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* ─ Status ─ */}
          <div className="mb-4">
            <StatusBadge status={status} />
          </div>

          {/* ─ Description — improved readability ─ */}
          <p className="text-sm text-white/70 leading-relaxed mb-4">
            {description}
          </p>

          {/* ─ Bullet points ─ */}
          {bullets && bullets.length > 0 && (
            <ul className="space-y-1.5 mb-5">
              {bullets.slice(0, 4).map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[13px] text-white/60"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400/80 mt-[2px] shrink-0" />
                  <span className="leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex-1" />

          {/* ─ Tech badges ─ */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {techStack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 border border-white/10 text-white/80 hover:bg-purple-500/10 hover:border-purple-500/40 hover:text-purple-300 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
              {techStack.length > 6 && (
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/30">
                  +{techStack.length - 6}
                </span>
              )}
            </div>
          )}

          {/* ─ Action buttons ─ */}
          {(demoLink || GithubLink) && (
            <div className="flex gap-2.5 pt-4 border-t border-white/[0.06]">
              {/* Live Demo — gradient with arrow animation */}
              {demoLink && (
                <motion.a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="flex-1 group/btn flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-[0_0_22px_rgba(139,92,246,0.5)] transition-shadow duration-300"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  <span>Live Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </motion.a>
              )}

              {/* GitHub — ghost with icon micro-animation */}
              {GithubLink && (
                <motion.a
                  href={GithubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className={`group/gh flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-xl border border-white/20 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-200 ${
                    demoLink ? "" : "flex-1"
                  }`}
                >
                  <Github className="w-3.5 h-3.5 shrink-0 group-hover/gh:scale-110 transition-transform duration-200" />
                  <span>GitHub</span>
                </motion.a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectLayout;
