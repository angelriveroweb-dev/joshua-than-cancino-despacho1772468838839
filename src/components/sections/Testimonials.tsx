import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { config } from "@/config";

export function Testimonials() {
    const { testimonials } = config;

    return (
        <section id="testimonials" className="py-32 bg-[#0A0C0E] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <p className="text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4">Testimonios</p>
                    <h2 className="text-4xl md:text-6xl font-display text-white">
                        Confianza <span className="text-[#D4AF37] italic">Verificada</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#0F1216] border border-white/5 p-8 rounded-none hover:border-[#D4AF37]/30 transition-all duration-500"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, index) => (
                                    <Star key={index} size={16} className="fill-[#D4AF37] text-[#D4AF37]" />
                                ))}
                            </div>

                            <p className="text-lg font-sans font-light text-zinc-300 leading-relaxed mb-8 italic">
                                "{item.text}"
                            </p>

                            <div className="pt-6 border-t border-white/5">
                                <p className="text-white font-display font-bold text-lg">
                                    {item.name}
                                </p>
                                <p className="text-[#D4AF37] text-xs uppercase tracking-widest mt-1">
                                    {item.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}