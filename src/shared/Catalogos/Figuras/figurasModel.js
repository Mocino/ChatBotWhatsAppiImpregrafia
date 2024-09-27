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

function MessageButtons(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'button',
            'body': {
                'text': 'Seleccione una opción:'
            },
            'action': {
                'buttons': [
                    {
                        'type': 'reply',
                        'reply': {
                            'title': 'Sí, comprar',
                            'id': 'comprar' // Este campo 'id' es el correcto para manejar la respuesta
                        }
                    },
                    {
                        'type': 'reply',
                        'reply': {
                            'title': 'Volver al menu',
                            'id': 'no_comprar'
                        }
                    },
                    {
                        'type': 'reply',
                        'reply': {
                            'title': 'Ver medidas otra vez', // Título más corto
                            'id': 'ver_medidas'
                        }
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
    MessageText,
    MessageButtons
};
