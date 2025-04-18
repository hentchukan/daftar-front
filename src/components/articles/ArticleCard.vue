<script>
import StarRating from "@/components/reusable/StarRating.vue";

export default {
  components: {StarRating},
  props: ['article'],
};
</script>

<template>
  <router-link
      :to="{path: '/articles/single-article/' + article.id}"
      class="flex flex-col h-full rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
      aria-label="Single Article"
  >
    <div class="aspect-w-4 aspect-h-2 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9">
      <img
          :src="article.img"
          :alt="article.title"
          class="object-contain w-full h-full rounded-t-xl"
      />
    </div>
    <div class="flex flex-col flex-grow justify-end text-center items-center
 px-6 py-6">
      <p class="film-meta-font sm:text-xl text-ternary-dark dark:text-ternary-light mb-1">
        {{ article.title }}
      </p>
      <span class="base-font text-sm sm:text-lg text-ternary-dark dark:text-ternary-light">
        {{ article.film }}
      </span>
      <StarRating class="flex pt-4" :rating="article.rating" />
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
  .w-100 {
    max-height: 20rem;
    max-width: 20rem;
    width: 100%;
  }
</style>
