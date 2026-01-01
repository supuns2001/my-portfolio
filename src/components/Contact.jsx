

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin, Github, Terminal, Send } from "lucide-react";

const contactInfo = [
    {
        icon: Phone,
        label: "Voice_Channel",
        value: "+94 716029210",
        href: "tel:+94716029210",
        color: "text-primary"
    },
    {
        icon: Mail,
        label: "Electronic_Mail",
        value: "supunsulakshana2001@gmail.com",
        href: "mailto:supunsulakshana2001@gmail.com",
        color: "text-secondary"
    },
    {
        icon: MapPin,
        label: "Base_Coordinates",
        value: "E 22/5, Ampe, Kotiyakumbura, LK",
        href: "https://maps.google.com/?q=E 22/5, Ampe, Kotiyakumbura, Sri Lanka",
        color: "text-accent"
    },
    {
        icon: Linkedin,
        label: "Neural_Net",
        value: "linkedin.com/in/supun-sulakshana",
        href: "https://linkedin.com/in/supun-sulakshana-89945424a",
        color: "text-blue-400"
    },
    {
        icon: Github,
        label: "Code_Repository",
        value: "github.com/supuns2001",
        href: "https://github.com/supuns2001",
        color: "text-white"
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                        <Send className="w-4 h-4 text-primary" />
                        <span className="text-sm font-mono text-primary">INITIATE_HANDSHAKE</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Establish <span className="text-gradient">Connection</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Available for freelance contracts and full-time deployment.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactInfo.map((info, index) => (
                        <motion.a
                            key={info.label}
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="group flex items-center gap-6 p-6 glass rounded-xl border border-white/10 hover:border-primary/50 transition-all hover:translate-x-2"
                        >
                            <div className={`p-4 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/30 transition-colors ${info.color}`}>
                                <info.icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-1">{info.label}</h3>
                                <p className="text-gray-200 font-medium group-hover:text-primary transition-colors truncate">
                                    {info.value}
                                </p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                                <Terminal className="w-4 h-4" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <p className="font-mono text-sm text-gray-600">
                        // End of transmission_
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
