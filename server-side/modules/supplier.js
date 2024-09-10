require('dotenv').config();
const { v4 } = require('uuid')
const { MongoOprations } = require('../services/mongo/mongo-operations')

const { MONGO_INVOICE_DB, MONGO_SUPPLIERS_COLLECTION } = process.env;

const mongoOprations = new MongoOprations(MONGO_INVOICE_DB)

const existSupplier = async (name) => {
    mongoOprations.Collection = MONGO_SUPPLIERS_COLLECTION;

    if (name == undefined || name == null) {
        throw new Error('name is not defined')
    }
    if (typeof (name) !== 'string') {
        throw new Error('name must be type of string')
    }
    try {
        const response = await mongoOprations.find({ filter: { name } })
        return response.length > 0;
    }
    catch (error) {
        throw error;
    }
}

const createNewSupplier = async (supplier) => {
    const client = await existSupplier(supplier.name);
    if (client) {
        const error = {
            message: `supplier '${supplier.name}' is not available`,
            type: 422
        }
        throw error
    }
    const id = v4();
    supplier.id = id;
    try {
        mongoOprations.Collection = MONGO_SUPPLIERS_COLLECTION;
        await mongoOprations.insertItem(supplier);
        return supplier;
    }
    catch (error) {
        throw error;
    }
}

const getAllSuppliers = async () => {    
    mongoOprations.Collection = MONGO_SUPPLIERS_COLLECTION;

    const suppliers = await mongoOprations.getAllItems();
    return suppliers;
}

module.exports = { existSupplier, createNewSupplier, getAllSuppliers }