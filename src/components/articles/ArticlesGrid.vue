<script>
import feather from 'feather-icons';
import ArticlesFilter from './ArticlesFilter.vue';
import ArticleCard from './ArticleCard.vue';
import axios from 'axios';
import {DAFTAR_BACK_BASE_URL} from "../../../config";

export default {
	components: { ArticleSingle: ArticleCard, ArticlesFilter },
	
	data: () => {
		return {
			articles : [],
			articlesHeading: 'المقالات',
			selectedCategory: '',
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
    filterByDirector(director) {
      console.log("Filter by Director "+director);
      this.filters.director = director;
      this.filter();
    },
    filterByRating(rating) {
      console.log("Filter by Ratings "+rating);
      this.filters.rating = rating;
      this.filter();
    },
    filterByTitle(title) {
      console.log("Filter by Title "+title);
      this.filters.filmTitle = title;
      this.filter();
    },
		filter() {
			console.log("Filter "+this.filters);
			axios
				.post(DAFTAR_BACK_BASE_URL + '/v1/articles/overviews', this.filters)
				.then(response => {
					this.articles = response.data;
					this.articles = response.data;
					console.log("Search result: " + this.articles.length + " items");
			})
		}
	},
	mounted() {
    console.log("URL " + DAFTAR_BACK_BASE_URL);
		feather.replace();
		axios
			.get(DAFTAR_BACK_BASE_URL + '/v1/articles/overviews')
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
		<div class="text-center hidden">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ articlesHeading }}
			</p>
		</div>

		<!-- Filter and search articles -->

				<ArticlesFilter 
					@filterCategory="this.filterByCategory($event)" 
					@filterYear="this.filterByYear($event)" 
					@filterCountry="this.filterByCountry($event)"
        @filterDirectors="this.filterByDirector($event)"
        @filterRating="this.filterByRating($event)"
        @filterTitle="this.filterByTitle($event)"/>

		<!-- Articles grid -->
		<div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 mt-6 gap-1 sm:gap-3">
			<ArticleSingle
				v-for="article in articles"
				:key="article.id"
				:article="article"
        class="w-full max-w-[130px] sm:max-w-full mx-auto"
			/>
		</div>
	</section>
</template>

<style scoped>

</style>
