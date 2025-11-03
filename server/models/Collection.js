import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Collection title is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Collection description is required'],
  },
  image: {
    type: String,
    required: [true, 'Collection image is required'],
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }],
  featured: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

// Virtual for item count
collectionSchema.virtual('itemCount').get(function() {
  return this.products.length;
});

// Ensure virtuals are included in JSON
collectionSchema.set('toJSON', { virtuals: true });

const Collection = mongoose.model('Collection', collectionSchema);

export default Collection;