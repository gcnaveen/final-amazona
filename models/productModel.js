import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String },
    images: [String],
    brand: { type: String, required: true },
    category: { type: String, required: true },
    categoryID: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    subCategory: { type: String },
    description: { type: String, required: true },
    additionalInfo: { type: String},
    price: { type: Number, required: true },
    priceFor30Pills: { type: Number },
    priceFor45Pills: { type: Number },
    priceFor60Pills: { type: Number },
    priceFor90Pills: { type: Number },
    priceFor120Pills: { type: Number },
    priceFor150Pills: { type: Number },
    priceFor240Pills: { type: Number},
    priceFor300Pills: { type: Number },
    countInStock: { type: Number, required: true },
    productDiscountedPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    reviews: [reviewSchema],
    blackFridaySale: { type: Boolean , default:false},
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
