import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Gold Monitoring Dashboard",
    category: "FINANCIAL DASHBOARD",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: "02",
    title: "JSON Forge",
    category: "DEVELOPER TOOL",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "03",
    title: "Calendra Pro",
    category: "SCHEDULING PLATFORM",
    aspectRatio: "aspect-square",
  },
  {
    id: "04",
    title: "Cambodia Conflict Info",
    category: "CONFLICT MONITOR",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: "05",
    title: "Multimodal Research Assistant",
    category: "AI RESEARCH TOOL",
    aspectRatio: "aspect-video",
  },
  {
    id: "06",
    title: "Real-Time Earth 3D",
    category: "3D VISUALIZATION",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "07",
    title: "KampuJobs",
    category: "JOB PLATFORM",
    aspectRatio: "aspect-square",
  },
  {
    id: "08",
    title: "Resume Builder",
    category: "PRODUCTIVITY TOOL",
    aspectRatio: "aspect-[4/5]",
  },
];

export default function PortfolioSection() {
  return (
    <section className="min-h-screen bg-[#050505] text-white p-6 md:p-12 lg:p-20">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-12 md:mb-20">
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 font-mono">
            Selected Works
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid group cursor-pointer"
            >
              <div
                className={`relative w-full ${project.aspectRatio} rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 group-hover:border-white/20 bg-[#0a0a0a]`}
              >
                {/* Background Image with Grayscale and Dark Overlay */}
                <Image
                  src={`https://picsum.photos/seed/${project.id}/800/1000`}
                  alt={project.title}
                  fill
                  className="object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 grayscale group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80" />

                {/* Card Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                  {/* Top section: Number and Arrow */}
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-xs md:text-sm text-white/60">
                      {project.id}
                    </span>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-white group-hover:text-black group-hover:border-white">
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>

                  {/* Bottom section: Title and Category */}
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3 md:mb-4 text-white/90 group-hover:text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/40 group-hover:text-white/70 transition-colors duration-500">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
