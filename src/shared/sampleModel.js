function SampleText(textResponse, number){
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


function SampleImage(number){
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'to': number,
        'type': 'image',
        'image': {
            'link': 'https://upload.wikimedia.org/wikipedia/commons/d/d7/ScrewAttack_blue_bolt.png'
        },
    });
    return data;
}

function SampleAudio(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'to': number,
        'type': 'audio',
        'audio': {
            'link': 'https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3'
        },
    });
    return data;
}


function SampleVideo(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'to': number,
        'type': 'video',
        'video': {
            'link': 'https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4'
        },
    });
    return data;
}

function SampleDocument(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'to': number,
        'type': 'document',
        'document': {
            'link': 'https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf'
        },
    });
    return data;
}


function SampleButtons(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'button',
            'body': {
                'text': '¿Deseas continuar?'
            },
            'action': {
                'buttons': [
                    {
                        'type': 'reply',
                        'reply': {
                            'id': 'yes_button',
                            'title': 'Sí'
                        }
                    },
                    {
                        'type': 'reply',
                        'reply': {
                            'id': 'no_button',
                            'title': 'No'
                        }
                    }
                ]
            }
        }
    });
    return data;
}


function SampleList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Selecciona una opción:'
            },
            'action': {
                'button': 'Elige una opción',
                'sections': [
                    {
                        'title': 'Opciones',
                        'rows': [
                            {
                                'id': '001',
                                'title': '👕 Camisas'
                            },
                            {
                                'id': '002',
                                'title': '👖 Pantalones'
                            },
                            {
                                'id': '003',
                                'title': '👟 Calzado'
                            },
                            {
                                'id': '004',
                                'title': '🧥 Abrigos'
                            },
                            {
                                'id': '005',
                                'title': '🧢 Gorros'
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function SampleLocation(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'location',
        'location': {
            'latitude': 15.0841831,  // Latitud del lugar
            'longitude': -90.4925151, // Longitud del lugar
            'name': 'Impregrafia',    // Nombre del lugar
            'address': 'Rabinal, Guatemala' // Dirección del lugar
        }
    });
    return data;
}


module.exports = {
    SampleText,
    SampleImage,
    SampleAudio,
    SampleVideo,
    SampleDocument,
    SampleButtons,
    SampleList,
    SampleLocation
};
