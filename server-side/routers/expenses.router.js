const express = require('express');
const {savingExpenses} = require('../modules/expenses');
const expensesRouter = express.Router();

expensesRouter.post('/saveExpenses', express.json(), async (req, res) => {
    try {
        const expenses = req.body;
        const response = await savingExpenses(expenses);
        res.status(200).json(response);
    }
    catch (error) {
        if (error.type) {
            res.status(error.type).send(error.message);
        }
        else {
            res.status(500).send(error.message);
        }
    }
})

module.exports = expensesRouter;