

import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, Medal, Star, Cpu, Zap, Activity } from "lucide-react";

const education = [
    {
        degree: "BEng in Software Engineering",
        institution: "Java Institute for Advanced Technology",
        year: "Ongoing",
        status: "In_Progress",
        description: "Specializing in full-stack development and software architecture.",
        tech: ["Java", "Design Patterns", "Cloud"],
    },
    {
        degree: "Certificate in Computer Science",
        institution: "SLTCA",
        year: "Completed",
        status: "Verified",
        description: "Foundation in computer science principles and programming.",
        tech: ["CS Fundamentals", "Algorithms"],
    },
    {
        degree: "Certificate in Graphic Design",
        institution: "SLTCA",
        year: "Completed",
        status: "Verified",
        description: "Mastering visual communication and design tools.",
        tech: ["UI/UX", "Adobe Suite"],
    },
    {
        degree: "Certificate in AutoCAD",
        institution: "OCCS",
        year: "Completed",
        status: "Verified",
        description: "Technical drawing and 2D/3D modeling skills.",
        tech: ["CAD", "3D Modeling"],
    },
];

const activities = [
    {
        title: "Cricket Captain",
        detail: "Led U17 & U19 School Teams",
        icon: Trophy,
        size: "col-span-2 row-span-2",
        type: "Leadership",
    },
    {
        title: "Long Jump Silver",
        detail: "2018 District Meet",
        icon: Medal,
        size: "col-span-1 row-span-1",
        type: "Athletics",
    },
    {
        title: "District Cricket",
        detail: "Inter-District Team Member",
        icon: Star,
        size: "col-span-1 row-span-1",
        type: "Sports",
    },
    {
        title: "House Captain",
        detail: "School Sports Meet 2019",
        icon: Award,
        size: "col-span-1 row-span-2",
        type: "Leadership",
    },
    {
        title: "Elle Captain",
        detail: "School Team Leadership",
        icon: Trophy,
        size: "col-span-1 row-span-1",
        type: "Leadership",
    },
    {
        title: "Elle Runner-up",
        detail: "Inter-District Tournament",
        icon: Medal,
        size: "col-span-1 row-span-1",
        type: "Athletics",
    },
];

const TimelineItem = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative pl-8 pb-12 last:pb-0 border-l border-white/10"
    >
        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,240,255,0.5)]" />

        <div className="group relative">
            <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                            {item.degree}
                        </h3>
                        <p className="text-gray-400 text-sm font-mono">{item.institution}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${item.status === "In_Progress"
                        ? "border-yellow-500/50 text-yellow-500 bg-yellow-500/10"
                        : "border-green-500/50 text-green-500 bg-green-500/10"
                        }`}>
                        {item.status}
                    </span>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {item.tech.map((t, i) => (
                        <span key={i} className="text-xs font-mono text-primary/80">
                            #{t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const BentoItem = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className={`${item.size} group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors`}
    >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10 h-full p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
                    <item.icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                    {item.type}
                </span>
            </div>

            <div>
                <h4 className="font-bold text-white text-lg mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                </h4>
                <p className="text-sm text-gray-400 font-mono">
                    {item.detail}
                </p>
            </div>
        </div>
    </motion.div>
);

export default function Education() {
    return (
        <section id="education" className="py-32 bg-background relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Education Timeline */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                                <Cpu className="w-4 h-4 text-primary" />
                                <span className="text-xs font-mono text-primary">SYSTEM_HISTORY</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-4 text-white">
                                Education <span className="text-gradient">Journey</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm">
                                // Academic milestones and certifications
                            </p>
                        </motion.div>

                        <div className="mt-8">
                            {education.map((edu, index) => (
                                <TimelineItem key={index} item={edu} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Activities Bento Grid */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                                <Activity className="w-4 h-4 text-secondary" />
                                <span className="text-xs font-mono text-secondary">EXTRA_CURRICULAR</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-4 text-white">
                                Beyond <span className="text-gradient">Code</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm">
                                // Leadership roles and achievements unlocked
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px]">
                            {activities.map((activity, index) => (
                                <BentoItem key={index} item={activity} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
