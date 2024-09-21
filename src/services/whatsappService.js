const https = require("https");

function SendMessageWhatsApp(data) {
    const options = {
        hostname: 'graph.facebook.com',
        path: '/v20.0/413683818499047/messages',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer EAAHYSstZAKtoBO3dqfyXKg7rTsTfQFYVyn1O0y4FJw5KwI3qQXyYgNZB2hOC52ogbBBn9kIGvg0FtklqEGHUbjKeLWjzLKeCBtePBiogmZBhuDfp2AlL8uVja4HTQfizpzsJvQ5qy4obpK6y3zJPsP9dCBZCX5NSpqB5RnIQeQemdM5FjKPVZAuy7KkyfYZBGbZAkk3FsKSU1NhF07FZBeczeOLEjbiCYFRDQi0ZD'
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
