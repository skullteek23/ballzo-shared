export class Booking {
  id: string = '';
  uid: string = '';
  orderIds: string[] = [];
  groundId: string = '';
  slotId: string = '';
  timestamp: number = new Date().getTime();
  lastUpdated: number = new Date().getTime();
  facilityId: string = '';
  spots: number = 1;
}

export enum TransactionType {
  credit = 'credit',
  debit = 'debit'
}