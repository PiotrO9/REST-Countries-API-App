<template>
    <li class="country">
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

const { countryData } = defineProps(['countryData']);
const capital = computed(() => {
    return countryData.capital ? countryData.capital[0] : "No capital";
});
</script>

<style scoped lang="css">
.country {
    height: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    border-radius: 6px;
}

.country-datas {
    padding: 30px 20px 40px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    text-align: start;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 4px;
}

.data-row b {
    font-weight: 600;
    margin-right: 6px;
}

.flag {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    aspect-ratio: 16/9;
}
</style>