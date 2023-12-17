import { defineStore } from 'pinia';
import { countryData } from '../types/countriesDatas';
import {
    fetchAllCountries,
    fetchFiltredCountries,
} from '../services/countriesService';

interface CountriesState {
    countries: null | countryData[];
}

export const useCountriesStore = defineStore('countries', {
    state: (): CountriesState => ({
        countries: null,
    }),
    actions: {
        async getAllCountries(): Promise<void> {
            this.countries = await fetchAllCountries();
        },
        async getFiltredCountries(name: string, region: string): Promise<void> {
            this.countries = await fetchFiltredCountries(name, region);
        },
    },
});
