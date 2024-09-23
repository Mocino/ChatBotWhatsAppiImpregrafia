// Modelo para Figuras
function FigurasList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione una opción para obtener más información sobre nuestras figuras de PVC:'
            },
            'action': {
                'button': 'Ver opciones',
                'sections': [
                    {
                        'title': 'Figuras PVC',
                        'rows': [
                            {
                                'id': 'figuras_con_relieve',
                                'title': '🎭 Figuras con relieve'
                            },
                            {
                                'id': 'cuadros_pvc',
                                'title': '🖼️ Cuadros PVC'
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

// Modelo para mensajes de texto simples
function MessageText(text, number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'text',
        'text': {
            'body': text
        }
    });
    return data;
}

module.exports = {
    FigurasList,
    MessageText
};
