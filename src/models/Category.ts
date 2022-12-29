import mongoose, { Document, Model } from 'mongoose';

export interface ICategory {
  title: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
  articles: string[];
}

export interface ICategoryModel extends ICategory, Document {}

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    articles: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Article',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<ICategoryModel>('Category', categorySchema);
