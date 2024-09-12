const express = require('express');
const { addingInvoice, getAll, betweenDays,getInvoicesByMonth, getInvoicesByYear,byCustName } = require('../modules/invoice');
const invoiceRouter = express.Router();

invoiceRouter.post('/addInvoice', express.json(), async (req, res) => {
    try {
        const invoice = req.body;
        const response = await addingInvoice(invoice);
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

invoiceRouter.get('/getAll', async (req, res) => {
    try {

        const response = await getAll();
        res.status(200).send(response);
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

invoiceRouter.get('/between/:startDate/:endDate', async (req, res) => {
    try {

        const { startDate, endDate } = req.params;
        const response = await betweenDays(startDate, endDate);
        res.status(200).send(response);
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
invoiceRouter.get('/byCustName/:name', async (req, res) => {
    try {

        const { name } = req.params;
        const response = await byCustName(name);
        res.status(200).send(response);
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
invoiceRouter.get('/getInvoicesByMonth/:month', async (req, res) => {
    try {
        const { month } = req.params; 
        const response = await getInvoicesByMonth(month);
        res.status(200).send(response);
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

invoiceRouter.get('/getInvoicesByYear/:year', async (req, res) => {
    try{
        const { year } = req.params;
        const response = await getInvoicesByYear(year);
        res.status(200).send(response); 
    }
    catch(error){
        if(error.type){
            res.status(error.type).send(error.message);
        }
        else{
            res.status(500).send(error.message);
        }
    }
})
module.exports = invoiceRouter;