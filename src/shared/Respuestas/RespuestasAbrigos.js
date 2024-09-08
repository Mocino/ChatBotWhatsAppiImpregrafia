module.exports = {
    abrigosPrincipal: [
        "🧥 abrigos"
    ],
    abrigosSecond: [
        "colores de abrigos",
        "diseños de abrigos",
        "materiales de abrigos",
        "precios de abrigos"
    ],
    abrigosThird: [
        "abrigo negro",
        "abrigo gris",
        "abrigo marrón"
    ],
    getAllAbrigoKeywords() {
        return [...this.abrigosPrincipal, ...this.abrigosSecond, ...this.abrigosThird];
    }
};
