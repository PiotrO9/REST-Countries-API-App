<template>
    <div class="singleCountry">
        <div class="singleCountry-content">
            <div class="back-button-wrapper">
                <button class="back-button" @click="backToCountriesList">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    <span class="text">
                        Back
                    </span>
                </button>
            </div>
            <div class="datas-wrapper">
                <div class="left-section">
                    <img :src="countryDatas?.flags.png" class="flag" :alt="countryDatas?.name.common + ' flag'">
                </div>
                <div class="right-section">
                    <h1 class="heading">
                        {{ countryDatas?.name.common }}
                    </h1>
                    <div class="data-sections" v-if="countryDatas">
                        <SingleCountryDataSection :datas="leftSectionData" />
                        <SingleCountryDataSection :datas="rightSectionData" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { fetchSingleCountry } from '../../services/countriesService';
import SingleCountryDataSection from './SingleCountryDataSection.vue';
import type { dataRow } from '../../types/dataRow';
import type { countryData } from '../../types/countriesDatas';

const router = useRouter();
const route = useRoute();
const countryNameParam: string = route.params.name as string;
const countryDatas = ref<countryData | null>(null);

const leftSectionData = computed(() => [
    {
        propName: 'Native Name',
        propValue: countryDatas.value?.name.common as string
    },
    {
        propName: 'Population',
        propValue: countryDatas.value?.population as number
    },
    {
        propName: 'Europe',
        propValue: countryDatas.value?.region as string
    },
    {
        propName: 'Sub Region',
        propValue: countryDatas.value?.subregion as string
    },
    {
        propName: 'Capital',
        propValue: countryDatas.value?.capital[0] as string
    }
])

const rightSectionData = computed(() => [
    {
        propName: 'Top level Domain',
        propValue: countryDatas.value?.tld[0] as string
    },
    {
        propName: 'Currencies',
        propValue: countryDatas.value?.currencies as object
    },
    {
        propName: 'Languages',
        propValue: countryDatas.value?.languages as object
    },
])

const backToCountriesList = (): void => {
    router.push({ path: '/' })
}

onMounted(async () => {
    countryDatas.value = await fetchSingleCountry(countryNameParam).then((res: any) => { return res[0] });
})

</script>

<style scoped lang="css">
.singleCountry {
    padding: 20px;
    background-color: var(--second-background-color);
    height: calc(100% - 60px);
}

.singleCountry-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.singleCountry-content .back-button-wrapper {
    width: 100%;
    display: flex;
    align-items: flex-start;
}

.singleCountry-content .back-button-wrapper .back-button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    padding: 8px 20px;
    background-color: var(--background-color);
    color: var(--text-color);
    gap: 12px;
    border-radius: 4px;
    -webkit-box-shadow: 0px 0px 25px -9px black;
    -moz-box-shadow: 0px 0px 25px -9px black;
    box-shadow: 0px 0px 25px -9px black;
}

.singleCountry-content .back-button-wrapper .back-button .icon {
    fill: var(--text-color);
    height: 20px;
    width: 20px;
}

.datas-wrapper .left-section {}

.datas-wrapper .right-section {}

.datas-wrapper .right-section .heading {
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 20px;
}

.datas-wrapper .right-section .data-sections {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.singleCountry-content .flag {
    margin: 40px 0px 30px 0px;
    aspect-ratio: 16/9;
}
</style>