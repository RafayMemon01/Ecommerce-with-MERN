import express from 'express';
import formidable from 'express-formidable'
const router = express.Router();

import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.mjs';
import { createProductController, deleteProductController, getProductController, getProductPhotoController, getSingleProductController, updateProductController } from '../controllers/productController.mjs';

//create product

router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)

//get product

router.get('/get-product', getProductController)

//get single product

router.get('/get-product/:slug', getSingleProductController)

//get product photo

router.get('/product-photo/:productId', getProductPhotoController)

//delete product

router.delete('/delete-product/:productId', requireSignIn, isAdmin, deleteProductController)

//update Product

router.put('/update-product/:productId', requireSignIn, isAdmin, formidable(), updateProductController)

export default router;