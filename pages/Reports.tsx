
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const salesData = [
  { name: 'Mon', revenue: 4000, orders: 24 },
  { name: 'Tue', revenue: 3000, orders: 18 },
  { name: 'Wed', revenue: 5000, orders: 32 },
  { name: 'Thu', revenue: 2780, orders: 21 },
  { name: 'Fri', revenue: 6890, orders: 45 },
  { name: 'Sat', revenue: 9390, orders: 62 },
  { name: 'Sun', revenue: 8490, orders: 58 },
];

const supplierPerformance = [
  { name: 'Trendyol', value: 45 },
  { name: 'Shopify', value: 30 },
  { name: 'Amazon', value: 15 },
  { name: 'Others', value: 10 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#94a3b8'];

const Reports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Performance Analytics</h2>
          <p className="text-slate-500">Track your business growth and supplier efficiency.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 flex items-center gap-2 text-sm font-medium text-slate-600">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Last 30 Days
          </div>
          <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">Export PDF</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors">Share Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Revenue vs Orders</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{backgroundColor: '#fff', border: 'none', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="orders" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Supplier Distribution</h3>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="h-[250px] w-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={supplierPerformance}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {supplierPerformance.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {supplierPerformance.map((item, idx) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[idx % COLORS.length]}} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-700">{item.name}</p>
                    <p className="text-xs text-slate-400">{item.value}% contribution</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Avg Order Value', value: '₺324', change: '+5.2%', positive: true },
          { label: 'Conversion Rate', value: '3.84%', change: '-0.4%', positive: false },
          { label: 'Stock Turnover', value: '14.2', change: '+12%', positive: true },
          { label: 'Return Rate', value: '1.2%', change: '-0.1%', positive: true },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</p>
            <h4 className="text-2xl font-bold text-slate-900">{stat.value}</h4>
            <p className={`text-xs font-bold mt-2 ${stat.positive ? 'text-emerald-500' : 'text-red-500'}`}>
              {stat.change} vs prev month
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
