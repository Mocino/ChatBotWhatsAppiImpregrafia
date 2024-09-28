module.exports = { 
    PreguntaPrincipalPromocionales: [
        "🎁 promocionales" // Emoji de regalo para representar la categoría de Promocionales
    ],
    PreguntasSecundariasMPromocionales: [

        "🍽️ platos decorativos", // Emoji de plato para representar platos decorativos
                
        "🖱️ mouse pad", // Emoji de mouse para representar mouse pad
                
        "🧑‍🍳 gabachas", // Emoji de chef para representar gabachas
        
        "🛏️ almohadas", // Emoji de cama para representar almohadas
    ],
    RespuestasTasas:[
        "☕ tazas", "ver tazas otra vez", // Emoji de taza para representar las tazas
        "☕ taza común", // Emoji de taza para representar las tazas
        "🍺 tarros cerveceros", // Emoji de tarro de cerveza
        "🥤 pachones térmicos", // Emoji de bebida para representar pachones térmicos
        "🖤 tazas mágicas", // Emoji de corazón negro para representar tazas mágicas
        "🌈 tazas de color", // Emoji de arcoíris para representar tazas de color
        "🍶 tazas transparentes", // Emoji de botella de sake para representar tazas transparentes
    ],
    RespuestasPlaquetas:[
        "📜 plaquetas", "ver plaquetas de nuevo",
        "🔮 plaquetas de vidrio", // Emoji de bola de cristal para representar plaquetas de vidrio
        "🪵 plaquetas de madera", // Emoji de tronco de madera para representar plaquetas de MDF        
    ],
    RespuestasGorras:[
        "🧢 gorras", "ver gorras otra vez", // Emoji de gorra 
        "🧢🟠 gorras de poliéster", // Emoji de gorra para representar gorras de poliéster
        "🧢🟦 gorras de gabardina", // Otro emoji de gorra para representar gorras de gabardina
    ],
    getAllPromocionales() {
        return [
            ...this.PreguntaPrincipalPromocionales,
            ...this.PreguntasSecundariasMPromocionales,
            ...this.RespuestasTasas,
            ...this.RespuestasPlaquetas,         
            ...this.RespuestasGorras         
        ];
    }
};
