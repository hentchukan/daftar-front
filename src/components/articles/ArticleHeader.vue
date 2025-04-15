<script>
import feather from 'feather-icons';
import StarRating from "@/components/reusable/StarRating.vue";

export default {
  components: {StarRating},
	props: ['singleArticleHeader'],
	updated() {
		feather.replace();
	},
  methods: {
    isNumber(part) {
      return /^\d+$/.test(part); // Checks if part consists only of digits
    },
  }
};
</script>

<template>
	<div>

    <!-- Article heading and meta info -->
    <div class="flex items-center gap-3">
      <StarRating class="flex" :rating="singleArticleHeader.ratingDetails" />
      <span
              class="film-title-font  text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light rtl:text-right">
        {{ singleArticleHeader.filmTitle }}
      </span>

    </div>

    <div class="flex">
			<div class="flex items-center mr-10">
				<i
					data-feather="clock"
					class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
				></i>
				<span  v-for="(part, index) in $formatDate(singleArticleHeader.articleDate)" :key="index"
					class="film-meta-font ml-2 leading-none text-primary-dark dark:text-primary-light rtl:text-right"
          :dir="isNumber(part) ? 'ltr' : 'rtl'">
                      {{ part }}
        </span>
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
