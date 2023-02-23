import mongoose from 'mongoose';
import { IUser } from './User';


export interface IComment {
  _id: string;
  text: string;
  createdAt: Date;
  user: string;
  article: string;
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
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article',
    },
  },
  { timestamps: true }
);

export default mongoose.model<ICommentModel>('Comment', commentSchema);
