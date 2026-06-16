const { createRazorpayInstance } = require('../config/razorpay.config')
const dotenv = require("dotenv");
dotenv.config();

const razorpayInstance = createRazorpayInstance();

exports.createOrder = async (req, res) => {
    const { courseId, amount } = req.body;
    const options = {
        amount: amount * 1000,
        currency: "INR",
        recepit: "receipt_order_1"
    }

    try {
        razorpayInstance.orders.create(options, (err, order) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Some thing went Wrong"
                })
            }
            return res.status(200).json(order)
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
        console.log(err)
    }

}
exports.veriFyPayment = async (req, res) => {
    const { order_id, payment_id, signature } = req.body;
    const secret = process.env.RAZORPAY_KEY_SECRET;
}