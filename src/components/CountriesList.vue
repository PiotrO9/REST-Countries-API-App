<template>
    <ul class="countries-list">
        <CountriesListItem v-for="(countryData, index) in countriesDatas" :key="index" :countryData="countryData" />
    </ul>
</template>

<script setup lang="ts">
import CountriesListItem from './CountriesListItem.vue';
import { onMounted, ref } from 'vue';
import { fetchAllCountries } from '../services/countriesService';

const countriesDatas = ref<any>(null);

onMounted(async () => {
    countriesDatas.value = await fetchAllCountries().then((res: any) => { return res });
})
</script>

<style scoped lang="css">
.countries-list {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
    column-gap: 40px;
    padding: 30px 0px 0px;
    overflow-x: scroll;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @media (min-width: 1920px) {
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }
}

.countries-list::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
</style>