function MessageQuestion(question, number, options) {
    const rows = options.map((option, index) => ({
        id: `option_${index + 1}`,
        title: option
    }));

    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': question
            },
            'action': {
                'button': 'Seleccionar',
                'sections': [
                    {
                        'title': 'Opciones',
                        'rows': rows
                    }
                ]
            }
        }
    });
    return data;
}

function AbrigosPersonalizadosList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione una opción para continuar con su abrigo personalizados:'
            },
            'action': {
                'button': 'Ver opciones',
                'sections': [
                    {
                        'title': 'Abrigos personalizados',
                        'rows': [
                            {
                                'id': 'precio',
                                'title': 'precio de abrigos'
                            },
                            {
                                'id': 'formas_pago',
                                'title': 'formas de pagos'
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function FormasDePagoList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Elige una forma de pago para tu abrigo personalizados:'
            },
            'action': {
                'button': 'Seleccionar pago',
                'sections': [
                    {
                        'title': 'Formas de pagos',
                        'rows': [
                            {
                                'id': 'paypal',
                                'title': 'PayPal'
                            },
                            {
                                'id': 'banco',
                                'title': 'Banco'
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}


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

function AbrigosColoresList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione un color específico para obtener más información:'
            },
            'action': {
                'button': 'Ver colores',
                'sections': [
                    {
                        'title': 'Colores de Abrigos',
                        'rows': [
                            {
                                'id': 'negro',
                                'title': 'abrigo negro'
                            },
                            {
                                'id': 'gris',
                                'title': 'abrigo gris'
                            },
                            {
                                'id': 'marrón',
                                'title': 'abrigo marrón'
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}


function AbrigosList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione una opción para obtener más información sobre nuestros abrigos:'
            },
            'action': {
                'button': 'Ver opciones',
                'sections': [
                    {
                        'title': 'Información de Abrigos',
                        'rows': [
                            {
                                'id': 'colores',
                                'title': 'colores de abrigos'
                            },
                            {
                                'id': 'disenos',
                                'title': 'diseños de abrigos'
                            },
                            {
                                'id': 'materiales',
                                'title': 'materiales de abrigos'
                            },
                            {
                                'id': 'precios',
                                'title': 'precios de abrigos'
                            },
                            {
                                'id': 'personalizado',
                                'title': 'abrigo personalizados'
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
    AbrigosList,
    AbrigosColoresList,
    AbrigosPersonalizadosList,
    FormasDePagoList,
    MessageQuestion
};
