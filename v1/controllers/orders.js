const Model = require("../../models");

module.exports.placeorder  = async (req, res, next) => {
    try {
      const order = await Model.order.create({
        items:req.body.orders
      })
        return res.success("ORDER PLACED",order);
    } catch (error) {
      next(error);
    }
  }