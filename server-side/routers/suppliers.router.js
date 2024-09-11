const express = require('express');
const { createNewSupplier, existSupplier, getAllSuppliers } = require('../modules/supplier')
const suppliersRouter = express.Router();

suppliersRouter.post('/createSupplier', express.json(), async (req, res) => {
    try {
        const supplier = req.body;
        const response = await createNewSupplier(supplier);
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

suppliersRouter.get('/existSupplier/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const response = await existSupplier(name);
        res.status(200).json({ exist: response });
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

suppliersRouter.get('/getAllSuppliers', async (req, res) => {
    try {
        const suppliers = await getAllSuppliers();
        res.status(200).send(suppliers);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
})

module.exports = suppliersRouter;