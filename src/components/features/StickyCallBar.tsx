import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function StickyCallBar() {
    const { phoneClean } = config.contact;
    const whatsappUrl = `https://wa.me/${phoneClean}`;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0F1216] border-t border-white/10 p-4 pb-safe flex gap-4 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
            <Button
                className="flex-1 bg-green-600 hover:bg-green-700 text-white border-none shadow-lg shadow-green-900/20 rounded-lg"
                onClick={() => window.open(whatsappUrl, '_blank')}
            >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
            </Button>
            <Button
                className="flex-1 bg-[#D4AF37] hover:bg-[#C5A059] text-black border-none shadow-lg shadow-amber-900/20 rounded-lg"
                onClick={() => window.location.href = `tel:+${phoneClean}`}
            >
                <Phone className="w-4 h-4 mr-2" />
                Llamar
            </Button>
        </div>
    );
}