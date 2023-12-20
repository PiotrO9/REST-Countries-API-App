import { defineStore } from 'pinia';
import { countryData } from '../types/countriesDatas';
import {
    fetchAllCountries,
    fetchFiltredCountries,
} from '../services/countriesService';

interface CountriesState {
    countries: null | countryData[];
    region: string;
    name: string;
}

export const useCountriesStore = defineStore('countries', {
    state: (): CountriesState => ({
        countries: null,
        region: '',
        name: '',
    }),
    actions: {
        async getAllCountries(): Promise<void> {
            this.countries = await fetchAllCountries();
        },
        async getFiltredCountries(): Promise<void> {
            if (this.region || this.name) {
                this.countries = await fetchFiltredCountries(
                    this.name,
                    this.region
                );
            } else {
                this.getAllCountries();
            }
        },
        setRegion(region: string): void {
            this.region = region;
        },
        setName(name: string): void {
            this.name = name;
        },
    },
    getters: {
        getCountries(): null | countryData[] {
            return this.countries;
        },
    },
});
