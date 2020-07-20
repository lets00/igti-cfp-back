import transactionModel from '../models/transactionModel.js'

const findByMonth = async (req, res) => {
    const { period } = req.query
    if (!period) {
        res.status(403).json({ 'error': 'é necessário informar o parâmetro "period", cujo valor deve está o formato yyyy-mm' })
    }
    else {
        try {
            const data = await transactionModel.find({ "yearMonth": period })
            const sortedData = data.sort((a, b) => {
                return (a.month + a.day) - (b.month + b.day)
            })
            res.json(sortedData)
        } catch (error) {
            console.log(`Error when try get transactions by period: ${error}`)
            res.status(500).json({ 'err': 'internal error' })
        }
    }
}

const create = async (req, res) => {
    const { description, value, category,
        year, month, day,
        yearMonth, yearMonthDay, type } = req.body

    if (description && value && category && year && month && day && yearMonth && yearMonthDay && type) {
        try {
            const transaction = { description, value, category, year, month, day, yearMonth, yearMonthDay, type }
            await transactionModel.create(transaction)
            res.json({ 'message': 'transaction inserted' })
        } catch (error) {
            console.log(`Error while create a post: ${error}`)
            res.status(500).json({ 'message': 'transaction error' })
        }
    } else {
        res.status(400).json({ 'error': 'Algum parâmetro falta ser passado' })
    }
}

const update = async (req, res) => {
    if (!req.body) {
        res.status(400).json({ 'error': 'need body to update object' })
    }
    const id = req.params.id;
    try {
        const data = await transactionModel.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.json(data)
    } catch (error) {
        console.log(`Error while put object: ${error}`)
        res.status(500).json({ 'message': 'transaction error' })
    }
}

const removeById = async (req, res) => {
    const { id } = req.params
    try {
        const data = await transactionModel.findByIdAndDelete({ _id: id })
        if (data) {
            res.json({ 'message': `${id} removed` })
        } else {
            res.status(404).json({ 'message': `${id} not found` })
        }
    } catch (error) {
        console.log(`Error while delete object ${error}`)
        res.status(500).json({ 'error': 'internal error' })
    }
}

export {
    findByMonth,
    create,
    update,
    removeById
}