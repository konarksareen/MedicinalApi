const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
      
        c_name: { type: String , default : "" },
        c_batch_no: { type: String , default : "" },
        d_expiry_date: { type: String , default : "" },
        n_balance_qty: { type: String , default : "" },
        c_packaging: { type: String , default : "" },
        c_unique_code: { type: String , default : "" },
        c_schemes: { type: String , default : "" },
        n_mrp: { type: String , default : "" },
        c_manufacturer: { type: String , default : "" },
        hsn_code: { type: String , default : "" },
      
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("data", DataSchema);
// c_name: 'ETODY 120MG TAB',
// c_batch_no: 'MDF 0030',
// d_expiry_date: '1/2/2022',
// n_balance_qty: '52',
// c_packaging: "10'S",
// c_unique_code: '661044',
// c_schemes: '',
// n_mrp: '208.73',
// c_manufacturer: 'ABBOTT HEALTH CARE-PAIN MANAGEMENT',
// hsn_code: '30049099'