<script>
import feather from 'feather-icons';
import StarRating from "@/components/reusable/StarRating.vue";

export default {
  components: {StarRating},
	props: ['singleArticleHeader'],
	updated() {
		feather.replace();
	},
  methods: {}
};
</script>

<template>
	<div>

    <!-- Article heading and meta info -->
    <div class="flex justify-stretch">
      <StarRating class="flex mr-4" :rating="singleArticleHeader.ratingDetails" />
      <span class="w-full film-title-font text-right text-4xl sm:text-5xl font-bold text-primary-dark dark:text-primary-light rtl:text-right">
        {{ singleArticleHeader.filmTitle }}
      </span>
    </div>

    <div class="flex rtf mt-1">
      <i
        data-feather="tag"
        class="w-4 h-4 text-ternary-dark dark:text-ternary-light">
      </i>
      <span
        class="font-general-medium text-right ml-2 leading-none text-primary-dark dark:text-primary-light"
        v-if="singleArticleHeader.articleTags">{{ singleArticleHeader.articleTags.join('، ') }}
      </span>
    </div>

	</div>
</template>
