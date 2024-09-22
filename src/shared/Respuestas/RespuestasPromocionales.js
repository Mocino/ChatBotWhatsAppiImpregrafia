module.exports = { 
    PreguntaPrincipalPromocionales: [
        "🎁 promocionales" // Emoji de regalo para representar la categoría de Promocionales
    ],
    PreguntasSecundariasMPromocionales: [
        "☕ tazas", // Emoji de taza para representar las tazas

        "🍽️ platos decorativos", // Emoji de plato para representar platos decorativos
        
        "📜 plaquetas", // Emoji de bola de cristal para representar plaquetas de vidrio
        
        "🖱️ mouse pad", // Emoji de mouse para representar mouse pad
        
        "🧢 gorras", // Emoji de gorra para representar gorras de poliéster
        
        "🧑‍🍳 gabachas", // Emoji de chef para representar gabachas
        
        "🛏️ almohadas", // Emoji de cama para representar almohadas
    ],
    RespuestasTasas:[
        "☕ tazas", // Emoji de taza para representar las tazas
        "🍺 tarros cerveceros", // Emoji de tarro de cerveza
        "🥤 pachones térmicos", // Emoji de bebida para representar pachones térmicos
        "🖤 tazas mágicas", // Emoji de corazón negro para representar tazas mágicas
        "🌈 tazas de color", // Emoji de arcoíris para representar tazas de color
        "🍶 tazas transparentes", // Emoji de botella de sake para representar tazas transparentes
    ],
    RespuestasPlaquetas:[
        "📜 plaquetas", 
        "🔮 plaquetas de vidrio", // Emoji de bola de cristal para representar plaquetas de vidrio
        "🪵 plaquetas de madera", // Emoji de tronco de madera para representar plaquetas de MDF        
    ],
    RespuestasGorras:[
        "🧢 gorras", // Emoji de gorra 
        "🧢 gorras de poliéster", // Emoji de gorra para representar gorras de poliéster
        "🧢 gorras de gabardina", // Otro emoji de gorra para representar gorras de gabardina
    ],
    getAllPromocionales() {
        return [
            ...this.PreguntaPrincipalPromocionales,
            ...this.PreguntasSecundariasMPromocionales,
        ];
    }
};
