module.exports = {
    PreguntaPrincipalMantaVinilicas: [
        "🖼️ mantas vinílicas"
    ],
    PreguntasSecundariasMantaVinilicas: [
        "📏 tamaños mantas",  // Acortado a 24 caracteres
        "🎨 diseños mantas",  // Acortado a 24 caracteres
        "🔧 instalación mantas",       // Acortado a 24 caracteres
        "🖨️ impresión mantas"         // Acortado a 24 caracteres
    ],
    getAllMantasVinilicasKeywords() {
        return [...this.PreguntaPrincipalMantaVinilicas, ...this.PreguntasSecundariasMantaVinilicas];
    }
};
