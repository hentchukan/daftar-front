<script>
export default {
  props: ['article'],
};
</script>

<template>
  <router-link
      :to="{path: '/articles/single-article/' + article.id}"
      class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
      aria-label="Single Article"
  >
    <div>
      <img
          :src="article.img"
          :alt="article.title"
          class="rounded-t-xl object-scale-down h-140 w-100 border-none"
      />
    </div>
    <div class="text-center px-4 py-6">
      <p
          class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
      >
        {{ article.title }}
      </p>
      <span
          class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">
        {{ article.film }}
      </span>
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
