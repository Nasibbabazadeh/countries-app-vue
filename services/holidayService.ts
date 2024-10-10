import type { ICountryHolidays, IHoliday } from "./types";

  export const fetchHolidays = async (): Promise<IHoliday[]> => {
    const config = useRuntimeConfig();
    try {
      const response = await fetch(`${config.public.baseUrl}/NextPublicHolidaysWorldwide`);
      if (!response.ok) {
        throw new Error('Failed to fetch holiday data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching holiday data:', error);
      throw error;
    }
  };
  


export const fetchCountryHolidays = async (countryCode: string, year: number): Promise<{ countryName: string, holidays: ICountryHolidays[] }> => {
  const config = useRuntimeConfig();
  try {
    const response = await fetch(`${config.public.baseUrl}/PublicHolidays/${year}/${countryCode}`);
    if (!response.ok) {
      throw new Error('Failed to fetch holiday data');
    }
    const holidays = await response.json();
    return {
      countryName: holidays[0]?.country || 'Unknown Country',
      holidays: holidays || []
    };
  } catch (error) {
    console.error('Error fetching holiday data:', error);
    throw error;
  }
};
