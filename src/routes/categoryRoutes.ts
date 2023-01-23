import express from 'express';
import { getCategories, getCategoryById, createCategory, getCategoryArticles, updateCategory } from '../controllers/categoryController';
import { isAdmin, isAuth } from '../middleware/authMiddleware';

const router = express.Router();

// get all categories
router.get('/', getCategories);


// get single category 
router.get('/:id', getCategoryById);


router.get('/:id/articles', getCategoryArticles);

// add category
router.post('/', [isAuth, isAdmin], createCategory);

//update category

router.put('/:id', [isAuth, isAdmin], updateCategory);


export default router;
