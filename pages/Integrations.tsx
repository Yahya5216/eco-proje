
import React from 'react';
import { Integration } from '../types';

const Integrations: React.FC = () => {
  const integrations: Integration[] = [
    { id: '1', name: 'Trendyol', description: 'Largest e-commerce marketplace in Turkey.', category: 'Marketplace', logo: 'https://picsum.photos/seed/t1/100/100', status: 'Active' },
    { id: '2', name: 'Shopify', description: 'Advanced global store platform.', category: 'Storefront', logo: 'https://picsum.photos/seed/s1/100/100', status: 'Active' },
    { id: '3', name: 'WooCommerce', description: 'The most popular WP e-commerce plugin.', category: 'Storefront', logo: 'https://picsum.photos/seed/w1/100/100', status: 'Active' },
    { id: '4', name: 'Amazon Web Services', description: 'Cloud infrastructure and global fulfillment.', category: 'Infrastructure', logo: 'https://picsum.photos/seed/aws/100/100', status: 'Inactive' },
    { id: '5', name: 'Slack', description: 'Real-time notifications and alerts.', category: 'Communication', logo: 'https://picsum.photos/seed/slack/100/100', status: 'Inactive' },
    { id: '6', name: 'QuickBooks', description: 'Automated accounting and tax reports.', category: 'Finance', logo: 'https://picsum.photos/seed/qb/100/100', status: 'Inactive' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map(integration => (
          <div key={integration.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center p-2">
                <img src={integration.logo} alt={integration.name} className="w-full h-full object-contain grayscale-[0.5] mix-blend-multiply" />
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                integration.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
              }`}>
                {integration.status}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900">{integration.name}</h3>
            <p className="text-xs font-semibold text-blue-600 mb-3">{integration.category}</p>
            <p className="text-sm text-slate-500 mb-8 line-clamp-2">{integration.description}</p>
            
            <div className="mt-auto flex items-center justify-between gap-3">
              <button className="flex-1 py-2 text-sm font-bold text-slate-700 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">View Details</button>
              <button className={`flex-1 py-2 text-sm font-bold rounded-xl transition-colors ${
                integration.status === 'Active' ? 'text-slate-500 border border-slate-200 hover:bg-slate-50' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/10'
              }`}>
                {integration.status === 'Active' ? 'Configure' : 'Setup Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
