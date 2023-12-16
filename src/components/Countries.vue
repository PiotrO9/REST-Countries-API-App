<template>
    <div class="countries">
        <Filters :countriesDatas="countriesDatas" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Filters from './filters/Filters.vue';
import { fetchAllCountries } from '../services/countriesService.ts';

// TODO
// Uzupelnic typy

const countriesDatas = ref<any>(null);

onMounted(() => {
    countriesDatas.value = fetchAllCountries().then((res: any) => { console.log(res); return res });
})
</script>

<style scoped lang="css">
.countries {
    height: 100%;
    width: 100%;
    padding: 30px 20px;
    background-color: var(--second-background-color);
}
</style>