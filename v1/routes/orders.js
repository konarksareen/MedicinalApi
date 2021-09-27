const router = require("express").Router();
const Controller = require("../controllers");


router.post("/placeorder", Controller.Orders.placeorder);

module.exports = router;