
import React, { useState } from 'react';
import { Icons } from '../constants';
import { Product } from '../types';

const ProductListing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const products: Product[] = [
    { id: '1', name: 'Premium Espresso Machine', image: 'https://picsum.photos/seed/p1/100/100', supplier: 'Shopify', stockLevel: 45, syncStatus: 'Synced' },
    { id: '2', name: 'Smart Fitness Tracker v2', image: 'https://picsum.photos/seed/p2/100/100', supplier: 'Trendyol', stockLevel: 12, syncStatus: 'Synced' },
    { id: '3', name: 'Wireless Headphones', image: 'https://picsum.photos/seed/p3/100/100', supplier: 'Amazon', stockLevel: 3, syncStatus: 'Not Synced' },
    { id: '4', name: 'Mechanical Keyboard', image: 'https://picsum.photos/seed/p4/100/100', supplier: 'Shopify', stockLevel: 89, syncStatus: 'Synced' },
    { id: '5', name: 'Ergonomic Desk Chair', image: 'https://picsum.photos/seed/p5/100/100', supplier: 'WooCommerce', stockLevel: 24, syncStatus: 'Synced' },
    { id: '6', name: '4K Ultra-Wide Monitor', image: 'https://picsum.photos/seed/p6/100/100', supplier: 'Amazon', stockLevel: 5, syncStatus: 'Synced' },
    { id: '7', name: 'USB-C Docking Station', image: 'https://picsum.photos/seed/p7/100/100', supplier: 'Trendyol', stockLevel: 156, syncStatus: 'Synced' },
  ];

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Icons.Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <select className="flex-1 md:flex-none bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none">
            <option>All Suppliers</option>
            <option>Shopify</option>
            <option>Trendyol</option>
            <option>Amazon</option>
          </select>
          <select className="flex-1 md:flex-none bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none">
            <option>Stock Status</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Icons.Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Product Info</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Inventory</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Sync Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img src={product.image} className="w-12 h-12 rounded-xl object-cover" alt={product.name} />
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{product.name}</p>
                        <p className="text-xs text-slate-400">SKU: NEX-PRD-{product.id}42</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-600 px-2 py-1 bg-slate-100 rounded-lg">{product.supplier}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{product.stockLevel} units</p>
                      <div className="w-24 h-1 bg-slate-100 rounded-full mt-1.5">
                        <div 
                          className={`h-full rounded-full ${product.stockLevel < 15 ? 'bg-red-500' : 'bg-emerald-500'}`} 
                          style={{width: `${Math.min(100, product.stockLevel)}%`}}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                      product.syncStatus === 'Synced' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        product.syncStatus === 'Synced' ? 'bg-emerald-500' : 'bg-amber-500'
                      }`} />
                      {product.syncStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                      <Icons.DotsHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icons.Search className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">No products found</h3>
            <p className="text-slate-500">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
