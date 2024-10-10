import type { ICountries, ICountryInfo } from "./types";

export const CountryService = async (): Promise<ICountries[]> => {
  const config = useRuntimeConfig();
  try {
    const response = await fetch(`${config.public.baseUrl}/AvailableCountries`);
    if (!response.ok) {
      throw new Error('Failed to fetch country data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching country data:', error);
    throw error;
  }
};


export const fetchCountryInfo = async(countryCode : string):Promise<ICountryInfo[]> =>{
  const config = useRuntimeConfig();
  try {
    const response = await fetch(`${config.public.baseUrl}/CountryInfo/${countryCode}`);
    if (!response.ok) {
      throw new Error('Failed to fetch country info');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching country data:', error);
    throw error;
  }
}