const express = require('express');
const ip = require('ip');

const app = express();
const port = 8080;

app.get('/', (req, res) => res.json({ip: ip.address()}));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));