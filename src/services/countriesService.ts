import axios from 'axios';

// TODO
// Otypować dane z API

export const fetchAllCountries = async (): Promise<any> => {
    return await axios.get('https://restcountries.com/v3.1/all').then((res) => {
        return res.data;
    });
};

export const fetchSingleCountry = async (code: string): Promise<any> => {
    return await axios
        .get(`https://restcountries.com/v3.1/alpha/${code}`)
        .then((res) => {
            return res.data;
        });
};
