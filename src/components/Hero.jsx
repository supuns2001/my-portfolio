import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Terminal, Code } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import toast from "react-hot-toast";

// ─── Sequential Terminal Component ───────────────────────────────────────────
// Properly cleans up all intervals/timeouts on unmount. Types commands one by
// one, reveals output, then loops back after a short pause.
const terminalCommands = [
    { prompt: "$ whoami",         output: "supun-sulakshana" },
    { prompt: "$ cat skills.txt", output: "React · Node · Flutter · Docker · AWS" },
    { prompt: "$ echo $STATUS",   output: "Available for opportunities ✓" },
];

const SequentialTerminal = () => {
    const [lines, setLines] = useState([]);
    const [currentCmd, setCurrentCmd] = useState(0);
    const [phase, setPhase] = useState("typing"); // "typing" | "revealing" | "pausing"
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        const timers = [];
        const cmd = terminalCommands[currentCmd];

        if (phase === "typing") {
            let i = 0;
            const interval = setInterval(() => {
                i++;
                setTypedText(cmd.prompt.substring(0, i));
                if (i >= cmd.prompt.length) {
                    clearInterval(interval);
                    const t = setTimeout(() => setPhase("revealing"), 300);
                    timers.push(t);
                }
            }, 45);
            timers.push(interval);
        }

        if (phase === "revealing") {
            const t = setTimeout(() => {
                setLines(prev => [...prev, { prompt: cmd.prompt, output: cmd.output }]);
                setTypedText("");
                setPhase("pausing");
            }, 200);
            timers.push(t);
        }

        if (phase === "pausing") {
            const t = setTimeout(() => {
                const next = (currentCmd + 1) % terminalCommands.length;
                if (next === 0) setLines([]); // reset on loop
                setCurrentCmd(next);
                setPhase("typing");
            }, 1200);
            timers.push(t);
        }

        return () => timers.forEach(t => {
            clearInterval(t);
            clearTimeout(t);
        });
    }, [phase, currentCmd]);

    return (
        <div className="space-y-2">
            {/* Already completed lines */}
            {lines.map((line, idx) => (
                <div key={idx} className="space-y-1">
                    <div className="flex gap-2">
                        <span className="text-green-400">➜</span>
                        <span className="text-blue-400">~</span>
                        <span className="text-gray-400">{line.prompt}</span>
                    </div>
                    <div className="pl-4 text-accent font-mono text-sm">{line.output}</div>
                </div>
            ))}

            {/* Currently typing line */}
            <div className="flex gap-2">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-400">
                    {typedText}
                    <span className="animate-pulse text-primary">▌</span>
                </span>
            </div>
        </div>
    );
};

// ─── Smart CV Download ────────────────────────────────────────────────────────
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

// ─── Hero Component ───────────────────────────────────────────────────────────
export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // ── Easter Egg: ↑↑↓↓ ──────────────────────────────────────────────────
    const [easterEgg, setEasterEgg] = useState(false);
    useEffect(() => {
        const sequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown"];
        const pressed = [];
        const handler = (e) => {
            pressed.push(e.key);
            if (pressed.length > sequence.length) pressed.shift();
            if (pressed.join(",") === sequence.join(",")) {
                setEasterEgg(true);
                setTimeout(() => setEasterEgg(false), 5000);
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    // ── Robust scroll ──────────────────────────────────────────────────────
    const scrollToSection = (id) => {
        const el = document.querySelector(`#${id}`);
        if (!el) return;
        const offset = 80;
        window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - offset,
            behavior: "smooth",
        });
    };

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0 bg-background"
        >
            {/* Tech Grid Background */}
            <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20" />

            {/* Mobile-only: profile image ghost in main hero background */}
            <div className="lg:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <img
                    src="/profile-portrait.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute w-full h-full object-cover"
                    style={{
                        objectPosition: "center 10%",
                        opacity: 0.12,
                        maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 100%)",
                        WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 100%)",
                        filter: "brightness(1.4) contrast(1.0) saturate(0.4)",
                    }}
                />
                {/* Cyan edge glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent" />
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div style={{ y, opacity }} className="container mx-auto px-6 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* ── Left: Terminal Content ── */}
                    <div className="order-2 lg:order-1">

                        {/* Terminal Card */}
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
                                {/* Static profile info */}
                                <div className="pl-4 space-y-2">
                                    <div className="text-gray-300">
                                        Loading developer profile...{" "}
                                        <span className="text-green-400">Done</span>
                                    </div>
                                    <div className="text-gray-300">
                                        Name:{" "}
                                        <span className="text-primary font-bold">
                                            Supun Sulakshana
                                        </span>
                                    </div>
                                    <div className="text-gray-300">
                                        Role:{" "}
                                        <span className="text-purple-400">
                                            Full-Stack Developer
                                        </span>
                                    </div>
                                    <div className="text-gray-300">
                                        Status:{" "}
                                        <span className="text-accent animate-pulse">
                                            ● Online
                                        </span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-white/5" />

                                {/* Sequential typewriter commands */}
                                <SequentialTerminal />

                                {/* Easter Egg line */}
                                {easterEgg && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="pl-4 space-y-1"
                                    >
                                        <div className="text-yellow-400 font-mono text-sm">
                                            $ sudo hire supun --immediately
                                        </div>
                                        <div className="text-accent font-mono text-sm">
                                            ✓ Request submitted to the universe... 🚀
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>

                        {/* CTA Buttons — staggered spring entrance */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 30px rgba(0,240,255,0.55)",
                                }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => scrollToSection("projects")}
                                className="px-8 py-3 bg-primary text-black rounded-lg font-mono font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer"
                            >
                                <Code className="w-4 h-4" />
                                View_Projects
                            </motion.button>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                                whileHover={{
                                    scale: 1.03,
                                    borderColor: "rgba(0,240,255,0.5)",
                                }}
                                whileTap={{ scale: 0.97 }}
                                onClick={handleCVDownload}
                                className="px-8 py-3 glass text-white rounded-lg font-mono font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 border border-white/10 cursor-pointer"
                            >
                                <Download className="w-4 h-4" />
                                Download_CV
                            </motion.button>
                        </div>
                    </div>

                    {/* ── Right: Desktop Profile Image ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="hidden lg:flex order-1 lg:order-2 justify-center lg:justify-end relative"
                    >
                        <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[460px] aspect-[9/16] overflow-hidden">
                            <img
                                src="/profile-portrait.png"
                                alt="Supun Sulakshana"
                                className="object-cover w-full h-full mix-blend-screen transition-transform duration-700 hover:scale-105"
                                style={{
                                    WebkitMaskImage:
                                        "radial-gradient(45% 60% at 58% 38%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 100%)",
                                    maskImage:
                                        "radial-gradient(45% 60% at 58% 38%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 100%)",
                                    filter: "brightness(0.95) contrast(1.15)",
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
                onClick={() => scrollToSection("about")}
            >
                <ArrowDown className="w-6 h-6 text-primary" />
            </motion.div>
        </section>
    );
}