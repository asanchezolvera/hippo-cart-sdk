// types/payment.d.ts
export interface CreditCard {
  cardNumber: string;
  expirationDate: string; // Format: MM/YY
  cardholderName: string;
  cvv: string;
  billingAddress?: string;
  provider: string;
  numberLength: number;
  cvvLength: number;
  imageUrl: string;
}

export interface CreditCardProviders {
  cards: {
    visa: CreditCard;
    mastercard: CreditCard;
    american_express: CreditCard;
    discover: CreditCard;
  };
}

export interface PaymentMethod {
  type: "credit_card" | "paypal" | "apple_pay";
  details: CreditCard | { [key: string]: any }; // Extend for other payment types
}
