module.exports = {
    PreguntaPrincipalUniformes: [
        "🏃‍♂️ uniformes deportivos"
    ],
    PreguntasSecundariasMUniformes: [
        "👕 manga larga",
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
