import mongoose from 'mongoose';

export interface IReply {
  text: string;
  user: string;
  createdAt: Date;
  comment: string;
}

export interface IReplyModel extends IReply, Document {}

const replySchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  },
  { timestamps: true }
);

export default mongoose.model<IReplyModel>('Reply', replySchema);
