export class Booking {
  id: string = '';
  uid: string = '';
  orderIds: string[] = [];
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
