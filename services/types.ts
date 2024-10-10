export interface ICountries {
    countryCode: string,
    name: string
   }

export interface IHoliday {
    date: string;
    localName: string;
    name: string;
    countryCode: string;
    country: string;
    counties : null;
    launchYear : null;
    fixed : boolean;
    global : boolean;
    types : Array<string>
  }
  
export interface ICountryInfo {
    commonName: string,
    officialName: string,
    countryCode: string,
    region: string,
    borders: Array<string>
  }

export interface ICountryHolidays{
    date: string
    localName: string,
    name: string,
    countryCode: string,
    global: true,
    counties: Array<string>,
    launchYear: number
    types: Array<string>
}