module.exports = {
    PreguntaPrincipalSublimacion: [
        "🖌️ sublimación" // Emoji de brocha con pintura para representar sublimación
    ],
    PreguntasSecundariasMSublimacion: [
        "👕⚪ playeras blancas", // Emoji de camiseta + círculo blanco para playeras blancas
        "👕⚫ playeras negras", // Emoji de camiseta + círculo negro para playeras negras u otro color
        "🏳️ banderas", // Emoji de bandera
        "🪧 estandartes", // Emoji de cartel para estandartes
        "🎽 bandas", // Emoji de camiseta deportiva para representar bandas
    ],
    getAllSublimacion() {
        return [
            ...this.PreguntaPrincipalSublimacion,
            ...this.PreguntasSecundariasMSublimacion,
        ];
    }
};
