module.exports = {
    camisasPrincipal: [
        "👕 camisas"
    ],
    camisaSecond: [
        "colores de camisas",
        "diseños de camisas",
        "materiales de camisas",
        "precios de camisas"
    ],
    getAllCamisaKeywords() {
        return [...this.camisasPrincipal, ...this.camisaSecond];
    }
};
