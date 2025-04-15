<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
	>
		<!-- Banner right illustration -->
		<div class="w-full md:w-2/5 text-right">
			<img
				v-if="theme === 'light'"
				src="@/assets/images/bluenotebook.png"
				alt="Developer"
			/>
			<img
				v-else
				src="@/assets/images/bluenotebook-darktheme.png"
				alt="Developer"
			/>
		</div>

		<!-- Banner left contents -->
		<div class="w-full mt-4 md:w-2/5 text-left" float-left>
			<h1
				class="daftar-title text-5xl md:text-8xl xl:text-8xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
			>
				الـدّفتـــر الأزرق
			</h1>
			<p
				class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400"
			>
				وليس من قرأ كمن رأى
			</p>
		</div>
	</section>
</template>

<style scoped></style>
