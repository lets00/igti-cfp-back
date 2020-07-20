import express from 'express'
import { findByMonth, create, update, removeById } from '../controllers/transactionController.js'
import transactionModel from '../models/transactionModel.js';

const router = express.Router();

router.get('/', findByMonth)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', removeById)

export default router