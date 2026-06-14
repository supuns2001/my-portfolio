import { motion } from "framer-motion";
import toast from "react-hot-toast";

const handleCVDownload = async () => {
    try {
        const res = await fetch("/cv.pdf", { method: "HEAD" });
        if (res.ok) {
            window.open("/cv.pdf", "_blank");
        } else {
            toast("CV is being updated! Check LinkedIn for now 🚀", {
                icon: "📄",
                duration: 4000,
            });
        }
    } catch {
        toast.error("Something went wrong. Please try again.");
    }
};
import { Terminal, Code, Cpu, Command, ExternalLink } from "lucide-react";

const skillCategories = [
    {
        num: "01",
        label: "FRONTEND_ARCH",
        skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]
    },
    {
        num: "02",
        label: "BACKEND_SYS",
        skills: ["Node.js", "PHP", "Laravel", "Java", "Prisma"]
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
        skills: ["Docker", "AWS", "CI/CD", "Linux", "Git"]
    }
];

const highlightTags = ["Full-Stack Dev", "Clean Architecture", "Scalable Systems"];

const stats = [
    { label: "Years Experience", value: "2+", icon: <Terminal className="w-5 h-5 text-primary" /> },
    { label: "Projects Completed", value: "15+", icon: <Code className="w-5 h-5 text-secondary" /> },
    { label: "Technologies", value: "10+", icon: <Cpu className="w-5 h-5 text-accent" /> },
];

export default function About() {
    return (
        <section id="about" className="py-32 bg-background relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-background to-background opacity-80" />
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto">
                    
                    {/* Left Column: About Me */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                                About Me
                            </h2>
                            <p className="font-mono text-primary/80 text-sm">
                                // Passionate about building scalable web applications
                            </p>
                        </div>

                        {/* Paragraphs with '>' symbol */}
                        <div className="space-y-6 text-gray-400 leading-relaxed font-light text-sm md:text-base">
                            <p className="flex items-start gap-2">
                                <span className="text-primary font-mono font-bold">&gt;</span>
                                <span>I am a dedicated and forward-thinking software engineering student with hands-on experience in both individual and team-based projects.</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-primary font-mono font-bold">&gt;</span>
                                <span>I enjoy solving real-world problems through creative and efficient solutions. Quick to adapt to new technologies and always ready to contribute to innovative environments.</span>
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {stats.map((stat, index) => (
                                <div 
                                    key={index} 
                                    className="glass p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors text-center group flex flex-col items-center"
                                >
                                    <div className="mb-2 flex justify-center group-hover:scale-110 transition-transform">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                                    <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider leading-tight">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CV Download button */}
                        <div>
                            <motion.button
                                onClick={handleCVDownload}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-lg text-white font-mono transition-all group cursor-pointer"
                            >
                                <ExternalLink className="w-4 h-4 group-hover:text-primary transition-colors" />
                                <span>Download_Data_Log</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Column: Technical Arsenal */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-10"
                    >
                        {/* Section Sub-Header */}
                        <div className="flex items-center gap-2">
                            <Command className="w-4 h-4 text-primary animate-pulse" />
                            <span className="text-xs font-mono text-primary/80 tracking-widest uppercase">
                                Technical_Arsenal
                            </span>
                        </div>

                        {/* Skills categories list */}
                        <div className="space-y-8">
                            {skillCategories.map((cat, idx) => (
                                <div key={cat.label} className="space-y-4">
                                    {/* Category Header */}
                                    <div className="flex items-center gap-4 font-mono text-xs tracking-widest uppercase">
                                        <span className="text-gray-500">{cat.num}</span>
                                        <span className="text-gray-600">— —</span>
                                        <span className="text-gray-300 font-bold">{cat.label}</span>
                                    </div>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-3">
                                        {cat.skills.map((skill) => (
                                            <motion.div
                                                key={skill}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-4 py-2 bg-[#0d0d0d]/60 border border-white/10 hover:border-primary/50 text-foreground font-mono text-xs md:text-sm rounded transition-all duration-300 backdrop-blur-md shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] cursor-default select-none"
                                            >
                                                {skill}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-white/10" />

                        {/* Highlight Bottom Tags */}
                        <div className="flex flex-wrap gap-3">
                            {highlightTags.map((tag) => (
                                <div
                                    key={tag}
                                    className="px-5 py-2.5 bg-transparent border border-accent/30 text-accent font-mono text-xs rounded uppercase tracking-wider"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
