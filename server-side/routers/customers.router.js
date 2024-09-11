const express = require('express');
const { createNewCustomer, existCustomer, getAllCustomers,getCustomerByName } = require('../modules/customers');
const customerRouter = express.Router();

customerRouter.post('/createCustomer', express.json(), async(req, res) => {
    try {
      const customer=req.body;
      const response=await createNewCustomer(customer);
      res.status(200).json(response);
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

customerRouter.get('/existCustomer/:name',async(req,res)=>{
    try {
        const {name}=req.params;
        const response=await existCustomer(name);
        res.status(200).json({exist:response});
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


customerRouter.get('/getCustomerByName/:name',async(req,res)=>{
  try {
      const {name}=req.params;
      const response=await getCustomerByName(name);
      res.status(200).json(response[0]);
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

customerRouter.get('/allCustomers',async(req,res)=>{
  try {
      const response=await getAllCustomers();
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
module.exports = customerRouter;