<template>
    <nav class="nav">
        <div class="nav-content">
            <span class="heading-text">Where in the world?</span>
            <div class="theme-switcher" @click="switchTheme">
                <div class="icon-container">
                    <img :src="iconPath" class="icon" alt="Theme icon">
                </div>
                <div class="current-mode">{{ themeName }}</div>
            </div>
        </div>
    </nav>
</template>
  
<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '../stores/themeStore';

const themeStore = useThemeStore();

const themeName = computed(() =>
    `${themeStore.$state.isDark ? 'Dark' : 'Light'} mode`
);

const iconPath = computed(() =>
    `../../public/assets/${themeStore.$state.isDark ? 'light' : 'dark'}-moon.svg`
);

const switchTheme = () => {
    themeStore.toggleTheme();
};
</script>
  
<style scoped lang="css">
.nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background-color: var(--background-color);
    color: var(--text-color);
    box-shadow: 0px 22px 33px -10px var(--box-shadow-color);

    @media (min-width: 768px) {
        padding: 20px;
    }
}



.nav-content {
    width: 100%;
    max-width: 1680px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    align-items: center;
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
    width: 30px;
    height: 30px;
}

.current-mode {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
  