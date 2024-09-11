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

const getAllExpenses = async () => {
    try {
        mongoOprations.Collection = MONGO_EXPENSES_COLLECTION;
        const expenses = await mongoOprations.getAllItems();
        return expenses;
    }
    catch (error) {
        throw error;
    }
}

const getExpensesByMonth = async (month) => {
    const response = await getAllExpenses();
    const data = response.filter(expense => {
        const date = new Date(expense.date);
        const stringMonth = String(date.getMonth() + 1);
        return stringMonth === month;
    })
    return data;
}

const getExpensesByYear = async (year) => {
    const response = await getAllExpenses();
    const data = response.filter(expense => {
        const date = new Date(expense.date);
        const stringYear = String(date.getFullYear());
        return stringYear === year;
    })
    return data;
}


const betweenDays = async(startDate,endDate) => {
    mongoOprations.Collection = MONGO_EXPENSES_COLLECTION;
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
module.exports = { savingExpenses, getAllExpenses, getExpensesByMonth, getExpensesByYear,betweenDays };