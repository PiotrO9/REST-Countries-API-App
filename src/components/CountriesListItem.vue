<template>
    <li class="country" @click="goToCountryDetails">
        <img :src="countryData.flags.png" class="flag" :alt="countryData.name.common + ' flag'">
        <div class="country-datas">
            <span class="heading-name">
                {{ countryData.name.common }}
            </span>
            <div class="data-row">
                <b class="highlighted-text">Population: </b>
                <span class="data">{{ countryData.population ?? '' }}</span>
            </div>
            <div class="data-row">
                <b class="highlighted-text">Region: </b>
                <span class="data">{{ countryData.continents[0] ?? '' }}</span>
            </div>
            <div class="data-row">
                <b class="highlighted-text">Capital: </b>
                <span class="data">{{ capital }}</span>
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { useRouter } from 'vue-router';
import type { countryData } from '../types/countriesDatas'

type countriesListItemProps = {
    countryData: countryData;
}

const { countryData } = defineProps<countriesListItemProps>();
const router = useRouter();

const capital = computed(() => {
    return countryData.capital ? countryData.capital[0] : "No capital";
});

const goToCountryDetails = (): void => {
    router.push({ path: `/${countryData.cca3}` })
}
</script>

<style scoped lang="css">
.country {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    list-style-type: none;
    cursor: pointer;
}

.country-datas {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px 40px 20px;
}

.heading-name {
    width: 100%;
    font-size: 24px;
    text-align: start;
    font-weight: 900;
    margin-bottom: 20px;
}

.data-row {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 4px;
    text-align: start;
}

.data-row b {
    margin-right: 6px;
    font-weight: 600;
}

.flag {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    aspect-ratio: 16/9;
}
</style>