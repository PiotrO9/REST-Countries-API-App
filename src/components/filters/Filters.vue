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
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (min-width: 568px) {
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>