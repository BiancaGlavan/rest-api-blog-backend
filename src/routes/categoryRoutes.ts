import express from 'express';
import { getCategories, getCategoryById, createCategory, getCategoryArticles, updateCategory, deleteCategory } from '../controllers/categoryController';
import { isAdmin, isAuth } from '../middleware/authMiddleware';

const router = express.Router();

// get all categories
router.get('/', getCategories);


// get single category 
router.get('/:id', getCategoryById);

//get articles of category
router.get('/:id/articles', getCategoryArticles);

// add category
router.post('/', [isAuth, isAdmin], createCategory);

// update category
router.put('/:id', [isAuth, isAdmin], updateCategory);

//delete category
router.delete('/:id/delete', [isAuth, isAdmin], deleteCategory);


export default router;
