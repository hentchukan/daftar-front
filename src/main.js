import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';

import "vue3-toastify/dist/index.css";
import CKEditor from '@ckeditor/ckeditor5-vue';
import BackToTop from 'vue-backtotop';

const feather = require('feather-icons');
feather.replace();

createApp(App)
	.use(router)
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
