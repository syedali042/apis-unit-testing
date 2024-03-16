const {ProductModel} = require('../models');

module.exports = class ProductController {
  static async getProducts(req, res, next) {
    try {
      const products = await ProductModel.find();

      if (!products)
        return res.status(400).send({success: false, products: null});

      return res.status(200).send({success: true, products});
    } catch (error) {
      return res.status(400).send({success: false, error});
    }
  }

  static async createProduct(req, res, next) {
    try {
      const product = await ProductModel.create(req.body);

      if (!product)
        return res.status(400).send({success: false, product: null});

      return res.status(201).send({success: true, product});
    } catch (error) {
      return res.status(400).send({success: false, error});
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const {id} = req.params;

      const product = await ProductModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!product)
        return res.status(400).send({success: false, product: null});

      return res.status(200).send({success: true, product});
    } catch (error) {
      return res.status(400).send({success: false, error});
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const {id} = req.params;

      const product = await ProductModel.findByIdAndDelete(id);

      if (!product) return res.status(400).send({success: false});

      return res.status(200).send({success: true});
    } catch (error) {
      return res.status(400).send({success: false, error});
    }
  }
};
