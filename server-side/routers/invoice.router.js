const express = require('express');
const { addingInvoice, getAll ,betweenDays} = require('../modules/invoice');
const invoiceRouter = express.Router();

invoiceRouter.post('/addInvoice', express.json(), async (req, res) => {
    try {
        const invoice = req.body;
        console.log({ invoice });
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

invoiceRouter.get('/between/:startDate/:endDate',async(req,res)=>{
    try {

        const { startDate, endDate } = req.params; 
        console.log(startDate, endDate);
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

module.exports = invoiceRouter;