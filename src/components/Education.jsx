"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, Medal, Star, Calendar } from "lucide-react";

const education = [
    {
        degree: "Bachelor of Engineering (BEng) in Software Engineering",
        institution: "Java Institute for Advanced Technology",
        year: "Ongoing",
        description: "Specializing in full-stack development and software architecture.",
        color: "bg-[#7e765d]/10 border-[#7e765d]/20 text-[#7e765d]",
    },
    {
        degree: "Certificate in Computer Science",
        institution: "SLTCA",
        year: "Completed",
        description: "Foundation in computer science principles and programming.",
        color: "bg-[#aea897]/10 border-[#aea897]/20 text-[#6b6551]",
    },
    {
        degree: "Certificate in Graphic Design",
        institution: "SLTCA",
        year: "Completed",
        description: "Mastering visual communication and design tools.",
        color: "bg-gray-100 border-gray-200 text-gray-600",
    },
    {
        degree: "Certificate in AutoCAD",
        institution: "OCCS",
        year: "Completed",
        description: "Technical drawing and 2D/3D modeling skills.",
        color: "bg-[#7e765d]/5 border-[#7e765d]/10 text-[#5e5845]",
    },
];

const activities = [
    {
        title: "Cricket Captain",
        detail: "Led U17 & U19 School Teams",
        icon: Trophy,
        size: "col-span-2 row-span-2",
        color: "bg-[#7e765d]/10 text-[#7e765d]",
        iconColor: "text-[#7e765d]",
    },
    {
        title: "Long Jump Silver",
        detail: "2018 District Meet",
        icon: Medal,
        size: "col-span-1 row-span-1",
        color: "bg-[#aea897]/20 text-[#6b6551]",
        iconColor: "text-[#6b6551]",
    },
    {
        title: "District Cricket",
        detail: "Inter-District Team Member",
        icon: Star,
        size: "col-span-1 row-span-1",
        color: "bg-gray-100 text-gray-600",
        iconColor: "text-gray-600",
    },
    {
        title: "House Captain",
        detail: "School Sports Meet 2019",
        icon: Award,
        size: "col-span-1 row-span-2",
        color: "bg-[#5e5845]/10 text-[#5e5845]",
        iconColor: "text-[#5e5845]",
    },
    {
        title: "Elle Captain",
        detail: "School Team Leadership",
        icon: Trophy,
        size: "col-span-1 row-span-1",
        color: "bg-gray-200 text-gray-700",
        iconColor: "text-gray-700",
    },
    {
        title: "Elle Runner-up",
        detail: "Inter-District Tournament",
        icon: Medal,
        size: "col-span-1 row-span-1",
        color: "bg-[#8c8673]/20 text-[#5e5845]",
        iconColor: "text-[#5e5845]",
    },
];

const TimelineItem = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative pl-8 pb-12 last:pb-0 border-l-2 border-gray-200"
    >
        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-white ${item.color.split(" ")[1]}`} />
        <div className={`p-6 rounded-2xl border ${item.color.split(" ")[1]} hover:shadow-lg transition-shadow bg-white`}>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${item.color}`}>
                {item.year}
            </span>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{item.degree}</h3>
            <p className="text-gray-600 font-medium mb-2">{item.institution}</p>
            <p className="text-gray-500 text-sm">{item.description}</p>
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
        className={`${item.size} rounded-3xl p-6 ${item.color} relative overflow-hidden group cursor-default shadow-md`}
    >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
            <item.icon className="w-24 h-24" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
            </div>
            <div>
                <h4 className="font-bold text-lg leading-tight mb-1">{item.title}</h4>
                <p className="text-sm opacity-80 font-medium">{item.detail}</p>
            </div>
        </div>
    </motion.div>
);

export default function Education() {
    return (
        <section id="education" className="py-32 bg-[#fdfcf8]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Education Timeline */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                                <span className="p-3 bg-[#7e765d]/10 rounded-2xl text-[#7e765d]">
                                    <GraduationCap className="w-8 h-8" />
                                </span>
                                Education <span className="text-gray-400">Journey</span>
                            </h2>
                            <p className="text-gray-500 text-lg">My academic path and qualifications.</p>
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
                            <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                                <span className="p-3 bg-[#aea897]/10 rounded-2xl text-[#aea897]">
                                    <Trophy className="w-8 h-8" />
                                </span>
                                Beyond <span className="text-gray-400">Code</span>
                            </h2>
                            <p className="text-gray-500 text-lg">Leadership, sports, and achievements.</p>
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
