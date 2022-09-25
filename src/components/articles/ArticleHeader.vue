<script>
import feather from 'feather-icons';

export default {
	props: ['singleArticleHeader'],
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div>
		<!-- Article heading and meta info -->
		<p
			class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
		>
			{{ singleArticleHeader.filmTitle }}
		</p>
		<div class="flex">
			<div class="flex items-center mr-10">
				<i
					data-feather="clock"
					class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
				></i>
				<span
					class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
					>{{ singleArticleHeader.articleDate }}</span
				>
			</div>
			<div class="flex items-center">
				<i
					data-feather="tag"
					class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
				></i>
				<span
					class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
					v-if="singleArticleHeader.articleTags">{{ singleArticleHeader.articleTags.join(', ') }}</span
				>
			</div>
		</div>
	</div>
</template>
