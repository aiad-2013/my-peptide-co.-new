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
  categories?: ProductCategory[];
  price: number;
  regularPrice?: number;
  salePrice?: number;
  concentration?: string;
  volume?: string;
  description?: string;
  dosage?: string;
  image: string;
  images?: string[];
  badge?: string;
  inStock?: boolean;
  isBundle?: boolean;
  peopleViewing?: number;
  wooCommerceUrl?: string;
  slug?: string;
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