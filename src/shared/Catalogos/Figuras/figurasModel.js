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

function SampleImage(number) {
    const imageUrls = [
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdRTbhLQXhUtc_ExOw0dPES5BUB3oycysWZysTJJEB5aXC1NBvQKnFDA11tViaMwp3nn5SbbLRsptz1WgnqjNPLZ8rZ5zncAV-FMkAUO9fUpZXgOn_HZ1ratOiZPyg3dh2DKcZzfFeHII6dT6hyBn_JMc7QPrfHmGdBQIX8eZrVEZJ0glJEXuXAsKPu7nO/s720/441966223_1784446915376251_6271895763099095758_n.jpg',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCvhiWa02WSCOcW26uTbQu_MA0By_R4_sSuwZc-E2mwKa4Bi-FwbF-UV0jFt2zfI0Y43IXaPtgqYGwwOaVTG1npWw54w9s9w8ERhbzmZiHmnqBwfsqyohFXS6P1Kh0NmJgdf_Xohg0Z0svxKYXeAtx0MvCv1DBpXIsb9P4vX4mXPXV1cZzpBV4C85TMtQ3/s1350/461036583_928877155926571_6874026143850382718_n.jpg',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5irIkrfGzCCuC_eZ667RxhVzCtA4kN9GfAuffPYKL89YDFJrGgng0udhKLg2ZFEmiSEQdlzJx36n53sPq4ChAb-plxTZw0pdyxlFDgQ-drePahZ5fMnKEXkU5CeyUA47fnYUJMj2UzV9Uq-1lceA0DevblSbgmzWpmKZcod11vCDmaqf7n1Mo6O0nb-k2/s2048/461081127_928870432593910_178449792357539196_n.jpg'
    ];

    return imageUrls.map(url => JSON.stringify({
        'messaging_product': 'whatsapp',
        'to': number,
        'type': 'image',
        'image': {
            'link': url
        }
    }));
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
                            'title': 'Ver figuras otra vez', // Título más corto
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
    SampleImage,
    MessageButtons
};
