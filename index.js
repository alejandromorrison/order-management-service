const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
const port = 5000;
const app = express();
app.use(bodyParser);

const ordersDetails = {};

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});