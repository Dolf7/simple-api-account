import express from "express";
import { getAllAccount, getSingleAccount, addAccount, updateAccount, deleteAccount } from "../controllers/accountController.js";

const router = express.Router();


router.get('/', getAllAccount);

router.get('/:id', getSingleAccount);

router.post('/', addAccount);

router.put('/:id', updateAccount);

router.delete('/:id', deleteAccount)

export default router;