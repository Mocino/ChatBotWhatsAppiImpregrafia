module.exports = {
    PreguntaPrincipalUniformes: [
        "🏃‍♂️ uniformes deportivos"
    ],
    PreguntasSecundariasMUniformes: [
        "👕 manga larga", "ver medidas otra vez",
        "👕 manga corta",
        "🧑‍🤝‍🧑 adultos",
        "👶 niños",
        "🩳 pantaloneta",
        "👕 camisola"
    ],
    getAllUniformes() {
        return [
            ...this.PreguntaPrincipalUniformes,
            ...this.PreguntasSecundariasMUniformes,
        ];
    }
};
