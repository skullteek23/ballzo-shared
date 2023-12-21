export class Constants {
  static readonly GET_STARTED = 'Get Started';
  static readonly SHEET_OPEN_OUTLET = 'open';
  static readonly INPUT_NAME = 'input';
  static readonly NOT_AVAILABLE = '-';
  static readonly loginURL = `(${Constants.SHEET_OPEN_OUTLET}:login)`;
  static readonly signupURL = `(${Constants.SHEET_OPEN_OUTLET}:signup)`;
  static readonly RUPEE_SYMBOL = '₹';
  static readonly PLACEHOLDER_ARRAY = [1, 2, 3, 4];
  static readonly DEFAULT_FACILITY_MAX_PLAYER_LIMIT = 22;
  static readonly DEFAULT_FACILITY_ALLOWED_PLAYER_LIMIT = Constants.DEFAULT_FACILITY_MAX_PLAYER_LIMIT;
  static readonly DEFAULT_SLOT_PRICE = 60;
  static readonly FILE_NAME_SEPARATOR = '-';
  static readonly DATE_TIME_FORMATS = {
    format_1: 'dd EEE', // 8 Sat
    format_2: 'd MMM, y', // 14 Aug, 2021
    format_3: 'h:mm a', // 8:03 PM
    format_4: 'd MMM, hh:mm a', // 14 Aug, 08:03 PM
    format_5: 'EEEE, MMMM d' // Saturday, August 14
  };
  static readonly NUMBER_FORMATS = {
    format_1: '1.0-0', // 3.6 -> 4
  };
  static readonly SEVEN_MINUTES_IN_MILLISECONDS = 420000;
  static readonly ONE_DAY_IN_MILLISECONDS = 86400000;
  static readonly THREE_DAYS_IN_MILLISECONDS = 259200000;
  static readonly ONE_HOUR_IN_MILLISECONDS = 3600000;
  static readonly TWELVE_HOURS_IN_MILLISECONDS = 43200000;
  static readonly ORDER_PREFIX = 'OD';
  static readonly ORDER_PREFIX_UI = 'Order #';
  static readonly DAY_TIMES = {
    morning: 'Morning',
    afternoon: 'Afternoon',
    evening: 'Evening',
    night: 'Night',
  };
  static readonly DELETED_USER_PLACEHOLDER = 'Unknown User';
  static readonly DEFAULT_IMG = 'assets/images/placeholder.png';
  static readonly PLUS_SIGN = '+';
  static readonly MINUS_SIGN = '-';
  static readonly BOOKING_CANCELLATION_REASONS = [
    'Conflict with another match',
    'Unfavorable weather conditions',
    'Injury or Health Issues',
    'Insufficient Players',
    'Ground/Match Quality',
    'Others'
  ];
  static readonly REASON_PLACEHOLDER = 'Select a reason';
  static readonly LOCATION_API_URL = {
    countryStateCityCommonUrl: 'https://api.countrystatecity.in/v1/countries/IN/states/',
    locationApiHeader: 'X-CSCAPI-KEY',
  }
  static readonly LOGIN_CAPTCHA_PLACEHOLDER = 'recaptcha-container-login';
  static readonly INDIAN_DIAL_CODE = '+91';
  static readonly MAX_DESCRIPTION_LIMIT = 250;
  static readonly MAX_SUBJECT_LIMIT = 50;
  static readonly DEFAULT_PLACEHOLDER = 'Select File';
  static readonly ALLOWED_FORMATS = ['jpg', 'jpeg', 'png'];
  static readonly SUPPORT_REQUEST_ID_PREFIX = 'BA2023';
  static readonly FILE_SEPARATOR = '-';
  static readonly FILE_NAME = 'screenshot-support-';
  static readonly WALLET_TRANSACTION: {
    credit: 'Received refund for',
    debit: 'Paid for',
  }
}

export class LocalStorageProperties {
  static readonly BOTTOM_SHEET = 'openSheet';
  static readonly USER_UID = 'uid';
}

export class SnackbarConstants {
  static readonly AUTO_HIDE = 3000; // time in milliseconds
  static readonly HORIZONTAL_POSITION = 'center'; // time in milliseconds
  static readonly VERTICAL_POSITION = 'bottom'; // time in milliseconds
  static readonly DEFAULT_ACTION = 'OK';
}

export class Regex {
  static readonly alphabeticAndSpace = /^[A-Za-z\s]+$/;
  static readonly alphanumeric = /^[A-Za-z0-9]+$/;
  static readonly alphanumericAndSpace = /^[A-Za-z0-9\s]+$/;
  static readonly alphabeticWithNumbersAndSpecialCharacters =
    /^[A-Za-z0-9\s\.\;\-]+$/;
  static readonly alphanumericWithSpecialCharacters = /^[A-Za-z0-9\.\,\-]+$/;
  static readonly alphanumericWithSpecialCharactersAndSpace =
    /^[A-Za-z0-9\.\,\-\s]+$/;
  static readonly customNumericMobileNumber = /^[1-9][0-9]{9}$/;
  static readonly customNumericOtp = /^[0-9]{6}$/;
}

export enum TabLabel {
  today = 0,
  tomorrow = 1,
  dayAfter = 2,
  farAway = 4
}
