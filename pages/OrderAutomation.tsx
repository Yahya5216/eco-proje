
import React, { useState } from 'react';
import { Icons } from '../constants';
import { AutomationRule } from '../types';

const OrderAutomation: React.FC = () => {
  const [rules, setRules] = useState<AutomationRule[]>([
    { id: '1', name: 'Low Stock Auto-Reorder', threshold: 10, supplierId: 'Shopify', enabled: true },
    { id: '2', name: 'Emergency Stock Trigger', threshold: 5, supplierId: 'Amazon', enabled: false },
    { id: '3', name: 'Bulk Replenishment', threshold: 50, supplierId: 'Trendyol', enabled: true },
  ]);

  const toggleRule = (id: string) => {
    setRules(rules.map(r => r.id === id ? { ...r, enabled: !r.enabled } : r));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Automation Engine</h2>
          <p className="text-slate-500">Define logic-based rules for your inventory flow.</p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20">
          <Icons.Plus className="w-4 h-4" />
          Create Rule
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {rules.map((rule, idx) => (
          <div key={rule.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 relative overflow-hidden group">
            {/* Rule Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${rule.enabled ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                  <Icons.Automation className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{rule.name}</h3>
                  <p className="text-sm text-slate-500">ID: RULE-00{rule.id}</p>
                </div>
              </div>
              <button 
                onClick={() => toggleRule(rule.id)}
                className={`w-12 h-6 rounded-full transition-colors relative ${rule.enabled ? 'bg-blue-600' : 'bg-slate-200'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${rule.enabled ? 'left-7' : 'left-1'}`} />
              </button>
            </div>

            {/* Rule Flow UI */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
              <div className="w-full md:w-auto flex-1 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <p className="text-xs uppercase font-bold text-slate-400 mb-1">Trigger</p>
                <p className="text-sm font-semibold text-slate-700">Stock falls below <span className="text-blue-600 px-2 bg-blue-50 rounded border border-blue-100">{rule.threshold}</span> units</p>
              </div>
              
              <div className="flex items-center justify-center p-2">
                <Icons.ChevronRight className="w-6 h-6 text-slate-300 rotate-90 md:rotate-0" />
              </div>

              <div className="w-full md:w-auto flex-1 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <p className="text-xs uppercase font-bold text-slate-400 mb-1">Action</p>
                <p className="text-sm font-semibold text-slate-700">Generate Purchase Order</p>
              </div>

              <div className="flex items-center justify-center p-2">
                <Icons.ChevronRight className="w-6 h-6 text-slate-300 rotate-90 md:rotate-0" />
              </div>

              <div className="w-full md:w-auto flex-1 p-4 rounded-2xl bg-blue-50 border border-blue-100 text-center">
                <p className="text-xs uppercase font-bold text-blue-400 mb-1">Destination</p>
                <p className="text-sm font-bold text-blue-700">{rule.supplierId}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  2,102 runs total
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Last run: 4h ago
                </span>
              </div>
              <button className="text-slate-400 hover:text-slate-600 text-sm font-bold transition-colors">Edit Workflow</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderAutomation;
