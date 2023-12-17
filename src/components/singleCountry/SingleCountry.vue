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
                    <div class="neighbours-wrapper" v-if="neighbours">
                        <span class="neighbours-heading">Border Countries: </span>
                        <ul class="neighbours-list">
                            <SingleCountryNeighbour v-for="(neighbour, index) in neighbours" :key="index"
                                :neighbour="neighbour" />
                        </ul>
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
import SingleCountryNeighbour from './SingleCountryNeighbour.vue';
import type { countryData } from '../../types/countriesDatas';
import type { neighbourCountryData } from '../../types/neighbourCountryData';

const router = useRouter();
const route = useRoute();
const countryNameParam: string = route.params.name as string;
const countryDatas = ref<countryData | null>(null);
const neighbours = ref<neighbourCountryData[]>([]);

onMounted(async () => {
    try {
        const primaryCountryData = await fetchSingleCountry(countryNameParam);
        countryDatas.value = primaryCountryData;

        if (countryDatas.value?.borders) {
            for (const countryCode of countryDatas.value.borders) {
                const borderCountryData: countryData = await fetchSingleCountry(countryCode);
                neighbours.value?.push({
                    countryCode: countryCode,
                    countryName: borderCountryData.name.common
                })
            }
        }
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
})

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


</script>

<style scoped lang="css">
.singleCountry {
    padding: 20px;
    background-color: var(--second-background-color);
    min-height: max-content;
    height: 100%;
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
    max-width: 1680px;
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

    @media (min-width: 1024px) {
        padding: 10px 25px;
        font-size: 18px;
        margin-top: 30px;
    }
}

.singleCountry-content .back-button-wrapper .back-button .icon {
    fill: var(--text-color);
    height: 20px;
    width: 20px;
}

.datas-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1680px;
    width: 80%;

    @media (min-width: 768px) {
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 50px;
    }

    @media (min-width: 1024px) {
        gap: 100px;
        margin-top: 30px;
    }
}

.datas-wrapper .left-section {
    @media (min-width: 768px) {
        width: calc((100% - 50px) / 2);
    }

    @media (min-width: 1024px) {
        width: calc((100% - 100px) / 2);
    }
}

.datas-wrapper .right-section {
    @media (min-width: 768px) {
        width: calc((100% - 50px) / 2);
    }

    @media (min-width: 1024px) {
        width: calc((100% - 100px) / 2);
    }
}

.datas-wrapper .right-section .heading {
    font-weight: 900;
    color: var(--text-color);
    margin-bottom: 20px;

    @media (min-width: 1024px) {
        font-size: 36px;
    }
}

.datas-wrapper .right-section .data-sections {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
    }
}

.singleCountry-content .flag {
    margin: 40px 0px 30px 0px;
    aspect-ratio: 16/9;
    width: 100%;

}

.neighbours-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
        gap: 20px;
        margin-top: 50px;
    }
}

.neighbours-heading {
    color: var(--text-color);
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;

    @media (min-width: 1024px) {
        font-size: 24px;
    }
}

.neighbours-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media (min-width: 1024px) {
        justify-content: center;
    }
}
</style>