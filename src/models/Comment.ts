import mongoose from 'mongoose';


export interface IComment {
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
