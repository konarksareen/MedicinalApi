const router = require("express").Router();
const DataRoutes = require("./data");
const OrderRoutes = require("./orders");

router.use("/data", DataRoutes);
router.use('/order',OrderRoutes)

module.exports = router;