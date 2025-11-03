import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0,
  },
  oldPrice: {
    type: Number,
    min: 0,
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['women', 'men', 'accessories'],
  },
  sizes: [{
    type: String,
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  }],
  colors: [{
    type: String,
  }],
  images: [{
    type: String,
    required: true,
  }],
  mainImage: {
    type: String,
    required: true,
  },
  features: [{
    type: String,
  }],
  inStock: {
    type: Boolean,
    default: true,
  },
  stock: {
    type: Number,
    default: 0,
    min: 0,
  },
  badge: {
    type: String,
    enum: ['New', 'Sale', 'Hot', ''],
    default: '',
  },
  featured: {
    type: Boolean,
    default: false,
  },
  views: {
    type: Number,
    default: 0,
  },
  sold: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

// Index for search optimization
productSchema.index({ name: 'text', description: 'text' });

const Product = mongoose.model('Product', productSchema);

export default Product;