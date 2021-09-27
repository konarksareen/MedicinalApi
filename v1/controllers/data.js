const Model = require("../../models");
var fs = require("fs");
var csv = require("csv-parser");

module.exports.uploadCSV = async (req, res, next) => {
  try {
    fs.createReadStream(req.file.path)
      .pipe(csv({}))
      .on("data", async (data) => {
        const medicine = await Model.data
        .findOne({
          c_unique_code: req.body.c_unique_code,
        })
        .lean();
        if(medicine == null) {
          const doc = await Model.data.create(data);
        await doc.save();
       
        }
        
        
      })
      .on("end", () => {
        fs.unlinkSync(req.file.path);
        return res.success("DATA UPLOADED SUCCESSFULLY");
      });
  } catch (error) {
    next(error);
  }
};

module.exports.getMedicineDetails = async (req, res, next) => {
  try {
    const medicine = await Model.data
      .findOne({
        c_unique_code: req.body.c_unique_code,
      })
      .lean();
    return res.success("DATA FETCHED", medicine);
  } catch (error) {
    next(error);
  }
};

module.exports.searchMedicine = async (req, res, next) => {
  try {
    const medicines = await Model.data
      .find({
        c_name: { $regex: req.body.name, $options: "i" },
      })
      .lean();
    return res.success("DATA FETCHED", medicines.map((medicine)=>medicine.c_name));
  } catch (error) {
    next(error);
  }
};
