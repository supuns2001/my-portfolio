

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Terminal, Code, Cpu } from "lucide-react";
import { useRef, useState, useEffect } from "react";


const TypewriterText = ({ text, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayedText(text.substring(0, i + 1));
                i++;
                if (i > text.length) clearInterval(interval);
            }, 50);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    return <span>{displayedText}</span>;
};

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0 bg-background"
        >
            {/* Tech Grid Background */}
            <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20" />

            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div style={{ y, opacity }} className="container mx-auto px-6 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Terminal Content */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="glass rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                        >
                            {/* Terminal Header */}
                            <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <div className="ml-4 text-xs text-gray-400 font-mono flex items-center gap-2">
                                    <Terminal className="w-3 h-3" />
                                    supun@portfolio:~/dev
                                </div>
                            </div>

                            {/* Terminal Body */}
                            <div className="p-6 md:p-8 font-mono text-sm md:text-base space-y-4">
                                <div className="flex gap-2">
                                    <span className="text-green-400">➜</span>
                                    <span className="text-blue-400">~</span>
                                    <span className="text-gray-400">$ init portfolio</span>
                                </div>

                                <div className="pl-4 space-y-2">
                                    <div className="text-gray-300">
                                        Loading developer profile... <span className="text-green-400">Done</span>
                                    </div>
                                    <div className="text-gray-300">
                                        Name: <span className="text-primary font-bold">Supun Sulakshana</span>
                                    </div>
                                    <div className="text-gray-300">
                                        Role: <span className="text-secondary">Full-Stack Developer</span>
                                    </div>
                                    <div className="text-gray-300">
                                        Status: <span className="text-accent animate-pulse">● Online</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-4">
                                    <span className="text-green-400">➜</span>
                                    <span className="text-blue-400">~</span>
                                    <span className="text-gray-400">$ <TypewriterText text="echo 'Building the future, one line of code at a time.'" delay={1000} /><span className="animate-pulse">_</span></span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5, duration: 0.5 }}
                            className="mt-8 flex flex-col sm:flex-row gap-4"
                        >
                            <button
                                onClick={scrollToProjects}
                                className="px-8 py-3 bg-primary text-black rounded-lg font-mono font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                            >
                                <Code className="w-4 h-4" />
                                View_Projects
                            </button>
                            <a
                                href="/cv.pdf"
                                className="px-8 py-3 glass text-white rounded-lg font-mono font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-primary/50"
                            >
                                <Download className="w-4 h-4" />
                                Download_CV
                            </a>
                        </motion.div>
                    </div>

                    {/* Hero Image / Tech Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                    >
                        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                            {/* Rotating Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border border-primary/20 rounded-full border-dashed"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border border-secondary/20 rounded-full border-dotted"
                            />

                            {/* Image Container */}
                            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_50px_rgba(0,240,255,0.2)]">
                                <img
                                    src="/hero-image.jpg"
                                    alt="Supun Sulakshana"
                                    className="object-cover hover:scale-110 transition-transform duration-700 w-full h-full absolute inset-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            {/* Floating Tech Icons */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-4 top-1/4 glass p-3 rounded-xl border border-white/10"
                            >
                                <Cpu className="w-6 h-6 text-primary" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -left-4 bottom-1/4 glass p-3 rounded-xl border border-white/10"
                            >
                                <Code className="w-6 h-6 text-secondary" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="w-6 h-6 text-primary" />
            </motion.div>
        </section>
    );
}
