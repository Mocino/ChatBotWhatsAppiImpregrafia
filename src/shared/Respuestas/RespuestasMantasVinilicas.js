module.exports = {
    PreguntaPrincipalMantaVinilicas: [
        "🖼️ mantas vinílicas"
    ],
    PreguntasSecundariasMantaVinilicas: [
        //// "📏 tamaños mantas",  
        "🎨 diseños mantas",  
        "🔧 instalación mantas",       
        "🖨️ impresión mantas"         
    ],
    RespuestaTamaniosMantaVinilica:[
        "📏 tamaños mantas", "ver medidas otra vez",
        "100x200 cm",
        "150x300 cm",
        "200x400 cm",
        "300x600 cm"
    ],
    getAllMantasVinilicasKeywords() {
        return [...this.PreguntaPrincipalMantaVinilicas, 
                ...this.PreguntasSecundariasMantaVinilicas, 
                ...this.RespuestaTamaniosMantaVinilica];
    }
};
