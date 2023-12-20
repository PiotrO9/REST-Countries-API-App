<template>
    <div class="dropdown">
        <button class="dropbtn">{{ selectedContinent || defaultText }}</button>
        <ul class="dropdown-content">
            <li v-for="continent in continents" :key="continent" @click="selectContinent(continent)">
                {{ continent }}
            </li>
        </ul>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useCountriesStore } from '../../stores/countriesStore';

const defaultText = 'Filter by Region';
const countriesStore = useCountriesStore();

const continents: string[] = ["Africa", "America", "Asia", "Europe", "Oceania"];
const selectedContinent = ref<string>('');

function selectContinent(continent: string): void {
    if (selectedContinent.value === continent) {
        selectedContinent.value = ''
        countriesStore.setRegion('');
    } else {
        countriesStore.setRegion(continent);
        selectedContinent.value = continent;
    }

    countriesStore.getFiltredCountries()
}
</script>
  
<style scoped>
.dropbtn {
    background-color: var(--background-color);
    color: var(--text-color);
    font-weight: 600;
    padding: 16px 24px;
    border: none;
    outline: none;
    cursor: pointer;
    width: 152px;
    max-width: 200px;
    text-align: left;
    border-radius: 6px;
    border-bottom-right-radius: 6px;
    box-sizing: content-box;
}

.dropbtn::after {
    content: '';
    position: absolute;
    background-color: var(--second-background-color);
    width: 200px;
    height: 5px;
    bottom: -10px;
    left: 0;
}

.dropdown {
    position: relative;
    display: inline-block;
    width: 200px;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--background-color);
    width: 100%;
    z-index: 1;
    border-radius: 6px;
    padding: 8px 0px;
    margin-top: 5px;
}

.dropdown-content li {
    color: var(--text-color);
    padding: 8px 16px;
    text-decoration: none;
    display: block;
    white-space: nowrap;
    font-weight: 600;
}

.dropdown-content li:hover {
    cursor: pointer;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>
  