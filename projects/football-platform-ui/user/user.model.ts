import { Constants } from "@ballzo-ui/core/common";
import { ConfirmationResult, User } from '@angular/fire/auth';
import { FirebaseError } from 'firebase/app';
import { FunctionsErrorCode } from 'firebase/functions';

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



// Interfaces
export type IUser = User | null;
export type IConfirmationResult = ConfirmationResult | null;

export interface IApiError extends FirebaseError { }
export type CloudFnErrorCode = FunctionsErrorCode;
export type IUserRole = { user: IUser, role: string };
