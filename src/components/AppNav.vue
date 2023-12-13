<template>
    <nav class="nav">
        <span class="heading-text">
            Where in the world?
        </span>

        <div class="theme-switcher">
            <div class="icon-container">
                <img v-if="isDarkTheme" src="../../public/assets/light-moon.svg" class="icon" alt="Moon icon">
                <img v-else src="../../public/assets/dark-moon.svg" class="icon" alt="Moon icon">
            </div>
            <div class="current-mode">
                {{ themeName }}
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '../stores/themeStore';

const themeStore = useThemeStore();

const themeName = computed(() => {
    return (themeStore.$state.isDark ? 'Dark' : 'Light') + " mode";
})

const isDarkTheme = computed(() => {
    return themeStore.$state.isDark;
})

</script>

<style scoped>
.nav {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    background-color: var(--dark-blue);


}

.heading-text {
    font-weight: 700;

    @media (min-width: 768px) {
        font-size: 26px;
    }
}

.theme-switcher {
    display: flex;
    justify-content: space-between;
    align-content: center;

    @media (min-width: 768px) {
        font-size: 18px;
    }
}

.icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    height: 30px;
    width: 30px;
}

.current-mode {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>