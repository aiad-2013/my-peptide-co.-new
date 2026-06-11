export type ProductCategory =
  | 'sarms'
  | 'peptides'
  | 'glp-1'
  | 'erectile-performance'
  | 'dilutes'
  | 'pct';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  price: number;
  [key: string]: any;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  concentration?: string;
  volume?: string;
  image?: string;
}