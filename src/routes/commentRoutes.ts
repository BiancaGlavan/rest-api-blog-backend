import express from 'express';
import { createComment, deleteComment, getArticleComments } from '../controllers/commentController';
import { isAdmin, isAuth } from '../middleware/authMiddleware';

const router = express.Router();

// get single article
router.get('/article/:id', getArticleComments);

// add comment
router.post('/add', [isAuth], createComment);

// delete comment
router.delete('/:id/delete', [isAuth, isAdmin], deleteComment);


export default router;