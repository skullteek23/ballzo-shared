import { Constants } from "../common/common-constants";

export class Booking {
  id: string = '';
  uid: string = '';
  orderId: string = '';
  groundId: string = '';
  slotId: string = '';
  bookedAt: number = new Date().getTime();
  slotTimestamp: number = 0;
  lastUpdated: number = new Date().getTime();
  facilityId: string = '';
  spots: number = 1;
}

export enum TransactionType {
  credit = 'credit',
  debit = 'debit'
}

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
