import { Constants } from "../common/common-constants";
import { TransactionType } from "./transaction.model";

export class Order {
  id: string = '';
  status: OrderStatus = OrderStatus.confirmed;
  amount: number = 0;
  ref: any = {};
  uid: string = '';
  timestamp: number = new Date().getTime();

  totalPrice(count: number, unitPrice: number): number {
    return Number(count) * Number(unitPrice);
  }
}

export enum OrderStatus {
  confirmed = 'confirmed',
  finished = 'finished',
  returned = 'returned',
}

// export enum BookingSide {
//   white = 0,
//   black = 1
// }

export class OrderReturn {
  id: string = '';
  reason: string = '';
  oid: string = '';
  returnCount: number = 0;
  timestamp: number = new Date().getTime();
  returnMode = 'ballzo-wallet';
}

export interface CheckoutRz {
  key: string;
  amount: number;
  currency: string;
  name: string;
  order_id: string;
  callback_url: string; // for ex: https://ballzo.in/razorpay/callback
  description?: string;
  image?: string;
  partial_payment?: boolean;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
    method?: string;
    partial_payment?: boolean;
  },
  notes?: any;
  theme?: {
    hide_topbar?: boolean;
    color?: string;
    backdrop_color?: string;
  };
  modal?: {
    backdropclose?: boolean;
    escape?: boolean;
    handleback?: boolean;
    confirm_close?: boolean;
    ondismiss?: () => {};
    animation?: boolean;
  };
  customer_id?: string;
  timeout?: number;
  remember_customer?: boolean;
  send_sms_hash?: boolean;
  allow_rotation?: boolean;
  retry?: {
    enabled?: boolean;
  };
}

export interface OrderRz {
  amount: number;
  amount_due: number;
  amount_paid: number;
  attempts: number;
  created_at: number;
  currency: string;
  entity: string;
  id: string;
  status: string;
  razorpay_payment_id: string;
  notes?: any;
  offers?: any[];
  offer_id?: string;
  receipt?: string;
  description?: string;
}

export class OrderRefundRz {
  id: string;
  entity: string;
  amount: number;
  currency: string;
  payment_id: string;
  notes: any[];
  receipt: string;
  acquirer_data: any;
  created_at: number;
  batch_id: string;
  status: string;
  speed_processed: string;
  speed_requested: string;
}
