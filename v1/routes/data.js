const router = require("express").Router();
const Controller = require("../controllers");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


router.post("/uploadCSV",upload.single('dataFile'), Controller.Data.uploadCSV);
router.post("/getMedicineDetails", Controller.Data.getMedicineDetails);
router.post("/searchMedicine", Controller.Data.searchMedicine);

module.exports = router;