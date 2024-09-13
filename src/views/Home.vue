<script>
import AppBanner from '@/components/shared/AppBanner';
import ArticlesGrid from '../components/articles/ArticlesGrid.vue';
import Button from '../components/reusable/Button.vue';


export default {
	name: 'Home',
	components: {
    AppBanner,
    ArticlesGrid,
    Button
},
};
</script>

<template>
	<div class="container mx-auto">
		<!-- Banner -->
		<AppBanner class="mb-5 sm:mb-8" />

		<!-- Articles -->
		<ArticlesGrid />

		<!-- Load more articles button -->
		<div class="mt-10 sm:mt-20 flex justify-center">
			<router-link
				to="/articles"
				class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
				aria-label="More Articles"
			>
				<Button title="More Articles" />
			</router-link>
		</div>
	</div>
</template>

<style scoped></style>
