export function Footer() {
    return (
        <footer className="bg-[#0A0C0E] text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight text-center">
                        JOSHUA THAN <span className="text-[#D4AF37]">CANCINO</span>
                    </h2>
                    <p className="text-zinc-500 mt-4 text-sm tracking-widest uppercase">Despacho Jurídico</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
                    <div className="mb-8 md:mb-0">
                        <p className="text-zinc-600 text-xs font-mono">
                            © {new Date().getFullYear()} Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}