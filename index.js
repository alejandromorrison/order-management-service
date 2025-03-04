const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
const port = 5001;
const app = express();

app.use(bodyParser.json());

const ordersDetails = {};

app.post('/order-service/:id', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { serviceType, 
        projectName, 
        phoneNumber, 
        email, 
        location, 
        m2, 
        date, 
        orderStatus, 
        supervisorName, 
        price } = req.body;


        const order = {
            id,
            serviceType,
            projectName, 
            phoneNumber, 
            email, 
            location, 
            m2, 
            date, 
            orderStatus, 
            supervisorName, 
            price
        };

        ordersDetails[id] = order;

        res.status(201).send(order);

});

// route so i can list all the order services
app.get('/order-service/', (req, res) => {
    res.json(Object.values(ordersDetails));
});

app.get('/order-service/:id', (req, res) => {
    const order = ordersDetails[req.params.id];
    if (!order) {
        return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
});

// UPDATE an order by ID
app.put("/order-service/:id", (req, res) => {
    const { id } = req.params;

    if (!ordersDetails[id]) {
        return res.status(404).json({ error: "Order not found" });
    }

    const updatedData = req.body;
    ordersDetails[id] = { ...ordersDetails[id], ...updatedData };

    res.json(ordersDetails[id]);
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});