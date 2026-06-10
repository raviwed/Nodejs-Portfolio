exports.createOrader=async(req,res)=>{
   const {courseId,amount}=req.body;
const options={
    amount:amount*1000,
    currency:"INR",
    recepit:"receipt_order_1"
}
}