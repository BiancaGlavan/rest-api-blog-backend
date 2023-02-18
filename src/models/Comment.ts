import mongoose from 'mongoose';
import { IReply } from './Reply';

export interface IComment {
  text: string;
  createdAt: Date;
  user: string;
  article: string;
  replies: IReply[];
}

export interface ICommentModel extends IComment, Document {}

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    replies: [
      {
        content: {
          type: String,
          required: true,
        },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<ICommentModel>('Comment', commentSchema);
