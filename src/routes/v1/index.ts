import express from "express";
const router = express.Router();

import purchaseRoutes from "./purchase/purchase.router";

router.use("/purchases", purchaseRoutes);

export default router;
