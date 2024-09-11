require('dotenv').config();

const { MongoOprations } = require('../services/mongo/mongo-operations')

const { MONGO_INVOICE_DB, MONGO_INVOICES_COLLECTION } = process.env;

const mongoOprations = new MongoOprations(MONGO_INVOICE_DB)

const addingInvoice = async (invoice) => {
    try {
        mongoOprations.Collection = MONGO_INVOICES_COLLECTION;
        await mongoOprations.insertItem(invoice);
        return invoice;
    }
    catch (error) {
        throw error;
    }
}

const getAll = async () => {
    mongoOprations.Collection = MONGO_INVOICES_COLLECTION;

    try {
        const response = await mongoOprations.getAllItems();
        return response;
    }
    catch (error) {
        throw error;
    }
}


const betweenDays = async (startDate, endDate) => {
    mongoOprations.Collection = MONGO_INVOICES_COLLECTION;
    const filter = {
        'date': {
            $gte: startDate,
            $lte: endDate
        }
    };

    try {
        const response = await mongoOprations.find({ filter });
        return response;
    }
    catch (error) {
        throw error;
    }
}

const byCustName = async (cn) => {
    mongoOprations.Collection = MONGO_INVOICES_COLLECTION;

    try {
        const response = await mongoOprations.getAllItems();
        return response.filter(r => r.customer?.name === cn);
    }
    catch (error) {
        throw error;
    }

}


module.exports = { addingInvoice, getAll, betweenDays, byCustName };