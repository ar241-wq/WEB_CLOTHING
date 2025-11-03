import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ordersAPI, productsAPI } from '../../services/api';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    totalRevenue: 0,
  });
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [ordersStats, productsResponse] = await Promise.all([
        ordersAPI.getStats(),
        productsAPI.getAll(),
      ]);

      setStats(ordersStats.data.stats);
      setTotalProducts(productsResponse.data.count);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f5dc] flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5dc] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-light text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your store from here</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Orders</p>
                <h3 className="text-3xl font-semibold text-gray-900">{stats.totalOrders}</h3>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                📦
              </div>
            </div>
            <Link to="/admin/orders" className="text-[#8b7355] text-sm hover:underline">
              View all orders →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending Orders</p>
                <h3 className="text-3xl font-semibold text-gray-900">{stats.pendingOrders}</h3>
              </div>
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                ⏱️
              </div>
            </div>
            <Link to="/admin/orders?status=pending" className="text-[#8b7355] text-sm hover:underline">
              Process orders →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Products</p>
                <h3 className="text-3xl font-semibold text-gray-900">{totalProducts}</h3>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                🏷️
              </div>
            </div>
            <Link to="/admin/products" className="text-[#8b7355] text-sm hover:underline">
              Manage products →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                <h3 className="text-3xl font-semibold text-gray-900">
                  ${stats.totalRevenue.toFixed(2)}
                </h3>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                💰
              </div>
            </div>
            <Link to="/admin/orders?paymentStatus=paid" className="text-[#8b7355] text-sm hover:underline">
              View details →
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/admin/products/new"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-[#8b7355] transition-colors text-center"
            >
              <div className="text-3xl mb-2">➕</div>
              <h3 className="font-medium text-gray-900 mb-1">Add Product</h3>
              <p className="text-sm text-gray-600">Create new product</p>
            </Link>

            <Link
              to="/admin/collections/new"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-[#8b7355] transition-colors text-center"
            >
              <div className="text-3xl mb-2">📁</div>
              <h3 className="font-medium text-gray-900 mb-1">Add Collection</h3>
              <p className="text-sm text-gray-600">Create new collection</p>
            </Link>

            <Link
              to="/admin/orders"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-[#8b7355] transition-colors text-center"
            >
              <div className="text-3xl mb-2">📋</div>
              <h3 className="font-medium text-gray-900 mb-1">View Orders</h3>
              <p className="text-sm text-gray-600">Manage all orders</p>
            </Link>

            <Link
              to="/admin/upload"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-[#8b7355] transition-colors text-center"
            >
              <div className="text-3xl mb-2">📤</div>
              <h3 className="font-medium text-gray-900 mb-1">Upload Images</h3>
              <p className="text-sm text-gray-600">Manage media files</p>
            </Link>
          </div>
        </div>

        {/* Management Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/admin/products" className="text-gray-600 hover:text-[#8b7355]">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/admin/products/new" className="text-gray-600 hover:text-[#8b7355]">
                  Add New Product
                </Link>
              </li>
              <li>
                <Link to="/admin/products?featured=true" className="text-gray-600 hover:text-[#8b7355]">
                  Featured Products
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Collections</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/admin/collections" className="text-gray-600 hover:text-[#8b7355]">
                  All Collections
                </Link>
              </li>
              <li>
                <Link to="/admin/collections/new" className="text-gray-600 hover:text-[#8b7355]">
                  Add New Collection
                </Link>
              </li>
              <li>
                <Link to="/admin/collections?featured=true" className="text-gray-600 hover:text-[#8b7355]">
                  Featured Collections
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Orders</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/admin/orders" className="text-gray-600 hover:text-[#8b7355]">
                  All Orders
                </Link>
              </li>
              <li>
                <Link to="/admin/orders?status=pending" className="text-gray-600 hover:text-[#8b7355]">
                  Pending Orders
                </Link>
              </li>
              <li>
                <Link to="/admin/orders?status=processing" className="text-gray-600 hover:text-[#8b7355]">
                  Processing Orders
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;