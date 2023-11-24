// Classes
export class IListOption {
  viewValue: string = 'Label';
  value: any = null;
}

// Interfaces
export class IUserProperties {
  displayName: string = "";
  photoURL: string = "";
}

export class BackgroundCSS {
  background: string = '';
  color: string = 'black';
}

export class SupportRequest {
  subject: string = '';
  description: string = '';
  uid: string = '';
  screenshots: string[] = [];
  createdAt: number = new Date().getTime();
}

/**
 * DO NOT CHANGE THE ORDER OF THE ARRAY VALUES.
 */
export const PositionData = [
  {
    title: 'Manager',
    subtitle: 'Game Coordinator / Slot Booker',
  },
  { title: 'Striker', subtitle: 'LW / ST / CF / RW' },
  {
    title: 'Midfielder',
    subtitle: 'LM / CM / RM',
  },
  {
    title: 'Defender',
    subtitle: 'LB / CB / RB',
  },
  {
    title: 'Goalkeeper',
    subtitle: 'GK',
  },
]
