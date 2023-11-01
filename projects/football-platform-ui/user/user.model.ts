import { Constants } from "football-platform-ui-shared/core"

/**
 * Defines the position of a player.
 * DO NOT CHANGE THE ORDER OF THE ENUM VALUES.
 */
export enum Position {
  manager = 'manager',
  striker = 'striker',
  midfielder = 'midfielder',
  defender = 'defender',
  goalkeeper = 'goalkeeper',
}

export class Player {
  id: string = '';
  name: string = '';
  imgLink: string = '';
  position: Position = Position.striker;
  dob: number = 0;
  locationCity: string = '';
  locationState: string = '';

  /**
   * Gets the location
   * @returns {string}
   */
  get _location(): string {
    if (this.locationCity && this.locationState) {
      return `${this.locationCity}, ${this.locationState}`;
    } else if (this.locationCity) {
      return this.locationCity;
    } else if (this.locationState) {
      return this.locationState;
    } else {
      return Constants.NOT_AVAILABLE;
    }
  }

  /**
   * Gets the date of birth
   */
  get _dateOfBirthString(): any {
    if (this.dob) {
      return new Date(this.dob);
    }
    return null;
  }
}

export class PlayerStats {
  apps: number = 0;
  goals: number = 0;
  wins: number = 0;
}
