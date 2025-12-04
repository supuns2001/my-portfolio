"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} id="about" className="py-32 bg-primary/5 relative overflow-hidden">
            {/* Decorative Elements */}
            <motion.div
                style={{ y }}
                className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"
            />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm p-10 md:p-16 rounded-3xl shadow-xl border border-white/50 relative">
                        <div className="absolute -top-6 -left-6 w-12 h-12 bg-secondary/20 rounded-full blur-xl" />
                        <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-xl" />

                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
                            I am a dedicated and forward-thinking software engineering student with hands-on experience in both individual and team-based projects, including real client work. I enjoy solving real-world problems through creative and efficient solutions.
                        </p>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                            I'm quick to adapt to new technologies, passionate about continuous learning, and always ready to contribute to innovative and collaborative environments. I’m looking to bring my energy and skills into a team where I can grow and make a meaningful impact.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
