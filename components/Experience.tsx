"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "Ascra Technolgies LLP",
        role: "Senior Flutter Developer",
        period: "March 2023 – Present",
        description: "I have successfully delivered end-to-end cross-platform banking solutions for NSDL by architecting a modular codebase with reusable UI components, implementing scalable state management using GetX and Bloc, and integrating secure RESTful APIs and Firebase services to ensure a high-performance, visually polished user experience on both Android and iOS.",
        url: "https://ascratech.com/",
    },
    {
        company: "GMoney Private Limited",
        role: "Flutter Developer",
        period: "June 2022 – Feb 2023",
        description: "Strategic Flutter & FinTech Developer with a proven track record of architecting high-security banking and medical lending applications, specializing in scalable state management with GetX and Bloc, modular UI system design, and the seamless integration of complex RESTful APIs and Firebase services to deliver high-performance Android and iOS solutions.",
        url: "https://www.gmoney.in/",
    },
    {
        company: "SnapWork Technologies",
        role: "Flutter Developer",
        period: "Jan 2022 – May 2022",
        description: "Rapidly contributed to the development of HDFC’s high-frequency trading application at SnapWork Technologies, leveraging BLoC to architect complex, real-time data streams and ensuring a high-performance user experience.",
        url: "https://www.snapwork.com/home",
    },
    {
        company: "Here Technology",
        role: "Spatial Data Specialist/flutter developer",
        period: "Jan 2018 – Dec 2021",
        description: "Spatial Data Engineer specialized in architecting high-precision navigation and LiDAR-integrated mapping solutions for Audi and BMW, leveraging real-time geospatial processing autonomous-grade driving experiences.",
        url: "https://www.here.com/",
    },
];

export default function Experience() {
    return (
        <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter text-white text-center"
                >
                    Career Timeline
                </motion.h2>

                <div className="relative border-l border-white/20 ml-4 md:ml-0 md:pl-0 space-y-12">
                    {experiences.map((exp, index) => {
                        const content = (
                            <>
                                <div className="text-sm text-gray-500 font-mono mb-2 uppercase tracking-widest">{exp.period}</div>
                                <h3 className={`text-3xl font-bold mb-1 transition-colors ${exp.url ? 'text-white group-hover:text-blue-400' : 'text-white'}`}>
                                    {exp.company}
                                    {exp.url && (
                                        <span className="inline-block ml-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 text-2xl font-normal leading-none transform translate-y-0.5">
                                            ↗
                                        </span>
                                    )}
                                </h3>
                                <h4 className="text-xl text-gray-400 mb-4">{exp.role}</h4>
                                <p className="text-gray-300 leading-relaxed max-w-2xl">
                                    {exp.description}
                                </p>
                            </>
                        );

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-8 md:pl-12 group"
                            >
                                <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 ${exp.url ? 'group-hover:scale-150 group-hover:bg-blue-400 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.8)]' : ''}`} />

                                {exp.url ? (
                                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                                        {content}
                                    </a>
                                ) : (
                                    <div className="block">
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
