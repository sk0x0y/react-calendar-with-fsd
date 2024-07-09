export interface HolidayInterface {
  date: Date;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  countries?: string[];
  launchYear?: number;
  type: string[];
}
