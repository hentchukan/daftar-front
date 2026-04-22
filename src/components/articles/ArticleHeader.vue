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
    }
  }
};
</script>

<template>
	<div class="pr-0 sm:pr-10 pl-0 sm:pl-10">

    <!-- Article heading and meta info -->
    <div class="flex justify-stretch">
      <StarRating class="flex mr-4" :rating="singleArticleHeader.ratingDetails" />
      <span class="w-full film-title-font text-right text-4xl sm:text-5xl font-bold text-primary-dark dark:text-primary-light rtl:text-right">
        {{ singleArticleHeader.articleTitle }}
      </span>
    </div>

<!--    <div class="flex rtf mt-2 gap-2">
      <i data-feather="tag" class="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
      <span
        class="font-general-medium text-right ml-2 leading-none text-primary-dark dark:text-primary-light"
        v-if="singleArticleHeader.articleTags">{{ singleArticleHeader.articleTags.join('، ') }}
      </span>
    </div>-->
    <div class="flex rtf sm:mr-4 sm:pt-2">
      <i data-feather="clock" class="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
      <span  v-for="(part, index) in $formatDate(singleArticleHeader.articleDate)" :key="index"
             class="film-meta-font ml-2 leading-none text-primary-dark dark:text-primary-light rtl:text-right"
             :dir="isNumber(part) ? 'ltr' : 'rtl'">
                      {{ part }}
        </span>
    </div>

	</div>
</template>
