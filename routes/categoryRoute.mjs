import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.mjs';
import { createCategoryController, deleteCategoryController, getCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.mjs';

const router = express.Router();

//Category Routes

router.post('/create-category', requireSignIn, isAdmin, createCategoryController )

//update category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController )

// get all category

router.get('/get-category',getCategoryController )

//get single category

router.get('/single-category/:slug',singleCategoryController )

//delete category


router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController )



export default router;