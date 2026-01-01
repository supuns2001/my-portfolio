

import { useState, useEffect } from "react";
import { Terminal, FileText, Mail, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CommandPalette() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command) => {
        setOpen(false);
        command();
    };

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="relative w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl"
                    >
                        <div className="flex items-center border-b border-white/10 px-4">
                            <Terminal className="mr-2 h-4 w-4 text-gray-400" />
                            <input
                                placeholder="Type a command or search..."
                                className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 text-gray-200"
                                autoFocus
                            />
                            <div className="flex items-center gap-1 text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">
                                <span className="text-xs">ESC</span>
                            </div>
                        </div>

                        <div className="p-2">
                            <div className="px-2 py-1.5 text-xs font-medium text-gray-500 uppercase tracking-wider">Navigation</div>
                            <button
                                onClick={() => runCommand(() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }))}
                                className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-primary transition-colors cursor-pointer"
                            >
                                <Terminal className="h-4 w-4" />
                                <span>Go to Home</span>
                            </button>
                            <button
                                onClick={() => runCommand(() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }))}
                                className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-primary transition-colors cursor-pointer"
                            >
                                <FileText className="h-4 w-4" />
                                <span>View Projects</span>
                            </button>
                            <button
                                onClick={() => runCommand(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }))}
                                className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-primary transition-colors cursor-pointer"
                            >
                                <Mail className="h-4 w-4" />
                                <span>Contact Me</span>
                            </button>

                            <div className="mt-2 px-2 py-1.5 text-xs font-medium text-gray-500 uppercase tracking-wider">Socials</div>
                            <button
                                onClick={() => runCommand(() => window.open("https://github.com/supuns2001", "_blank"))}
                                className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-primary transition-colors cursor-pointer"
                            >
                                <Github className="h-4 w-4" />
                                <span>GitHub</span>
                            </button>
                            <button
                                onClick={() => runCommand(() => window.open("https://linkedin.com/in/supun-sulakshana-89945424a", "_blank"))}
                                className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-primary transition-colors cursor-pointer"
                            >
                                <Linkedin className="h-4 w-4" />
                                <span>LinkedIn</span>
                            </button>
                        </div>

                        <div className="border-t border-white/10 px-4 py-2 text-xs text-gray-500 flex justify-between">
                            <span>Pro tip: Use arrow keys to navigate</span>
                            <span>v1.0.0</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
