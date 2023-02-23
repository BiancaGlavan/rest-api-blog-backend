import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { IComment } from '../models/Comment';
import Comment from '../models/Comment';


export const getArticleComments = async (
  req: Request<{ id: string }, {}, {}, { page?: number; limit?: number }>,
  res: Response,
  next: NextFunction
) => {
  const { page = 1, limit = 30 } = req.query;

  const articleId = req.params.id;


  try {
    const comments = await Comment.find({article: articleId})
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('user', 'name image');
      
    const total = await Comment.find({article: articleId}).countDocuments();

    return res.status(200).json({
      comments,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const createComment = async (
  req: Request<{}, {}, IComment>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.userId;

    const joiSchema = Joi.object({
      text: Joi.string().min(3).max(60).required(),
      article: Joi.string().hex().length(24),
    });

    const { error } = joiSchema.validate(req.body);

    if (error) {
      return res.status(400).send(error);
    }

    const { text, article } = req.body;
    const newcomment = { text, user: userId, article };
    const comment = await Comment.create(newcomment);

    return res.status(201).json(comment);
  } catch (error) {
    return res.status(400).json(error);
  }
};

