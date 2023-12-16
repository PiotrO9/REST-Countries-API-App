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
    height: 100%;
    width: 100%;
    padding: 30px 20px;
    background-color: var(--second-background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>