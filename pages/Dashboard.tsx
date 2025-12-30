
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Icons } from '../constants';
import { Product } from '../types';

const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
  { name: 'Jul', sales: 8000 },
  { name: 'Aug', sales: 7500 },
  { name: 'Sep', sales: 9000 },
  { name: 'Oct', sales: 10000 },
  { name: 'Nov', sales: 9500 },
  { name: 'Dec', sales: 12000 },
];

const mockProducts: Product[] = [
  { id: '1', name: 'Premium Espresso Machine', image: 'https://picsum.photos/seed/p1/100/100', supplier: 'Shopify', stockLevel: 45, syncStatus: 'Synced' },
  { id: '2', name: 'Smart Fitness Tracker v2', image: 'https://picsum.photos/seed/p2/100/100', supplier: 'Trendyol', stockLevel: 12, syncStatus: 'Synced' },
  { id: '3', name: 'Wireless Noise Canceling Headphones', image: 'https://picsum.photos/seed/p3/100/100', supplier: 'Amazon', stockLevel: 3, syncStatus: 'Not Synced' },
  { id: '4', name: 'Mechanical RGB Keyboard', image: 'https://picsum.photos/seed/p4/100/100', supplier: 'Shopify', stockLevel: 89, syncStatus: 'Synced' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-sm font-medium">Total Sales</p>
          <div className="mt-2 flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-slate-900">₺45,200</h3>
            <span className="text-emerald-500 text-sm font-medium">+12.5%</span>
          </div>
          <div className="mt-4 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-[75%] h-full bg-blue-500 rounded-full"></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-sm font-medium">Active Orders</p>
          <div className="mt-2 flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-slate-900">128</h3>
            <span className="text-slate-400 text-sm font-medium">In last 24h</span>
          </div>
          <div className="mt-4 flex -space-x-2">
            {[1,2,3,4,5].map(i => (
              <img key={i} src={`https://picsum.photos/seed/user${i}/32/32`} className="w-8 h-8 rounded-full border-2 border-white" alt="Avatar" />
            ))}
            <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">+42</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-sm font-medium">Stock Sync Status</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <h3 className="text-xl font-bold text-slate-900">Connected</h3>
          </div>
          <p className="mt-4 text-xs text-slate-500">Last successful sync: 2 mins ago</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-bold text-slate-900">Monthly Sales Growth</h4>
          <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-sm outline-none">
            <option>Last 12 Months</option>
            <option>Last 6 Months</option>
          </select>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <Tooltip 
                contentStyle={{backgroundColor: '#fff', border: 'none', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
              />
              <Area type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h4 className="text-lg font-bold text-slate-900">Recent Inventory</h4>
          <button className="text-blue-600 text-sm font-semibold hover:underline">View All Products</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Stock Level</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Sync Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockProducts.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={product.image} className="w-10 h-10 rounded-lg object-cover" alt={product.name} />
                      <span className="text-sm font-semibold text-slate-800">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600">{product.supplier}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${product.stockLevel < 15 ? 'text-red-500' : 'text-slate-800'}`}>
                        {product.stockLevel} units
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      product.syncStatus === 'Synced' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
                    }`}>
                      {product.syncStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600">
                      <Icons.DotsHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
