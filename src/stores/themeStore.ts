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
            // TODO
            // Add reading theme mode preference from system settings

            const currentTheme = this.isDark ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
        },
    },
});
