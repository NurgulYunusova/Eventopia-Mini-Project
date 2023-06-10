const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  code: { type: String, required: true },
  discountPercentage: { type: Number, required: true },
  maxUse: { type: Number, required: true },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
