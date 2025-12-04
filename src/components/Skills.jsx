"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Database, Wrench, Terminal } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Architecture",
        icon: <Globe className="w-6 h-6 text-primary" />,
        skills: [
            { name: "React.js", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 95 },
            { name: "JavaScript (ES6+)", level: 90 },
            { name: "React Native", level: 75 },
        ]
    },
    {
        title: "Backend Systems",
        icon: <Database className="w-6 h-6 text-secondary" />,
        skills: [
            { name: "Java", level: 85 },
            { name: "PHP", level: 80 },
            { name: "SQL / MySQL", level: 85 },
            { name: "Express.js", level: 70 },
            { name: "Firebase", level: 75 },
        ]
    },
    {
        title: "DevOps & Tools",
        icon: <Wrench className="w-6 h-6 text-accent" />,
        skills: [
            { name: "Git / GitHub", level: 90 },
            { name: "VS Code", level: 95 },
            { name: "Figma", level: 80 },
            { name: "Postman", level: 85 },
            { name: "Linux", level: 70 },
        ]
    }
];

const SkillBar = ({ skill, index }) => (
    <div className="mb-4">
        <div className="flex justify-between mb-1">
            <span className="text-sm font-mono text-gray-300">{skill.name}</span>
            <span className="text-xs font-mono text-primary">{skill.level}%</span>
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
            >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </motion.div>
        </div>
    </div>
);

export default function Skills() {
    return (
        <section id="skills" className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                        <Cpu className="w-4 h-4 text-primary animate-spin-slow" />
                        <span className="text-sm font-mono text-primary">SYSTEM_CAPABILITIES</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                        Core competencies and technological proficiency levels.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold font-mono text-foreground">{category.title}</h3>
                            </div>

                            <div>
                                {category.skills.map((skill, index) => (
                                    <SkillBar key={skill.name} skill={skill} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Terminal-like footer for skills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="mt-16 p-4 bg-black/50 rounded-lg border border-white/10 font-mono text-xs text-gray-500 text-center max-w-2xl mx-auto"
                >
                    <span className="text-green-500">root@portfolio:~$</span> check_updates --all
                    <br />
                    <span className="text-blue-400">info:</span> All systems operational. Continuous learning modules active.
                </motion.div>
            </div>
        </section>
    );
}
