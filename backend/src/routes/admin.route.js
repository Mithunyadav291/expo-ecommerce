import express from "express";
import {
  createProduct,
  getAllProduct,
  updateProduct,
} from "../controllers/admin.controller.js";
import { adminOnly, protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();

// optimization DRY
router.use(protectRoute, adminOnly);

router.post("/products", upload.array("images", 3), createProduct);
router.get("/products", getAllProduct);
router.put("/products/:id", upload.array("images", 3), updateProduct);

export default router;
