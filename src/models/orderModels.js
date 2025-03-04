const mongoose = require("mongoose");

// Define the order schema
const orderSchema = new mongoose.Schema(
  {
    // Unique identifier for the order
    serviceType: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    location: {
      type: String,
      required: true,
    },
    m2: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ['pending', 'in-progress', 'completed', 'canceled'],  // Enum for order status
      default: 'pending',
    },
    supervisorName: {
      type: String,
      required: true,
    },
    price: {
      type: String,  // Price stored as a string with currency symbol
      required: true,
    },
  },
  {
    timestamps: true,  // Automatically add createdAt and updatedAt timestamps
  }
);

// Create the model from the schema
const Order = mongoose.model("Order", orderSchema);

// Export the model to be used in other parts of the app
module.exports = Order;
