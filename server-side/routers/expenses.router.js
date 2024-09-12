const express = require('express');
const { savingExpenses, getAllExpenses, getExpensesByMonth, getExpensesByYear,betweenDays } = require('../modules/expenses');
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

expensesRouter.get('/getAllExpenses', async (req, res) => {
    try {
        const expenses = await getAllExpenses();
        res.status(200).json(expenses);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
})

expensesRouter.get('/getExpensesByMonth/:month', async (req, res) => {
    try {
        const { month } = req.params;
        const data = await getExpensesByMonth(month);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

expensesRouter.get('/getExpensesByYear/:year', async (req, res) => {
    try {
        const { year } = req.params;
        const data = await getExpensesByYear(year);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})


expensesRouter.get('/between/:startDate/:endDate',async(req,res)=>{
    try {

        const { startDate, endDate } = req.params; 
        const response=await betweenDays(startDate,endDate);
        res.status(200).send(response);
      }
      catch (error) {
        if(error.type)
        {
          res.status(error.type).send(error.message);
        }
        else{
          res.status(500).send(error.message);
        }
      }
})
module.exports = expensesRouter;