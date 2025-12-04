"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "// home", href: "#hero" },
    { name: "// about", href: "#about" },
    { name: "// skills", href: "#skills" },
    { name: "// projects", href: "#projects" },
    { name: "// contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className={cn(
                "container mx-auto px-6 transition-all duration-300",
                scrolled ? "max-w-5xl" : "max-w-7xl"
            )}>
                <div className={cn(
                    "flex items-center justify-between rounded-xl px-6 py-3 transition-all duration-300",
                    scrolled ? "glass border border-white/5" : "bg-transparent"
                )}>
                    <a
                        href="#hero"
                        className="text-xl font-bold font-mono tracking-tighter hover:text-primary transition-colors flex items-center gap-2"
                    >
                        <Terminal className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Supun</span>
                        <span className="text-primary animate-pulse">_</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="text-sm font-mono text-gray-400 hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection("#contact")}
                            className="px-5 py-2 bg-primary/10 border border-primary/20 text-primary rounded-lg text-sm font-mono font-medium hover:bg-primary hover:text-black transition-all shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                        >
                            Execute("Talk")
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 glass rounded-xl border border-white/10 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-left text-lg font-mono text-gray-300 hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection("#contact")}
                                className="w-full py-3 bg-primary/10 border border-primary/20 text-primary rounded-lg font-mono font-medium hover:bg-primary hover:text-black transition-colors"
                            >
                                Execute("Talk")
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
