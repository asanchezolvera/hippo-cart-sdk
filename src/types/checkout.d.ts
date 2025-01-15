export interface CreateCheckoutRequest {
  cartId: string;
  paymentMethod: string;
  shippingAddress: string;
}

export interface CreateCheckoutResponse {
  checkoutId: string;
  totalAmount: number;
  status: string;
}

export interface ApplyDiscountRequest {
  code: string;
}

export interface ApplyDiscountResponse {
  discountAmount: number;
  newTotal: number;
}
