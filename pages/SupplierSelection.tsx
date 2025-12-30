
import React from 'react';
// Added missing import for Icons
import { Icons } from '../constants';
import { Supplier } from '../types';

const SupplierSelection: React.FC = () => {
  const suppliers: Supplier[] = [
    { id: '1', name: 'Trendyol', logo: 'https://picsum.photos/seed/trendy/200/200', status: 'Connected', lastSync: '10 mins ago' },
    { id: '2', name: 'Shopify', logo: 'https://picsum.photos/seed/shop/200/200', status: 'Connected', lastSync: '2 hours ago' },
    { id: '3', name: 'Amazon FBA', logo: 'https://picsum.photos/seed/amz/200/200', status: 'Disconnected', lastSync: 'Never' },
    { id: '4', name: 'WooCommerce', logo: 'https://picsum.photos/seed/woo/200/200', status: 'Connected', lastSync: '1 day ago' },
    { id: '5', name: 'Hepsiburada', logo: 'https://picsum.photos/seed/hepsi/200/200', status: 'Disconnected', lastSync: 'Never' },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-lg">
          <h2 className="text-2xl font-bold mb-2">Connect Your Inventory Sources</h2>
          <p className="text-blue-100 opacity-90 mb-6">Nexus synchronizes your stock across all major platforms in real-time, preventing overselling and inventory errors.</p>
          <button className="bg-white text-blue-600 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors">
            Learn more about Sync
          </button>
        </div>
        <div className="absolute right-[-5%] top-[-20%] w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suppliers.map(supplier => (
          <div key={supplier.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center p-3 mb-4">
              <img src={supplier.logo} alt={supplier.name} className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">{supplier.name}</h3>
            <div className="flex items-center gap-2 mb-6">
              <span className={`w-2 h-2 rounded-full ${supplier.status === 'Connected' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
              <span className="text-sm text-slate-500">{supplier.status}</span>
            </div>
            
            <div className="w-full space-y-3 mt-auto">
              <div className="flex items-center justify-between text-xs px-2 mb-2">
                <span className="text-slate-400 uppercase font-bold tracking-wider">Last Sync</span>
                <span className="text-slate-700 font-medium">{supplier.lastSync}</span>
              </div>
              <button className={`w-full py-2.5 rounded-xl font-bold text-sm transition-colors ${
                supplier.status === 'Connected' 
                ? 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-red-50 hover:text-red-600 hover:border-red-100' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                {supplier.status === 'Connected' ? 'Disconnect' : 'Connect Store'}
              </button>
            </div>
          </div>
        ))}

        <button className="border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group hover:border-blue-300 hover:bg-blue-50/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
            <Icons.Plus className="w-6 h-6" />
          </div>
          <p className="font-semibold text-slate-500 group-hover:text-blue-600">Add Custom Integration</p>
        </button>
      </div>
    </div>
  );
};

export default SupplierSelection;
