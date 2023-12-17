<template>
    <div class="filters">
        <SearchBar />
        <ContinentSelect />
    </div>
</template>

<script setup lang="ts">
import ContinentSelect from './ContinentSelect.vue';
import SearchBar from './SearchBar.vue';
</script>

<style scoped lang="css">
.filters {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 1680px;

    @media (min-width: 568px) {
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>