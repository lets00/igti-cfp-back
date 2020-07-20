import mongoose from 'mongoose'

const transactionalSchema = new mongoose.Schema({
    description: String,
    value: Number,
    category: String,
    year: String,
    month: Number,
    day: Number,
    yearMonth: String,
    yearMonthDay: String,
    type: String
})

const transactionModel = mongoose.model('transaction', transactionalSchema, 'transaction')

export default transactionModel