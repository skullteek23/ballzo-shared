import { Constants, TabLabel } from "../common/common-constants";

export class DateParseUtility {

  /**
   * Returns min-max range for a given day
   * @param day
   * @returns
   */
  static getMaxRange(day: TabLabel): { max: number, min: number } {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(today.getDate() + 2);

    switch (day) {
      case TabLabel.today:
        return { min: today.getTime(), max: tomorrow.getTime() - 1 };
      case TabLabel.tomorrow:
        return { min: tomorrow.getTime(), max: dayAfter.getTime() - 1 };
      case TabLabel.dayAfter:
        return { min: dayAfter.getTime(), max: dayAfter.getTime() + 24 * 60 * 60 * 1000 - 1 };
      default:
        return { min: 0, max: 1 }; // Return undefined for invalid input
    }
  }

  /**
   * Formats timestamp to 12 hour format
   * @param timestamp
   * @returns
   */
  static formatTimestampTo12Hour(timestamp: number): string {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;

    const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    return formattedTime;
  }

  /**
   * Returns relative time for a given timestamp in milliseconds
   * @param {number} timestamp
   * @returns
   */
  static getTimeRelative(timestamp: number): TabLabel {
    const timestampDate: Date = new Date(timestamp); // Convert timestamp to Date object
    const currentDate: Date = new Date(); // Current date

    // Set time to midnight to compare date only
    timestampDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    const difference: number = Math.floor((timestampDate.getTime() - currentDate.getTime()) / (Constants.ONE_DAY_IN_MILLISECONDS)); // Difference in days

    if (difference === 0) {
      return TabLabel.today;
    } else if (difference === 1) {
      return TabLabel.tomorrow;
    } else if (difference === 2) {
      return TabLabel.dayAfter;
    } else if (difference < 0) {
      return TabLabel.past;
    } else {
      return TabLabel.farAway;
    }
  }
}
