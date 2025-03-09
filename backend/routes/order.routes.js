import express, { Router } from "express";
import {
  createOrder,
  // deleteAllOrders,
  deleteOrderById,
  getAllOrders,
  getMyOrders,
  getOrderById,
  getRazorpayKey,
  orderAndPay,
  updateOrderStatus,
  verifyPayment,
} from "../controllers/order.controllers.js";
import { isAdmin, isAuthenticated } from "../middleware/auth.middleware.js";

const router = Router();
router.get("/orders/key", isAuthenticated, getRazorpayKey);
router.post("/orders/pay", orderAndPay); // razorpay
router.post("/orders/payment-verify", isAuthenticated, verifyPayment); // razorpay
router.post("/orders/create", isAuthenticated, createOrder);
router.get("/orders/myorders", isAuthenticated, getMyOrders);

router.get("/orders/:id", isAuthenticated, getOrderById);

// admins
router.get("/admin/orders/all", isAuthenticated, getAllOrders);
router.delete("/orders/delete/:id", isAuthenticated, deleteOrderById);
router.put("/orders/update-status/:id", isAuthenticated, updateOrderStatus);

export default router;
