
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import ProductListing from './pages/ProductListing';
import SupplierSelection from './pages/SupplierSelection';
import OrderAutomation from './pages/OrderAutomation';
import Integrations from './pages/Integrations';
import Reports from './pages/Reports';
import { PageType } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageType>(PageType.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Close sidebar on mobile when navigating
    setIsSidebarOpen(false);
    
    // Simple transition trigger
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [activePage]);

  const renderContent = () => {
    switch (activePage) {
      case PageType.DASHBOARD:
        return <Dashboard />;
      case PageType.PRODUCT_LISTING:
        return <ProductListing />;
      case PageType.SUPPLIER_SELECTION:
        return <SupplierSelection />;
      case PageType.ORDER_AUTOMATION:
        return <OrderAutomation />;
      case PageType.INTEGRATIONS:
        return <Integrations />;
      case PageType.REPORTS:
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden">
      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Navigation Sidebar */}
      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isOpen={isSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64 h-screen">
        <Header 
          title={activePage} 
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="flex-1 overflow-y-auto custom-scrollbar">
          <div className={`p-4 lg:p-8 max-w-7xl mx-auto transition-all duration-300 transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            {renderContent()}
          </div>
          
          {/* Global Footer */}
          <footer className="p-8 border-t border-slate-200 mt-12 text-center">
            <p className="text-sm text-slate-400">
              © 2024 Nexus SaaS Dashboard • Version 2.4.0 • <a href="#" className="hover:text-blue-500 underline decoration-blue-500/30">Privacy Policy</a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
