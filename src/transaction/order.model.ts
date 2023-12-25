import { Constants } from "../common/common-constants";
import { IMap } from "../common/common.model";

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
  handler: (response: any) => Promise<any>;
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

export class OrderRz {
  id: string = '';
  bookingId: string = '';
  uid: string = '';
  entity: string = '';
  amount: number | string = 0;
  amount_paid: number = 0;
  amount_due: number = 0;
  currency: string = 'INR';
  receipt?: string = '';
  offer_id?: string | null = '';
  offers?: { [key: string]: string } = {};
  status: 'created' | 'attempted' | 'paid' = 'created';
  attempts: number = 0;
  notes?: IMap<string | number> = {};
  created_at: number = new Date().getTime();

  get _amount() {
    return Number(this.amount) / 100;
  }
}

export class CancellationBehavior {
  lastCancellationTimestamp: number = 0;
  count: number = 0;

  _updateCancellationCount() {
    this.count++;
  }

  _resetCount() {
    this.count = 0;
  }
}
