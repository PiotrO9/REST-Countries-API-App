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

interface CurrencyDetail {
    name: string;
}

type CurrencyMap = {
    [key: string]: CurrencyDetail;
};

type genericObjectDataUnit = {
    [key: string]: string
}

const { data } = defineProps<dataRowProps>();

const propValue = computed(() => {
    if (typeof (data.propValue) == 'object') {
        if (data.propName == 'Currencies') {
            let currenciesArray: string[] = [];

            Object.values(data.propValue as CurrencyMap).forEach((currency: CurrencyDetail) => {
                currenciesArray.push(currency.name);
            });

            return currenciesArray.join(', ');
        }
        else if (data.propName == 'Languages') {
            let languagesArray: string[] = [];

            Object.values(data.propValue as genericObjectDataUnit).forEach((language: string) => {
                languagesArray.push(language)
            })

            return languagesArray.join(', ');
        }
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