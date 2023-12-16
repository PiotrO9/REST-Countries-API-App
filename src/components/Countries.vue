<template>
    <div class="countries">
        <Filters />
    </div>
</template>

<script setup lang="ts">
import Filters from './filters/Filters.vue';
</script>

<style scoped lang="css">
.countries {
    height: 100%;
    width: 100%;
    padding: 30px 20px;
    background-color: var(--second-background-color);
}
</style>