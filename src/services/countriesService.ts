import axios from 'axios';
import { countryData } from '../types/countriesDatas';

export const fetchAllCountries = async (): Promise<countryData[]> => {
    return await axios.get('https://restcountries.com/v3.1/all').then((res) => {
        return res.data;
    });
};

export const fetchSingleCountry = async (
    code: string
): Promise<countryData> => {
    return await axios
        .get(`https://restcountries.com/v3.1/alpha/${code}`)
        .then((res) => {
            return res.data[0];
        });
};
