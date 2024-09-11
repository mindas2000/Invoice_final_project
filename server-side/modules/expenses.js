require('dotenv').config();

const { MongoOprations } = require('../services/mongo/mongo-operations')

const { MONGO_INVOICE_DB, MONGO_EXPENSES_COLLECTION } = process.env;

const mongoOprations = new MongoOprations(MONGO_INVOICE_DB)

const savingExpenses = async (expenses) => {
    try {        
        mongoOprations.Collection = MONGO_EXPENSES_COLLECTION;
        await mongoOprations.insertItem(expenses);
        return expenses;
    }
    catch (error) {
        throw error;
    }
}

module.exports= { savingExpenses };