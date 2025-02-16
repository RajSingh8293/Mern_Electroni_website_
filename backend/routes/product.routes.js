import express, { Router } from "express";
import {
  createManyProducts,
  createProduct,
  deleteProduct,
  getAllProducts,
  singleProduct,
  updateProduct,
} from "../controllers/product.controllers.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/products/create", isAuthenticated, createProduct);
router.get("/products/all", getAllProducts);
router.get("/products/:id", singleProduct);
router.delete("/products/delete/:id", deleteProduct);
router.put("/products/update/:id", updateProduct);
router.post("/products/create-many", isAuthenticated, createManyProducts);

export default router;
