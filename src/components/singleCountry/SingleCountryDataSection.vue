<template>
    <ul class="data-section">
        <DataRow v-for="(data, index) in datas" :key="index" :data="data" />
    </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import DataRow from '../DataRow.vue';
import type { dataRow } from '../../types/dataRow';

interface singleCOuntryDataSectionProps {
    datas: dataRow[];
}

const { datas } = defineProps<singleCOuntryDataSectionProps>();
</script>

<style scoped lang="css">
.data-section {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
</style>