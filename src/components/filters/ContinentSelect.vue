<template>
    <div class="dropdown">
        <button class="dropbtn">{{ selectedContinent || 'Filter by Region' }}</button>
        <ul class="dropdown-content">
            <li v-for="continent in continents" :key="continent" @click="selectContinent(continent)">
                {{ continent }}
            </li>
        </ul>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];
const selectedContinent = ref('');

function selectContinent(continent) {
    selectedContinent.value = continent;
}
</script>
  
<style scoped>
.dropbtn {
    background-color: #f1f1f1;
    color: black;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid #ccc;
}

.dropdown {
    position: relative;
    display: inline-block;
    width: 200px;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #ffffff;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content li {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    white-space: nowrap;
}

.dropdown-content li:hover {
    background-color: #ddd;
    cursor: pointer;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>
  