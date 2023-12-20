import { defineStore } from 'pinia';

interface ThemeState {
    isDark: boolean;
}

export const useThemeStore = defineStore('theme', {
    state: (): ThemeState => ({
        isDark: true,
    }),
    actions: {
        toggleTheme(): void {
            this.isDark = !this.isDark;
            localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
            document.documentElement.setAttribute(
                'data-theme',
                this.isDark ? 'dark' : 'light'
            );
        },
        initializeTheme(): void {
            const prefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches;
            const savedTheme = localStorage.getItem('theme');

            if (savedTheme) {
                this.isDark = savedTheme === 'dark';
            } else {
                this.isDark = prefersDark;
            }

            document.documentElement.setAttribute(
                'data-theme',
                this.isDark ? 'dark' : 'light'
            );
        },
    },
});
