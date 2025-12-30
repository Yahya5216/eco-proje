
import React from 'react';
import { PageType } from '../types';
import { Icons } from '../constants';

interface SidebarProps {
  activePage: PageType;
  setActivePage: (page: PageType) => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, isOpen }) => {
  const menuItems = [
    { type: PageType.DASHBOARD, icon: Icons.Dashboard },
    { type: PageType.PRODUCT_LISTING, icon: Icons.Products },
    { type: PageType.SUPPLIER_SELECTION, icon: Icons.Suppliers },
    { type: PageType.ORDER_AUTOMATION, icon: Icons.Automation },
    { type: PageType.INTEGRATIONS, icon: Icons.Integrations },
    { type: PageType.REPORTS, icon: Icons.Reports },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 h-16 border-b border-slate-100">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            N
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">Nexus SaaS</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.type}
              onClick={() => setActivePage(item.type)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activePage === item.type
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.type}
            </button>
          ))}
        </nav>

        {/* Footer info */}
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
            <img src="https://picsum.photos/seed/user1/40/40" alt="Profile" className="w-10 h-10 rounded-full border border-slate-200" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 truncate">Alex Rivera</p>
              <p className="text-xs text-slate-500 truncate">Pro Account</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
