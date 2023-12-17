import { createApp } from 'vue';
import './globalStyles.css';
import App from './App.vue';
import router from '../router.ts';
import { createPinia } from 'pinia';
import { useThemeStore } from './stores/themeStore.ts';
import { useCountriesStore } from './stores/countriesStore.ts';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');

const themeStore = useThemeStore();
const countriesStore = useCountriesStore();
themeStore.initializeTheme();
countriesStore.getAllCountries();
