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
    width: 152px;
    max-width: 200px;
    text-align: left;
    background-color: var(--background-color);
    color: var(--text-color);
    font-weight: 600;
    padding: 16px 24px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: var(--border-radius);
    border-bottom-right-radius: 6px;
    box-sizing: content-box;
}

.dropbtn::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 5px;
    background-color: rgba(0, 0, 0, 0);
    bottom: -10px;
    left: 0;
}

.dropdown {
    width: 200px;
    display: inline-block;
    position: relative;
}

.dropdown-content {
    width: 100%;
    display: none;
    position: absolute;
    padding: 8px 0px;
    margin-top: 5px;
    background-color: var(--background-color);
    z-index: 1;
    border-radius: var(--border-radius);
}

.dropdown-content li {
    display: block;
    padding: 8px 16px;
    color: var(--text-color);
    text-decoration: none;
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
  