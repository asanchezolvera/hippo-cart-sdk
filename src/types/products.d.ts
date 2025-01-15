export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categories: string[];
}

export interface GetProductResponse {
  product: Product;
}

export interface SearchProductsRequest {
  query: string;
  categories?: string[];
  priceRange?: { min: number; max: number };
}

export interface SearchProductsResponse {
  products: Product[];
  total: number;
}
