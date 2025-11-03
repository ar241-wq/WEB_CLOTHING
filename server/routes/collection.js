import express from 'express';
import Collection from '../models/Collection.js';
import { authenticate, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Get all collections (Public)
router.get('/', async (req, res) => {
  try {
    const { featured, active } = req.query;
    
    let query = {};
    
    if (featured === 'true') {
      query.featured = true;
    }
    
    if (active !== undefined) {
      query.active = active === 'true';
    } else {
      query.active = true; // Only show active by default
    }

    const collections = await Collection.find(query)
      .populate('products')
      .sort({ order: 1, createdAt: -1 });
    
    res.json({
      success: true,
      count: collections.length,
      collections,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single collection (Public)
router.get('/:id', async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id)
      .populate('products');
    
    if (!collection) {
      return res.status(404).json({ message: 'Collection not found' });
    }

    res.json({
      success: true,
      collection,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create collection (Admin only)
router.post('/', authenticate, isAdmin, async (req, res) => {
  try {
    const collection = await Collection.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Collection created successfully',
      collection,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update collection (Admin only)
router.put('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const collection = await Collection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('products');

    if (!collection) {
      return res.status(404).json({ message: 'Collection not found' });
    }

    res.json({
      success: true,
      message: 'Collection updated successfully',
      collection,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete collection (Admin only)
router.delete('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const collection = await Collection.findByIdAndDelete(req.params.id);

    if (!collection) {
      return res.status(404).json({ message: 'Collection not found' });
    }

    res.json({
      success: true,
      message: 'Collection deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add product to collection (Admin only)
router.post('/:id/products/:productId', authenticate, isAdmin, async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);

    if (!collection) {
      return res.status(404).json({ message: 'Collection not found' });
    }

    if (!collection.products.includes(req.params.productId)) {
      collection.products.push(req.params.productId);
      await collection.save();
    }

    await collection.populate('products');

    res.json({
      success: true,
      message: 'Product added to collection',
      collection,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remove product from collection (Admin only)
router.delete('/:id/products/:productId', authenticate, isAdmin, async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);

    if (!collection) {
      return res.status(404).json({ message: 'Collection not found' });
    }

    collection.products = collection.products.filter(
      p => p.toString() !== req.params.productId
    );
    await collection.save();
    await collection.populate('products');

    res.json({
      success: true,
      message: 'Product removed from collection',
      collection,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Toggle featured status (Admin only)
router.patch('/:id/featured', authenticate, isAdmin, async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);

    if (!collection) {
      return res.status(404).json({ message: 'Collection not found' });
    }

    collection.featured = !collection.featured;
    await collection.save();

    res.json({
      success: true,
      message: `Collection ${collection.featured ? 'featured' : 'unfeatured'}`,
      collection,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Toggle active status (Admin only)
router.patch('/:id/active', authenticate, isAdmin, async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);

    if (!collection) {
      return res.status(404).json({ message: 'Collection not found' });
    }

    collection.active = !collection.active;
    await collection.save();

    res.json({
      success: true,
      message: `Collection ${collection.active ? 'activated' : 'deactivated'}`,
      collection,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;