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

export const fetchFiltredCountries = async (
    name: string,
    region: string
): Promise<countryData[]> => {
    let result: countryData[] = [];
    if (name) {
        result = await axios
            .get(`https://restcountries.com/v3.1/name/${name}`)
            .then((res) => {
                return res.data[0];
            });
    }

    if (result && region) {
        result = result.filter((country) => country.region === region);
    } else if (region) {
        result = await axios
            .get(`https://restcountries.com/v3.1/region/${region}`)
            .then((res) => {
                return res.data[0];
            });
    }

    return result;
};
