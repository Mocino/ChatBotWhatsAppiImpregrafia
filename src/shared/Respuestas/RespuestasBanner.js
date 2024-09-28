module.exports = {
    PreguntaPrincipalBanner: [
        "🖼️ banners publicitarios"
    ],
    RespuestasBanner: [
        "📏 roll up 2x80 cm", "Ver banners otra vez",
        "🕸️ banner 1.80x80 cm", 
        "🕷️ minibanner 22x44 cm", 
        "📐 mini roll up", 
        "💧 banderola tipo gota" 
    ],

    getAllBannerKeywords() {
        return [...this.PreguntaPrincipalBanner, 
                ...this.RespuestasBanner
            ];
    }
};
