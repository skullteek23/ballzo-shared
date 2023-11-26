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

export class WalletTransaction {
  amount: number = 0;
  type: TransactionType = TransactionType.debit;
  createdOn: number = new Date().getTime();
  orderId: string = '';
  uid: string = '';
  transactionFor: string = ''; // notes for transaction entity

  get _amount(): string {
    if (this.amount !== undefined && this.amount !== null && Number(this.amount) >= 0) {
      return this.type === TransactionType.credit ? Constants.PLUS_SIGN + this.amount : Constants.MINUS_SIGN + this.amount;
    }
    return Constants.NOT_AVAILABLE;
  }

  get _highlightClass(): string {
    return this.type === TransactionType.credit ? 'green-highlight' : 'red-highlight';
  }

  get _description(): string {
    let message: string = Constants.WALLET_TRANSACTION.debit;
    if (this.type === TransactionType.credit) {
      message = Constants.WALLET_TRANSACTION.credit;
    }
    message += ' ';
    message += this.transactionFor;
    return message;
  }
}

export class OrderReturn {
  id: string = '';
  reason: string = '';
  oid: string = '';
  returnCount: number = 0;
  timestamp: number = new Date().getTime();
  returnMode = 'ballzo-wallet';
}
