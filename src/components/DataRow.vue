<template>
    <li class="data-row">
        <b class="highlighted-text">{{ data.propName ?? '' }}: </b>
        <span class="data">{{ propValue }}</span>
    </li>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { dataRow } from '../types/dataRow';

interface dataRowProps {
    data: dataRow,
}

const { data } = defineProps<dataRowProps>();

const propValue = computed(() => {
    console.log(data.propValue)

    if (typeof (data.propValue)) {

    }

    return data.propValue
})
</script>

<style scoped lang="css">
.data-row {
    width: 100%;
    text-align: start;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 4px;
    list-style-type: none;
}

.data-row b {
    font-weight: 600;
    margin-right: 6px;
}
</style>