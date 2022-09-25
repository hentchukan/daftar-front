<script>
import feather from 'feather-icons';
import ArticlesFilter from './ArticlesFilter.vue';
import ArticleSingle from './ArticleSingle.vue';
import axios from 'axios';

export default {
	components: { ArticleSingle, ArticlesFilter },
	
	data: () => {
		return {
			articles : [],
			articlesHeading: 'المقالات',
			selectedCategory: '',
			titleSearch: '',
			filters: {},
			from: 1900,
			to: 2022
		};
	},
	methods: {
		// Filter articles by category
		filterByCategory(category) {
			console.log("Filter by Category "+category);
			this.filters.category = category;
			this.filter();
		},
		filterByYear(year) {
			console.log("Filter by Year "+year);
			this.filters.year = year;
			this.filter();
		},
		filterByCountry(country) {
			console.log("Filter by Country "+country);
			this.filters.country = country;
			this.filter();
		},
		// Filter articles by title search
		filterByTitle(event) {
			// let article = new RegExp(this.searchArticle, 'i');
			// return this.articles.filter((el) => el.title.match(article));
			console.log("Filter by Title "+event);
			this.filters.filmTitle = this.titleSearch;
			this.filter();
		},
		filter() {
			console.log("Filter "+this.filters);
			axios
				.post('http://localhost:8181/v1/articles/overviews', this.filters)
				.then(response => {
					this.articles = response.data;
					console.log("Search result: " + this.articles.length + " items");
			})
		}
	},
	mounted() {
		feather.replace();
		axios
			.get('http://localhost:8181/v1/articles/overviews')
			.then(response => {
				this.articles = response.data;
			})
	}
};
</script>

<template>
	<!-- Articles grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Articles grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ articlesHeading }}
			</p>
		</div>

		<!-- Filter and search articles -->
		<div class="mt-10 sm:mt-10">
			<h3
				class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-xl
					font-normal
					mb-4
				"
			>
				اِبحث عن فِلمٍ باسمه أو بإحدى سماتِه
			</h3>
			<div
				class="
					flex
					justify-between
					border-b border-primary-light
					dark:border-secondary-dark
					pb-3
					gap-2
				"
			>
				<div class="flex justify-between gap-2">
					<span
						class="
							hidden
							sm:block
							bg-primary-light
							dark:bg-ternary-dark
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							">
						<i data-feather="search" 
							class="text-ternary-dark dark:text-ternary-light"
							@click="filterByTitle"></i>
					</span>
					<input
						v-model="titleSearch"
						class="font-general-medium
						pl-3
						pr-1
						sm:px-4
						py-2
						border-1 border-gray-200
						dark:border-secondary-dark
						rounded-lg
						text-sm
						sm:text-md
						bg-secondary-light
						dark:bg-ternary-dark
						text-primary-dark
						dark:text-ternary-light
						"
						id="name"
						name="name"
						type="search"
						required=""
						placeholder="عنوانُ الفِلمِ"
						aria-label="Name" 
						@keyup.enter="this.filterByTitle()"
					/>
				</div>
				<ArticlesFilter 
					@filterCategory="this.filterByCategory($event)" 
					@filterYear="this.filterByYear($event)" 
					@filterCountry="this.filterByCountry($event)" />
			</div>
		</div>

		<!-- Articles grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
			<ArticleSingle
				v-for="article in articles"
				:key="article.id"
				:article="article"
			/>
		</div>
	</section>
</template>

<style scoped></style>
