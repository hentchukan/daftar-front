<script>

import BackOfficeVue from '../components/backoffice/BackOffice.vue';
import feather from 'feather-icons';

export default {
	name: 'BackDoor',
	components: {
		BackOfficeVue
	},
	data: () => {
		return {};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<BackOfficeVue />
		</div>
		
	</div>
</template>

<style scoped></style>