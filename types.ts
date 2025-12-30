
export enum PageType {
  DASHBOARD = 'Dashboard',
  PRODUCT_LISTING = 'Product Listing',
  SUPPLIER_SELECTION = 'Supplier Selection',
  ORDER_AUTOMATION = 'Order Automation',
  INTEGRATIONS = 'Integrations',
  REPORTS = 'Reports'
}

export interface Product {
  id: string;
  name: string;
  image: string;
  supplier: string;
  stockLevel: number;
  syncStatus: 'Synced' | 'Not Synced';
}

export interface Supplier {
  id: string;
  name: string;
  logo: string;
  status: 'Connected' | 'Disconnected';
  lastSync: string;
}

export interface AutomationRule {
  id: string;
  name: string;
  threshold: number;
  supplierId: string;
  enabled: boolean;
}

export interface Integration {
  id: string;
  name: string;
  description: string;
  category: string;
  logo: string;
  status: 'Active' | 'Inactive';
}
