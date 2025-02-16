import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    shippingAddress: {
      firstname: {
        type: String,
        required: true,
      },

      lastname: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      zipcode: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    orderItems: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          // required: true,
        },
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        totalPrice: {
          type: Number,
          required: true,
        },
      },
    ],
    itemsPrice: {
      type: Number,
      default: 0,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    totalTax: {
      type: Number,
      default: 0,
    },
    shippingCharge: {
      type: Number,
      default: 0,
    },
    orderStatus: {
      type: String,
      default: "Pending",
    },
    paymentStatus: {
      type: String,
      default: "Pending",
    },
    orderId: {
      type: String,
    },
    paymentId: {
      type: String,
    },
    signatureId: {
      type: String,
    },
    paidAt: {
      type: Date,
      default: Date.now(),
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;

// const orderSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     shippingInfo: {
//       firstname: String,
//       lastname: String,
//       address: String,
//       city: String,
//       state: String,
//       country: String,
//       zipcode: String,
//       phone: String,
//     },
//     orderItems: [
//       {
//         productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
//         name: String,
//         quantity: Number,
//         price: Number,
//       },
//     ],
//     orderId: {
//       type: String,
//     },
//     paymentId: {
//       type: String,
//     },
//     signatureId: {
//       type: String,
//     },
//     paymentStatus: {
//       type: String,
//     },
//     // paymentInfo: {
//     //   orderId: String, // Razorpay Order ID
//     //   paymentId: String, // Razorpay Payment ID
//     //   status: String, // "pending", "paid", "failed"
//     // },
//     totalAmount: {
//       type: Number,
//     },
//     status: { type: String, default: "Processing" }, // Processing, Shipped, Delivered
//     createdAt: { type: Date, default: Date.now },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Order = mongoose.model("Order", orderSchema);
// export default Order;
