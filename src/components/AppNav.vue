<template>
    <nav class="nav">
        <div class="nav-content">
            <span class="heading-text">
                Where in the world?
            </span>

            <div class="theme-switcher" @click="switchTheme">
                <div class="icon-container">
                    <img v-if="isDark" src="../../public/assets/light-moon.svg" class="icon" alt="Moon icon">
                    <img v-else src="../../public/assets/dark-moon.svg" class="icon" alt="Moon icon">
                </div>
                <div class="current-mode">
                    {{ themeName }}
                </div>
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

const isDark = computed(() => { return themeStore.$state.isDark })

const switchTheme = (): void => {
    themeStore.toggleTheme();
}

</script>

<style scoped>
.nav {
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
    color: var(--text-color);
    -webkit-box-shadow: 1px 42px 33px -26px var(--box-shadow-color);
    -moz-box-shadow: 1px 42px 33px -26px var(--box-shadow-color);
    box-shadow: 0px 22px 33px -10px var(--box-shadow-color);

    @media (min-width: 768px) {
        padding: 20px;
    }
}

.nav-content {
    width: 100%;
    max-width: 1680px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    cursor: pointer;

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