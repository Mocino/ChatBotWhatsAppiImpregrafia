module.exports = { 
    PreguntaPrincipalRotulos: [
        "💡 rótulos con luz" // Emoji de bombilla para representar rótulos con luz
    ],
    PreguntasSecundariasMRotulos: [
        "🔠 letras tipo block", "ver medidas otra vez", // Emoji de letras para representar letras tipo block
        "🔰 logos", // Emoji de escudo para representar logos
    ],
    getAllRotulos() {
        return [
            ...this.PreguntaPrincipalRotulos,
            ...this.PreguntasSecundariasMRotulos,
        ];
    }
};
