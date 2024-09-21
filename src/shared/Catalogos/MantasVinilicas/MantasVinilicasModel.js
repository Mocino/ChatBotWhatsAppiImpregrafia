function MantasVinilicasList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione una opción para obtener más información sobre nuestras mantas vinílicas:'
            },
            'action': {
                'button': 'Ver opciones',
                'sections': [
                    {
                        'title': 'Mantas Vinílicas',  // Título acortado
                        'rows': [
                            {
                                'id': 'tamanos',
                                'title': '📏 tamaños mantas'  // Título acortado
                            },
                            {
                                'id': 'disenos',
                                'title': '🎨 Diseños mantas'  // Título acortado
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function DiseñoOpcionesBotones(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'button',
            'body': {
                'text': '¿Ya tiene diseño?'
            },
            'action': {
                'buttons': [
                    {
                        'type': 'reply',
                        'reply': {
                            'id': 'si_tengo_disenio',
                            'title': '✅ sí, tengo diseño'
                        }
                    },
                    {
                        'type': 'reply',
                        'reply': {
                            'id': 'no_no_tengo_disenio',
                            'title': '❌ no, tengo diseño'
                        }
                    }
                ]
            }
        }
    });
    return data;
}
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
    MantasVinilicasList,
    DiseñoOpcionesBotones,
    MessageText
};
