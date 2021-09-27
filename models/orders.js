const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
      
        items: [
            {
              c_unique_code: { type: String },
              quantity: { type: Number },
              c_name: { type: String }
            }
          ], 
      
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("order", OrderSchema);
