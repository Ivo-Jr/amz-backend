const express = require('express');

const app = express();

app.get('/teste', (request, response) => {
    return response.json({ message: 'Hello Júnior!'})
});

app.listen(8000, () => {
    console.log('Server running! 🚀')
});