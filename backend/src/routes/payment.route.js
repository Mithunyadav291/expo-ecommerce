import express from "express";
import {
  createPaymentIntent,
  handleWebhook,
} from "../controllers/payment.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create-intent", protectRoute, createPaymentIntent);

//No auth needed - Stripe validates via signature
router.post("/webhook", handleWebhook);
export default router;
