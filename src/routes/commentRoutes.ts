import express from 'express';
import { createComment, createReply, getArticleComments } from '../controllers/commentController';
import { isAuth } from '../middleware/authMiddleware';

const router = express.Router();

// get single article
router.get('/article/:id', getArticleComments);

// add comment
router.post('/add', [isAuth], createComment);

// add reply
router.post('/addreply', [isAuth], createReply);

export default router;