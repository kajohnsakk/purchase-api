import express from "express";
const router = express.Router();

import { validationHelper } from "../../../helpers";
import { purchaseController } from "../../../controllers";
import validation from "./validation";

const { validate } = validationHelper;

router.get("/", purchaseController.getPurchaseTransactions);

router.post(
  "/",
  validate(validation.purchase()),
  purchaseController.insertPurchaseTransaction
);

export default router;
