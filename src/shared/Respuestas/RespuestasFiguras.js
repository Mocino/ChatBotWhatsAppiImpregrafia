module.exports = {
    PreguntaPrincipalFiguras: [
        "🪆 figuras de pvc"
    ],
    RespuestasFiguras: [
        "🎭 figuras con relieve", "Ver figuras otra vez",
        "🖼️ cuadros pvc"
    ],

    getAllFigurasKeywords() {
        return [...this.PreguntaPrincipalFiguras, 
                ...this.RespuestasFiguras
            ];
    }
};
