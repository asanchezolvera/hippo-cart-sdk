export interface CreateOrderRequest {
  checkoutId: string;
}

export interface CreateOrderResponse {
  orderId: string;
  status: string;
}

export interface GetOrderResponse {
  orderId: string;
  items: Array<{ productId: string; quantity: number; price: number }>;
  totalAmount: number;
  status: string;
}

export interface TrackOrderResponse {
  orderId: string;
  currentStatus: string;
  estimatedDelivery: string;
}
