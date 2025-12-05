"use client";

import { motion } from "framer-motion";
import { User, Code, Terminal, Cpu, Zap, Globe, ExternalLink } from "lucide-react";

const stats = [
    { label: "Years Experience", value: "2+", icon: <Terminal className="w-4 h-4 text-primary" /> },
    { label: "Projects Completed", value: "15+", icon: <Code className="w-4 h-4 text-secondary" /> },
    { label: "Technologies", value: "10+", icon: <Cpu className="w-4 h-4 text-accent" /> },
];

export default function About() {
    return (
        <section id="about" className="py-32 bg-background relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-secondary/5 -skew-x-12 blur-3xl -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column: Profile Module */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 glass p-8 rounded-2xl border border-white/10 overflow-hidden group">
                            {/* Scanning Line Animation */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 shadow-[0_0_20px_rgba(0,240,255,0.5)] animate-scan opacity-50" />
                            
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="font-mono text-xs text-gray-500">USER_ID: SUPUN_S</div>
                            </div>

                            {/* Profile Content */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <User className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Supun Sulakshana</h3>
                                        <p className="text-sm text-gray-400 font-mono">Full Stack Developer</p>
                                    </div>
                                </div>

                                <div className="space-y-3 font-mono text-sm text-gray-300">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Current_Focus:</span>
                                        <span className="text-secondary">Next.js Ecosystem</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Location:</span>
                                        <span className="text-white">Sri Lanka</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Status:</span>
                                        <span className="text-green-400 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                            Open for Work
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements behind card */}
                        <div className="absolute -top-4 -right-4 w-full h-full border border-primary/20 rounded-2xl -z-10" />
                        <div className="absolute -bottom-4 -left-4 w-full h-full border border-secondary/20 rounded-2xl -z-10" />
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                                <Zap className="w-4 h-4 text-yellow-400" />
                                <span className="text-xs font-mono text-yellow-400">SYSTEM_BIO</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                About <span className="text-gradient">Me</span>
                            </h2>
                            <p className="font-mono text-primary/80 text-sm mb-6">
                                // Passionate about building scalable web applications
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-400 leading-relaxed mb-8">
                            <p>
                                <span className="text-primary font-mono">&gt;</span> I am a dedicated and forward-thinking software engineering student with hands-on experience in both individual and team-based projects.
                            </p>
                            <p>
                                <span className="text-primary font-mono">&gt;</span> I enjoy solving real-world problems through creative and efficient solutions. Quick to adapt to new technologies and always ready to contribute to innovative environments.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="glass p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors text-center group">
                                    <div className="mb-2 flex justify-center group-hover:scale-110 transition-transform">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-xs text-gray-500 font-mono">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <motion.a
                            href="/cv.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-lg text-white font-mono transition-all group"
                        >
                            <ExternalLink className="w-4 h-4 group-hover:text-primary transition-colors" />
                            <span>Download_Data_Log</span>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
