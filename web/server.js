const express = require('express');
const app = express();

const port = 3000;
const base = `${__dirname}/public`;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(`${base}/device-list.html`);
});

app.get('/register-device', (req, res) => {
    res.sendFile(`${base}/register-device.html`);
});

app.get('/send-command', (req, res) => {
    res.sendFile(`${base}/send-command.html`);
});

app.get('/about', (req, res) => {
    res.sendFile(`${base}/about-me.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${base}/404.html`);
});