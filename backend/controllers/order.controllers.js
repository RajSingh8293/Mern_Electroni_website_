import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import crypto from "crypto";

dotenv.config();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

export const getRazorpayKey = async (req, res) => {
  return res.json({
    key: process.env.RAZORPAY_KEY_ID,
  });
};
export const orderAndPay = async (req, res) => {
  try {
    const {
      amount,
      // userId,
      // shippingAddress,
      // orderItems,
      // itemsPrice,
      // totalTax,
      // shippingCharge,
    } = req.body;
    const options = {
      amount: Number(amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);

    console.log("order :", order);
    // const orderSave = await Order.create({
    //   userId,
    //   shippingAddress,
    //   orderItems,
    //   itemsPrice,
    //   totalAmount: amount,
    //   totalTax,
    //   shippingCharge,
    // });

    return res.json({
      success: true,
      order,
      // orderSave,
    });
  } catch (error) {
    returnres.json({
      message: " something wrong with payment",
    });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      // userId,
      shippingAddress,
      orderItems,
      itemsPrice,
      totalAmount,
      totalTax,
      shippingCharge,
    } = req.body;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    // console.log("generatedSignature :", generatedSignature);
    // console.log("razorpay_signature :", razorpay_signature);

    if (generatedSignature === razorpay_signature) {
      const order = await Order.create({
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        signatureId: razorpay_signature,
        userId: req.user?._id,
        shippingAddress,
        orderItems,
        itemsPrice,
        totalAmount,
        totalTax,
        shippingCharge,
        orderStatus: "Confirmed",
        paymentStatus: "paid",
      });
      return res.json({
        success: true,
        message: "Payment successfully",
        order,
      });
    }

    return res.json({
      success: false,
      message: "Payment failed",
    });
  } catch (error) {
    return res.json({
      message: "somethng wrong with veryfied payment",
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    if (!orders) {
      res.status(401).json({
        success: false,
        message: "Order Not Found!",
      });
    }
    res.status(201).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with creating product",
    });
  }
};

export const createOrder = async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      totalAmount,
      totalTax,
      shippingCharge,
    } = req.body;

    const order = await Order({
      userId: req.user?._id,
      orderItems,
      shippingAddress,
      totalAmount,
      totalTax,
      shippingCharge,
    });

    await order.save();
    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with creating product",
    });
  }
};
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user?._id });
    if (!orders) {
      res.status(401).json({
        success: false,
        message: "Order Not Found!",
      });
    }
    res.status(201).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with creating product",
    });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(401).json({
        success: false,
        message: "Order Not Found!",
      });
    }
    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with creating product",
    });
  }
};
export const deleteOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(401).json({
        success: false,
        message: "Order Not Found!",
      });
    }

    await Order.findByIdAndDelete(order);
    res.status(201).json({
      success: true,
      message: "Order deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with creating product",
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    let order = await Order.findById(req.params.id);
    if (!order) {
      res.status(401).json({
        success: false,
        message: "Order Not Found!",
      });
    }

    order.status = status;
    await order.save();
    res.status(201).json({
      success: true,
      message: "Order status updated successfully!",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something wrong with updating status",
    });
  }
};
