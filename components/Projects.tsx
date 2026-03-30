"use client";

import { motion } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const projects = [
    {
        title: "NSDL PAYMENT BANK",
        category: "Banking App",
        description: "Architected a secure, high-performance Flutter banking ecosystem featuring a modular design system and scalable state management to deliver seamless financial services for millions of users.",
        tech: "Flutter, Dart, RESTful APIs, Firebase",
        image: `${basePath}/projects/nsdl.png`,
        url: "https://play.google.com/store/apps/details?id=com.nsdlpb.jiffy",
    },
    {
        title: "GMoney Private Limited",
        category: "FinTech App",
        description: "Architected a dual-app ecosystem for healthcare lending using GetX, streamlining specialized loan workflows for both doctors and customers through a high-performance, single-codebase solution.",
        tech: "Flutter, Dart, RESTful APIs, Firebase",
        image: `${basePath}/projects/gmoney.png`,
        url: "https://www.gmoney.in/",
    },
    {
        title: "SnapWork Technologies",
        category: "Banking App",
        description: "Engineered a comprehensive Flutter-based field service management platform, delivering real-time job tracking, automated scheduling, and seamless client communication through a unified, high-performance mobile solution.",
        tech: "Flutter, Dart, RESTful APIs, Firebase",
        image: `${basePath}/projects/snapworks.jpeg`,
        url: "https://play.google.com/store/apps/details?id=com.hsl.investright&hl=en_IN",
    },
    {
        title: "Here Technologies",
        category: "Mapping & Navigation",
        description: "Development of a high-performance Flutter-based mapping and navigation application, delivering real-time location tracking, turn-by-turn directions, and seamless user experiences through a unified, high-performance mobile solution.",
        tech: "Flutter, Dart, RESTful APIs, Firebase",
        image: `${basePath}/projects/here.png`,
        url: "https://play.google.com/store/apps/details?id=com.here.app.maps&hl=en_IN",
    },
];

export default function Projects() {
    return (
        <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold mb-20 tracking-tighter text-white"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => {
                        const content = (
                            <>
                                {/* Image Background */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent opacity-90 transition-opacity group-hover:opacity-75" />
                                </div>

                                <div className="relative z-10 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 text-xs font-medium tracking-widest text-[#121212] uppercase bg-[#ededed] rounded-full shadow-lg">
                                            {project.category}
                                        </span>
                                        <span className="px-3 py-1 text-xs font-medium tracking-widest text-white uppercase border border-white/30 rounded-full backdrop-blur-md">
                                            {project.tech}
                                        </span>
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-3 drop-shadow-md transition-colors group-hover:text-blue-400">
                                        {project.title}
                                        {project.url && (
                                            <span className="inline-block ml-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 text-2xl font-normal leading-none transform translate-y-0.5">
                                                ↗
                                            </span>
                                        )}
                                    </h3>
                                    <p className="text-gray-200 text-lg leading-relaxed drop-shadow-md">{project.description}</p>
                                </div>
                            </>
                        );

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 h-[500px]"
                            >
                                {project.url ? (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative flex flex-col justify-end cursor-pointer">
                                        {content}
                                    </a>
                                ) : (
                                    <div className="block w-full h-full relative flex flex-col justify-end">
                                        {content}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
