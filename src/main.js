import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';

import "vue3-toastify/dist/index.css";
import CKEditor from '@ckeditor/ckeditor5-vue';
import BackToTop from 'vue-backtotop';

const feather = require('feather-icons');
feather.replace();

const app = createApp(App);

app.config.globalProperties.$formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const day = date.getDate(); // Extracts the day (30)
    const year = date.getFullYear(); // Extracts the year (2022)

    // Get the month name in Arabic
    const month = new Intl.DateTimeFormat("ar-LB", { month: "long" }).format(date);

    return [year,  month, day]; // Ensure correct order: "30 مايو 2022"
};

app.use(router)
	.use(BackToTop)
	.use( CKEditor )
	.mount('#app');

const appTheme = localStorage.getItem('theme');

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
	appTheme === 'dark' &&
	document.querySelector('body').classList.contains('app-theme')
) {
	document.querySelector('body').classList.add('bg-primary-dark');
} else {
	document.querySelector('body').classList.add('bg-secondary-light');
}
