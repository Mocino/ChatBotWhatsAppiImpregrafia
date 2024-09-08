const https = require("https");

function SendMessageWhatsApp(data) {
    const options = {
        hostname: 'graph.facebook.com',
        path: '/v20.0/332145599993159/messages',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer EAAbPhSeXBVYBO5DeYwfZB0k8tRT5CzmjdB8FPSjx3EynIjRpJLGW6asDslreldOIdI3JV1MNUPkGPV3WGQh7CVTRGFKl0ZARDBiTPZCVApkb4xJRn9jPAaxZAF72aaegO89qyZCZB5T8ZAfADSfWWrO9ewc1ZA3tVvUbGJ7oZCJjm0y5yIfqABET99oecj6TL9fYWO0bpvgAFtCWbi99CxkoO7FpJxfMu4AufJI4ZD'
        }
    };

    const req = https.request(options, res => {
        let responseData = '';
        res.on('data', chunk => {
            responseData += chunk;
        });
        res.on('end', () => {
            console.log('Response:', responseData);
        });
    });

    req.on('error', error => {
        console.error('Error:', error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
}
