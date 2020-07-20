import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import transaction from './routes/transaction.js'

(async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Banco de dados conectado com sucesso`)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
})()

const app = express()

app.use(express.json());
app.use(cors())

app.use('/transaction', transaction)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Executando na porta: ${process.env.PORT || 3000}`)
})