<template>
    <div class="countries">
        <Filters />
        <CountriesList />
    </div>
</template>

<script setup lang="ts">
import Filters from './filters/Filters.vue';
import CountriesList from './CountriesList.vue';
</script>

<style scoped lang="css">
.countries {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
    background-color: var(--second-background-color);
}
</style>