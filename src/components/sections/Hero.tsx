import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Hero() {
    const { hero, city } = config.dynamicContent;
    
    // Parse dynamic city in subheadline
    const parsedSubheadline = hero.subheadline.replace("{city}", city);

    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#0F1216]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={hero.image}
                    alt="Corporate Architecture"
                    className="w-full h-full object-cover opacity-30 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F1216] via-[#0F1216]/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1216] via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                        <p className="text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase font-bold">
                            Joshua Than Cancino
                        </p>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight">
                        {hero.headline}
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 font-sans font-light leading-relaxed max-w-2xl mb-12 border-l-2 border-[#D4AF37]/30 pl-6">
                        {parsedSubheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button
                            size="lg"
                            className="bg-[#D4AF37] text-black hover:bg-[#C5A059] rounded-none px-10 py-6 text-sm tracking-widest uppercase font-bold"
                            onClick={() => window.location.href = '#contact'}
                        >
                            {hero.cta}
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </Button>
                        
                        <div className="flex items-center gap-3 text-zinc-500 px-4">
                            <ShieldCheck className="text-[#D4AF37]" />
                            <span className="text-xs uppercase tracking-wider font-bold">Atención Bilingüe</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}