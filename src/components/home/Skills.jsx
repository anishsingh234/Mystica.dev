"use client";
import { 
  Brain, 
  Sparkles, 
  Terminal, 
  Network, 
  Bot, 
  Server, 
  Database, 
  Cpu, 
  Code2, 
  Layout, 
  Globe, 
  Github, 
  Wrench, 
  CheckCircle2 
} from "lucide-react";
import { FadeUp, SectionLabel } from "./SharedComponents";

export const categories = [
  {
    title: "AI / ML",
    icon: Brain,
    description: "Building AI agents, RAG pipelines, and intelligent applications.",
    span: "md:col-span-2 lg:col-span-2",
    highlight: true,
    skills: [
      { name: "LLMs", icon: Sparkles },
      { name: "Prompt Engineering", icon: Terminal },
      { name: "LangChain", icon: Network },
      { name: "CrewAI", icon: Bot },
      { name: "Hugging Face", icon: Brain },
      { name: "Ollama", icon: Server },
      { name: "RAG", icon: Database },
      { name: "Vector Databases", icon: Database },
      { name: "Pinecone", icon: Cpu },
      { name: "Tool Calling", icon: Code2 },
      { name: "Multi-Agent Systems", icon: Network },
      { name: "Vercel AI SDK", icon: Cpu },
    ]
  },
  {
    title: "Backend",
    icon: Server,
    description: "Designing scalable APIs and integrating AI systems.",
    span: "col-span-1",
    skills: [
      { name: "Node.js", icon: Terminal },
      { name: "Express.js", icon: Server },
      { name: "FastAPI", icon: Cpu },
      { name: "GraphQL", icon: Network },
      { name: "REST APIs", icon: Globe },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    description: "Building responsive and performant user interfaces.",
    span: "col-span-1",
    skills: [
      { name: "React.js", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "React Native", icon: Layout },
      { name: "Expo", icon: Layout },
      { name: "Tailwind CSS", icon: Layout },
      { name: "Three.js", icon: Cpu },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Efficient data modeling and scalable storage systems.",
    span: "col-span-1",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Prisma ORM", icon: Database },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    description: "Strong problem-solving and system design foundation.",
    span: "col-span-1 md:col-span-2 lg:col-span-1",
    skills: [
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "Python", icon: Terminal },
      { name: "C++", icon: Cpu },
      { name: "C", icon: Cpu },
      { name: "SQL", icon: Database },
      { name: "HTML", icon: Layout },
      { name: "CSS", icon: Layout },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    description: "Development, deployment, and workflow management.",
    span: "md:col-span-2 lg:col-span-3",
    skills: [
      { name: "Git", icon: Network },
      { name: "GitHub", icon: Github },
      { name: "Vercel", icon: Globe },
      { name: "Clerk Auth", icon: CheckCircle2 },
      { name: "VS Code", icon: Code2 },
      { name: "Postman", icon: Layout },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 scroll-mt-20 border-t border-white/[0.06] overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <FadeUp className="mb-14 sm:mb-16 text-center sm:text-left">
          <SectionLabel>My Tech Stack</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
            Tools I architect with
          </h2>
          <p className="text-foreground/50 max-w-xl leading-relaxed text-[15px] sm:mx-0 mx-auto">
            I use these specific technologies to build production-grade AI systems, scale full-stack architectures, and ship exceptional user experiences.
          </p>
        </FadeUp>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isAI = cat.highlight;
            
            return (
              <FadeUp key={cat.title} delay={i * 0.1} className={cat.span}>
                <div className={`group relative p-6 sm:p-8 rounded-[2rem] bg-white/[0.02] border transition-all duration-500 flex flex-col h-full overflow-hidden ${
                  isAI 
                    ? "border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/[0.02] shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] hover:-translate-y-1" 
                    : "border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.03] hover:-translate-y-1"
                }`}>
                  
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                    isAI ? "bg-purple-500/20" : "bg-white/5"
                  }`} />
                  
                  <div className="flex items-center gap-4 mb-5 relative z-10">
                    <div className={`p-3 rounded-2xl border transition-all duration-300 group-hover:scale-[1.05] shadow-inner ${
                      isAI 
                        ? "bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20" 
                        : "bg-white/[0.04] border-white/[0.08] text-white/70 group-hover:text-white group-hover:bg-white/[0.08]"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white/90 tracking-wide">{cat.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-[14px] text-white/50 mb-6 max-w-sm leading-relaxed relative z-10">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto relative z-10">
                    {cat.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div 
                          key={skill.name}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 cursor-default"
                        >
                          <SkillIcon className="w-3 h-3 text-white/40" />
                          <span className="text-[11px] font-medium text-white/70">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
