import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Globe, Database, Wrench, Terminal, Code2, Server, Layers, Command } from "lucide-react";

const skillCategories = [
    {
        id: "frontend",
        label: "Frontend_Arch",
        icon: Globe,
        color: "text-primary",
        borderColor: "border-primary/50",
        shadowColor: "shadow-primary/20",
        skills: [
            { name: "React.js", level: "Expert", desc: "Component Architecture" },
            { name: "Next.js", level: "Advanced", desc: "SSR & App Router" },
            { name: "Tailwind CSS", level: "Master", desc: "Design Systems" },
            { name: "Framer Motion", level: "Advanced", desc: "Complex Animations" },
            { name: "TypeScript", level: "Proficient", desc: "Type Safety" },
        ]
    },
    {
        id: "backend",
        label: "Backend_Sys",
        icon: Database,
        color: "text-secondary",
        borderColor: "border-secondary/50",
        shadowColor: "shadow-secondary/20",
        skills: [
            { name: "Node.js", level: "Advanced", desc: "Runtime Environment" },
            { name: "PostgreSQL", level: "Advanced", desc: "Relational DB" },
            { name: "Prisma", level: "Proficient", desc: "ORM" },
            { name: "Redis", level: "Intermediate", desc: "Caching Strategy" },
            { name: "GraphQL", level: "Intermediate", desc: "API Query Language" },
        ]
    },
    {
        id: "devops",
        label: "DevOps_Ops",
        icon: Wrench,
        color: "text-accent",
        borderColor: "border-accent/50",
        shadowColor: "shadow-accent/20",
        skills: [
            { name: "Docker", level: "Proficient", desc: "Containerization" },
            { name: "AWS", level: "Intermediate", desc: "Cloud Infrastructure" },
            { name: "CI/CD", level: "Advanced", desc: "Automation Pipelines" },
            { name: "Linux", level: "Advanced", desc: "System Administration" },
            { name: "Git", level: "Expert", desc: "Version Control" },
        ]
    }
];

export default function Skills() {
    const [activeTab, setActiveTab] = useState("frontend");

    // Find active category data
    const activeCategory = skillCategories.find(c => c.id === activeTab);

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
                    className="flex flex-col items-center mb-16 text-center"
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
                        // Select a module to view capabilities and proficiency levels.
                        <br />
                        <span className="text-primary/50"> &gt;&gt; System status: ONLINE</span>
                    </p>
                </motion.div>

                {/* HUD Interface */}
                <div className="max-w-5xl mx-auto">
                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {skillCategories.map((cat) => {
                            const isActive = activeTab === cat.id;
                            const Icon = cat.icon;

                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`relative px-6 py-3 rounded-lg border transition-all duration-300 overflow-hidden group ${isActive
                                        ? `bg-white/5 ${cat.borderColor} shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)] ${cat.shadowColor}`
                                        : "bg-transparent border-white/5 hover:border-white/20 hover:bg-white/5"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className={`absolute inset-0 opacity-10 ${cat.color} bg-current blur-md`}
                                        />
                                    )}
                                    <div className="flex items-center gap-3 relative z-10">
                                        <Icon className={`w-5 h-5 ${isActive ? cat.color : "text-gray-400 group-hover:text-white"}`} />
                                        <span className={`font-mono text-sm ${isActive ? "text-white font-bold" : "text-gray-400 group-hover:text-white"}`}>
                                            {cat.label}
                                        </span>
                                    </div>

                                    {/* Corner Accents */}
                                    {isActive && (
                                        <>
                                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" style={{ color: "var(--primary)" }} />
                                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" style={{ color: "var(--primary)" }} />
                                        </>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Area */}
                    <div className="relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {activeCategory.skills.map((skill, idx) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="group relative bg-[#0a0a0a] border border-white/10 p-6 rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
                                    >
                                        {/* Hover Effect Background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        {/* Skill Content */}
                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className={`p-2 rounded bg-white/5 ${activeCategory.color}`}>
                                                    <Terminal className="w-5 h-5" />
                                                </div>
                                                <span className={`text-[10px] uppercase font-mono px-2 py-1 rounded border border-white/10 ${activeCategory.color} bg-white/5`}>
                                                    {skill.level}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                                {skill.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 font-mono">
                                                {skill.desc}
                                            </p>
                                        </div>

                                        {/* Animated Scan Line on Hover */}
                                        <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Background Decoration specific to tab */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-${activeCategory.color?.replace('text-', '')}/5 blur-[100px] -z-10`} />
                    </div>
                </div>

                {/* Footer Status */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 flex justify-center items-center gap-8 text-xs font-mono text-gray-600 border-t border-white/5 pt-8"
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
