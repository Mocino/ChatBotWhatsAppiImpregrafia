function MessageText(textResponse, number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'to': number,
        'text': {
            'body': textResponse
        },
        'type': 'text'
    });
    return data;
}

function TipoPlaquetasList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione que desea saber de nuestra variedad de plaquetas:'
            },
            'action': {
                'button': 'Tipo de Plaquetas',
                'sections': [
                    {
                        'title': 'Tipo de Plaquetas',
                        'rows': [
                            {
                                'id': 'plaquetasVidrio',
                                'title': '🔮 Plaquetas de Vidrio'
                            },
                            {
                                'id': 'plaquetasMadera',
                                'title': '🪵 plaquetas de madera'
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

module.exports = {
    MessageText,
    TipoPlaquetasList
};
