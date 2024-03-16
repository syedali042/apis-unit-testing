const express = require('express');
const {ProductController} = require('../controllers');

const router = express.Router();

router.get('/', ProductController.getProducts);

router.post('/', ProductController.createProduct);

router.patch('/:id', ProductController.updateProduct);

router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
