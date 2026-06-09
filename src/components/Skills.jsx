import { motion } from "framer-motion";
import { Server, Command } from "lucide-react";

const skillCategories = [
    {
        num: "01",
        label: "FRONTEND_ARCH",
        skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]
    },
    {
        num: "02",
        label: "BACKEND_SYS",
        skills: ["Node.js", "PHP", "Laravel", "Prisma"]
    },
    {
        num: "03",
        label: "MOBILE & DESKTOP",
        skills: ["React Native", "Android", "JavaFX"]
    },
    {
        num: "04",
        label: "DATABASE_SYS",
        skills: ["MySQL", "PostgreSQL", "Firebase"]
    },
    {
        num: "05",
        label: "DEVOPS & TOOLS",
        skills: ["Docker", "AWS", "CI/CD", "Linux", "Git", "Java"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 bg-background relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-background to-background opacity-80" />
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                        <Command className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-xs font-mono text-primary/80 tracking-widest uppercase">System_Modules</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            Technical_Arsenal
                        </span>
                    </h2>
                    <p className="text-gray-400 font-mono text-sm max-w-lg">
                        // Core engineering capabilities and technology stack.
                        <br />
                        <span className="text-primary/50"> &gt;&gt; System status: ONLINE</span>
                    </p>
                </motion.div>

                {/* Technical Arsenal List (All at once) */}
                <div className="max-w-4xl mx-auto space-y-16">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="space-y-6"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 font-mono text-xs md:text-sm tracking-widest uppercase">
                                <span className="text-gray-500">{cat.num}</span>
                                <span className="text-gray-600">— — —</span>
                                <span className="text-gray-300 font-bold">{cat.label}</span>
                            </div>

                            {/* Skills Grid/Flex container */}
                            <div className="flex flex-wrap gap-4">
                                {cat.skills.map((skill) => (
                                    <motion.div
                                        key={skill}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-6 py-3 bg-[#0d0d0d]/60 border border-white/10 hover:border-primary/50 text-foreground font-mono text-sm md:text-base rounded-md transition-all duration-300 backdrop-blur-md shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] cursor-default select-none"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Status */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 flex justify-center items-center gap-8 text-xs font-mono text-gray-600 border-t border-white/5 pt-8"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        SYSTEM_OPTIMAL
                    </div>
                    <div className="flex items-center gap-2">
                        <Server className="w-3 h-3" />
                        v2.4.0
                    </div>
                    <div>
                        LAST_UPDATE: {new Date().toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
