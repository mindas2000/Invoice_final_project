const express = require('express');
const cors = require('cors');
const app = express();
const customerRouter = require('./routers/customers.router');
const suppliersRouter = require('./routers/suppliers.router');
const expensesRouter = require('./routers/expenses.router');

app.get('/', (req, res) => {
    res.status(200).send('hello to our server');
});

app.use(cors({
    origin: 'null'
}));

app.use('/customrs', customerRouter);
app.use('/suppliers', suppliersRouter)
app.use('/expenses', expensesRouter);

app.get('/*', (req, res) => {
    res.status(400).send('error');
});

module.exports = app;