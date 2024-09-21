module.exports = {
    PreguntaPrincipalMantaVinilicas: [
        "🖼️ mantas vinílicas"
    ],
    PreguntasSecundariasMantaVinilicas: [
        //// "📏 tamaños mantas",  
        "🎨 diseños mantas",  
    ],
    RespuestaTamaniosMantaVinilica:[
        "📏 tamaños mantas", "ver medidas otra vez",
        "sí, instalarlo",
        "no, solo impresión",
        "100x200 cm",
        "150x300 cm",
        "200x400 cm",
        "300x600 cm"
    ],
    RespuestaDiseniosMantaVinilica:[
        "✅ sí, tengo diseño",
        "❌ no, tengo diseño"
    ],
    getAllMantasVinilicasKeywords() {
        return [...this.PreguntaPrincipalMantaVinilicas, 
                ...this.PreguntasSecundariasMantaVinilicas, 
                ...this.RespuestaTamaniosMantaVinilica,
                ...this.RespuestaDiseniosMantaVinilica
            ];
    }
};
