export const config = {
    // Critical Landing Client ID
    landingClientId: "34ac60bb-b5d0-4fc2-b807-7d3072481017",
    
    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL,
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    },

    contact: {
        phone: "+52 961 332 0359",
        phoneClean: "529613320359",
        address: "Boulevard Belisario Domínguez, Sta. Elena 2535-Primer piso, Local 18, Santa Elena, 29020 Tuxtla Gutiérrez, Chis., México",
        mapQuery: "Joshua Than Cancino Despacho de abogados Tuxtla Gutierrez",
        email: "contacto@thancancino.com",
        facebook: "https://www.facebook.com/thancancino"
    },

    dynamicContent: {
        city: "Tuxtla Gutiérrez",
        hero: {
            headline: "Seguridad Jurídica Global",
            subheadline: "Protección patrimonial y defensa estratégica con raíces en {city}. Expertos en Inversión Extranjera y Derecho Migratorio.",
            cta: "Agendar Consulta Inicial",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
        },
        features: [
            {
                title: "Derecho Corporativo",
                desc: "Estructuración de empresas y prevención de fraudes para capital nacional y extranjero."
            },
            {
                title: "Derecho Migratorio",
                desc: "Regularización de estancia y trámites consulares con atención bilingüe."
            },
            {
                title: "Derecho Inmobiliario",
                desc: "Certeza jurídica en transacciones de bienes raíces y protección patrimonial."
            }
        ]
    },

    testimonials: [
        {
            name: "Gustavo",
            role: "Cliente Internacional",
            text: "Joshua was extremely helpful in our initial consultation. My wife and I live in Toronto and he solved our investment property issues in Mexico.",
            tags: ["Inversión", "Internacional"]
        },
        {
            name: "Selin La Rossa",
            role: "Cliente Verificada",
            text: "Si alguien busca un abogado de migración en Tuxtla, definitivamente lo recomiendo. Me explicó todo con mucha claridad.",
            tags: ["Migración", "Claridad"]
        },
        {
            name: "Eyeth Videos",
            role: "Inversionista",
            text: "Joshua Than Cancino saved me from two fraudulent real estate purchases. Without his help, I could have lost a significant amount.",
            tags: ["Protección", "Real Estate"]
        }
    ]
};