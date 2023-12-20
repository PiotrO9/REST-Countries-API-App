<template>
    <li class="neighbour">
        <a class="neighbour-link" :href="`/${neighbour.countryCode}`">
            <button class="neighbour-button">
                {{ neighbour.countryName }}
            </button>
        </a>
    </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { neighbour } = defineProps(['neighbour']);
</script>

<style scoped lang="css">
.neighbour {
    list-style-type: none;
}

.neighbour-button {
    padding: 4px 15px;
    color: var(--text-color);
    background-color: var(--background-color);
    outline: none;
    border: none;
    border-radius: 4px;
    -webkit-box-shadow: 0px 0px 25px -9px black;
    -moz-box-shadow: 0px 0px 25px -9px black;
    box-shadow: 0px 0px 25px -9px black;
    cursor: pointer;

    @media (min-width: 1024px) {
        padding: 6px 20px;
        font-size: 18px;
    }
}
</style>