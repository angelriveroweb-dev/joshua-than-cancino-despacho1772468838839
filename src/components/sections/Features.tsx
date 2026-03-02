import { motion } from "framer-motion";
import { config } from "@/config";
import { Scale, Globe, Building2 } from "lucide-react";

export function Features() {
    const { features } = config.dynamicContent;
    const icons = [Building2, Globe, Scale];

    return (
        <section id="features" className="py-32 bg-[#0F1216] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                        Áreas de <span className="text-[#D4AF37] italic">Práctica</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = icons[index] || Scale;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group p-8 border border-white/10 hover:border-[#D4AF37]/50 bg-white/[0.02] transition-colors duration-500"
                            >
                                <Icon className="w-10 h-10 text-[#D4AF37] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-2xl font-display text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-zinc-400 font-sans font-light leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}