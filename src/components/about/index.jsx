import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        {/* Main Bio Section */}
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize mb-4">
            Software Developer | AI & ML Enthusiast
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base leading-relaxed">
            I am pursuing a <strong className="text-accent">B.Tech in Computer Science (AI & ML)</strong> 
            at Uttarakhand Technical University, graduating in 2026. Recently, I worked as a 
            <strong className="text-accent"> Software Trainee at ExplorIn Academy</strong>, where I built 
            production-ready applications using modern technologies such as Next.js, GraphQL, and Prisma ORM. 
            My expertise lies in <strong className="text-accent">full-stack development</strong> with a strong 
            focus on <strong className="text-accent">AI-powered solutions</strong> and scalable web platforms.
          </p>
          <p className="font-light text-xs sm:text-sm md:text-base mt-4 leading-relaxed">
            I have delivered impactful projects including 
            <strong className="text-accent"> HealSync</strong> (healthcare appointment platform), 
            <strong className="text-accent"> DarkStore IMS</strong> (inventory management with real-time analytics), and 
            <strong className="text-accent"> Trip Bandhu</strong> (AI-based trip planner). 
            My toolkit spans React, Next.js, TypeScript, Python, MongoDB, Prisma, ConvexDB, and advanced AI integrations.
          </p>
        </ItemLayout>

        {/* Current Status */}
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-center"}
        >
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-accent font-bold text-lg mb-2">Current Status</h3>
            <p className="text-sm font-light">
              🎓 Final-year B.Tech student (AI & ML)<br />
              💼 Completed internship at ExplorIn Academy<br />
              🚀 Actively building AI-driven projects
            </p>
          </div>
        </ItemLayout>

        {/* Professional Experience */}
        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-center text-2xl sm:text-4xl">
            350+ <sub className="font-semibold text-base block">coding challenges solved</sub>
          </p>
        </ItemLayout>

        {/* Project Count */}
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-center text-2xl sm:text-4xl">
            3+{" "}
            <sub className="font-semibold text-base block">production-ready applications</sub>
          </p>
        </ItemLayout>

        {/* Specialization */}
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-center"}
        >
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-accent font-bold text-lg mb-2">Specialization</h3>
            <p className="text-sm font-light">
              🤖 Artificial Intelligence & Machine Learning<br />
              ⚡ Full-Stack Web Development<br />
              📊 Data Visualization & Analytics
            </p>
          </div>
        </ItemLayout>

        {/* GitHub Contribution Calendar */}
        <ItemLayout className={"col-span-full lg:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://ghchart.rshah.org/FEFE5B/anishsingh234`}
            alt="Anish's GitHub Contribution Calendar"
            loading="lazy"
          />
        </ItemLayout>

        {/* GitHub Language Stats */}
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=anishsingh234&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&layout=compact`}
            alt="Anish's Top Languages"
            loading="lazy"
          />
        </ItemLayout>

        {/* GitHub General Stats */}
        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=anishsingh234&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&show_icons=true&include_all_commits=true`}
            alt="Anish's GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>

        {/* Technical Skills */}
        <ItemLayout className={"col-span-full"}>
          <div className="w-full">
            <h3 className="text-lg font-semibold text-accent mb-4 text-center">
              Technical Arsenal
            </h3>
            <img
              className="w-full h-auto"
              src={`https://skillicons.dev/icons?i=react,nextjs,ts,js,python,cpp,tailwind,prisma,mongodb,graphql,nodejs,express,vercel,git,github,vscode,html,css,mysql`}
              alt="Anish's Technical Skills"
              loading="lazy"
            />
          </div>
        </ItemLayout>

        {/* Coursework & Learning */}
        <ItemLayout className={"col-span-full sm:col-span-6 lg:col-span-4 text-center"}>
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-accent font-bold text-lg mb-3">Academic Focus</h3>
            <div className="text-xs sm:text-sm font-light space-y-1">
              <p>📚 Data Structures & Algorithms</p>
              <p>🤖 Machine Learning & Deep Learning</p>
              <p>💾 Database Management Systems</p>
              <p>🧠 Natural Language Processing</p>
              <p>⚙️ Object-Oriented Programming</p>
            </div>
          </div>
        </ItemLayout>

        {/* GitHub Profile Trophy */}
        <ItemLayout className={"col-span-full sm:col-span-6 lg:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-profile-trophy.vercel.app/?username=anishsingh234&theme=darkhub&no-frame=true&no-bg=true&margin-w=4`}
            alt="Anish's GitHub Trophies"
            loading="lazy"
          />
        </ItemLayout>

        {/* Achievement Highlight */}
        <ItemLayout className={"col-span-full sm:col-span-6 lg:col-span-4 text-center"}>
          <div className="h-full flex flex-col justify-center">
            <div className="bg-accent/10 rounded-full p-4 mx-auto mb-3">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="text-accent font-semibold mb-2">Fast Learner</h4>
            <p className="text-xs font-light">
              Adapted quickly to professional workflows, completing a full-stack 
              internship while maintaining academic excellence in AI & ML.
            </p>
          </div>
        </ItemLayout>

        {/* GitHub Streak */}
        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=anishsingh234&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Anish's GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>

        {/* Featured Project - HealSync */}
        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/anishsingh234/HealSync"
            target="_blank"
            className="w-full block hover:scale-105 transition-transform duration-300"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=anishsingh234&repo=HealSync&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="HealSync - Doctor Appointment Platform"
              loading="lazy"
            />
          </Link>
        </ItemLayout>

        {/* Enhanced Featured Projects Overview */}
        <ItemLayout className={"col-span-full flex-col items-start"}>
          <h3 className="text-xl md:text-2xl font-bold text-accent mb-6 text-center w-full">
            ⭐ Featured Projects Portfolio
          </h3>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* HealSync Project */}
            <div className="bg-gradient-to-br from-accent/10 via-background/50 to-accent/5 rounded-xl p-6 border border-accent/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <span className="text-xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-accent text-lg">HealSync</h4>
                    <p className="text-xs text-muted-foreground">Healthcare Platform</p>
                  </div>
                </div>
                <Link 
                  href="https://github.com/anishsingh234/HealSync" 
                  target="_blank"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </Link>
              </div>
              <p className="text-sm font-light mb-4 leading-relaxed">
                Comprehensive healthcare solution with doctor dashboards, appointment scheduling, 
                video consultations, and administrative management. Built for scalability and user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">Next.js</span>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">Prisma</span>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">MongoDB</span>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">Clerk Auth</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>✅ Production Ready</span>
                <span>🎯 Healthcare Tech</span>
              </div>
            </div>

            {/* DarkStore IMS Project */}
            <div className="bg-gradient-to-br from-accent/10 via-background/50 to-accent/5 rounded-xl p-6 border border-accent/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <span className="text-xl">🏪</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-accent text-lg">DarkStore IMS</h4>
                    <p className="text-xs text-muted-foreground">Inventory Management System</p>
                  </div>
                </div>
                <div className="text-accent hover:text-accent/80 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </div>
              <p className="text-sm font-light mb-4 leading-relaxed">
                Enterprise-grade inventory management with real-time analytics, role-based access control, 
                and interactive reporting dashboards for business intelligence.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">React</span>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">GraphQL</span>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">Recharts</span>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">Prisma ORM</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>📊 Analytics Focused</span>
                <span>🏢 Enterprise Solution</span>
              </div>
            </div>

            {/* Trip Bandhu Project */}
            <div className="bg-gradient-to-br from-accent/10 via-background/50 to-accent/5 rounded-xl p-6 border border-accent/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 lg:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <span className="text-xl">✈️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-accent text-lg">Trip Bandhu</h4>
                    <p className="text-xs text-muted-foreground">AI-Powered Trip Planner</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-gradient-to-r from-accent/20 to-accent/30 text-accent px-2 py-1 rounded-full font-bold">🤖 AI-Powered</span>
                  <div className="text-accent hover:text-accent/80 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-sm font-light mb-4 leading-relaxed">
                Intelligent travel planning platform leveraging <strong className="text-accent">Mistral AI</strong> for personalized itinerary generation. 
                Features real-time data synchronization, smart recommendations, and seamless user experience for modern travelers.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">Next.js 14</span>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">ConvexDB</span>
                <span className="text-xs bg-gradient-to-r from-accent/30 to-accent/40 text-accent px-3 py-1 rounded-full font-bold">Mistral AI</span>
                <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">Clerk Auth</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex gap-4">
                  <span>🧠 Machine Learning</span>
                  <span>⚡ Real-time Sync</span>
                </div>
                <span>🌟 AI Innovation</span>
              </div>
            </div>
          </div>
        </ItemLayout>

        {/* Enhanced Contact Info */}
        <ItemLayout className={"col-span-full lg:col-span-8 flex-col items-start"}>
          <h3 className="text-xl md:text-2xl font-bold text-accent mb-6 text-center w-full">
            🤝 Let's Connect & Collaborate
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-accent/10 via-background/50 to-accent/5 rounded-xl p-6 border border-accent/30">
              <h4 className="text-accent font-bold text-lg mb-4 flex items-center gap-2">
                <span>📬</span> Get In Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-background/30 rounded-lg hover:bg-background/50 transition-colors">
                  <div className="bg-accent/20 p-2 rounded-full">
                    <span className="text-sm">📧</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium break-all">anishsingh210204@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background/30 rounded-lg hover:bg-background/50 transition-colors">
                  <div className="bg-accent/20 p-2 rounded-full">
                    <span className="text-sm">💼</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">LinkedIn</p>
                    <Link 
                      href="https://linkedin.com/in/anish-ai" 
                      target="_blank"
                      className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      linkedin.com/in/anish-ai
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background/30 rounded-lg hover:bg-background/50 transition-colors">
                  <div className="bg-accent/20 p-2 rounded-full">
                    <span className="text-sm">👨‍💻</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">GitHub</p>
                    <Link 
                      href="https://github.com/anishsingh234" 
                      target="_blank"
                      className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      github.com/anishsingh234
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunities */}
            <div className="bg-gradient-to-br from-accent/10 via-background/50 to-accent/5 rounded-xl p-6 border border-accent/30">
              <h4 className="text-accent font-bold text-lg mb-4 flex items-center gap-2">
                <span>🚀</span> Open To Opportunities
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-500/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-accent mb-1">Full-Time Roles</h5>
                    <p className="text-xs text-muted-foreground">
                      Software Engineer, Full-Stack Developer, AI/ML Engineer positions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-accent mb-1">Internships</h5>
                    <p className="text-xs text-muted-foreground">
                      Summer 2025 internships in tech companies and startups
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-accent mb-1">Collaborations</h5>
                    <p className="text-xs text-muted-foreground">
                      Open-source projects, hackathons, and innovative tech solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-500/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-accent mb-1">Freelance Projects</h5>
                    <p className="text-xs text-muted-foreground">
                      Web development, AI integration, and custom software solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
            <p className="text-sm text-center text-muted-foreground">
              💡 <strong className="text-accent">Quick Response Guaranteed</strong> - I typically respond within 24 hours and am always excited to discuss new opportunities and innovative projects!
            </p>
          </div>
        </ItemLayout>

        {/* Quick Stats */}
        <ItemLayout className={"col-span-full lg:col-span-4 text-center"}>
          <div className="h-full flex flex-col justify-center">
            <div className="bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 rounded-full p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center">
              <span className="text-3xl">⚡</span>
            </div>
            <h4 className="text-accent font-bold text-lg mb-3">Ready to Ship</h4>
            <div className="space-y-2 text-sm font-light">
              <p className="flex items-center justify-center gap-2">
                <span className="text-green-500">●</span> 
                Available for immediate start
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-blue-500">●</span> 
                Remote & On-site ready
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-purple-500">●</span> 
                Passionate about innovation
              </p>
            </div>
          </div>
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;