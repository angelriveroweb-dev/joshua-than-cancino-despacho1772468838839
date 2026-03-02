import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { config } from "@/config";

export function Contact() {
    const { contact } = config;

    return (
        <section id="contact" className="py-32 bg-[#0F1216] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-5xl font-display text-white mb-12">
                            Contacto <span className="text-[#D4AF37]">Directo</span>
                        </h2>

                        <div className="space-y-10">
                            <div className="flex gap-6">
                                <MapPin className="w-6 h-6 text-[#D4AF37] shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Ubicación</h4>
                                    <p className="text-zinc-400 max-w-sm">{contact.address}</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <Phone className="w-6 h-6 text-[#D4AF37] shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Teléfono</h4>
                                    <a href={`tel:${contact.phoneClean}`} className="text-zinc-400 hover:text-white transition-colors">
                                        {contact.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <Mail className="w-6 h-6 text-[#D4AF37] shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Email</h4>
                                    <a href={`mailto:${contact.email}`} className="text-zinc-400 hover:text-white transition-colors">
                                        {contact.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[400px] w-full bg-zinc-900 border border-white/10 grayscale invert contrast-125 brightness-75">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=${encodeURIComponent(contact.mapQuery)}`}
                            // NOTE: In a real scenario, use a real Google Maps Embed URL or API Key. 
                            // For this demo, we assume the user might not have a key, so we use a generic placeholder or the existing embed if available.
                            // Reverting to generic embed for safety in demo:
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}