module.exports = {
    PreguntaPrincipalFiguras: [
        "🪆 figuras de pvc"
    ],
    RespuestasFiguras: [
        "🎭 figuras con relieve", 
        "🖼️ cuadros pvc"
    ],

    getAllFigurasKeywords() {
        return [...this.PreguntaPrincipalFiguras, 
                ...this.RespuestasFiguras
            ];
    }
};
