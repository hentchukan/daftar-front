<script>
import feather from "feather-icons";
import axios from "axios";
import {DAFTAR_BACK_BASE_URL} from "../../../config";
import ArticleCard from "@/components/articles/ArticleCard.vue";

export default {
  components: {ArticleSingle: ArticleCard},
  props: ['relatedArticles'],
  data: () => {
    return {
      relatedArticleCards: {}
    }
  },
  mounted() {
    feather.replace();

    Promise.all(
            this.relatedArticles.links.map(art =>
                    axios.get(`${DAFTAR_BACK_BASE_URL}/v1/articles/overviews/${art.id}`)
            )
    ).then(responses => {
      this.relatedArticleCards = responses.map(res => res.data);
    }).catch(error => {
      console.error("Error loading related articles:", error);
    });
  }
};
</script>

<template>
  <div
          class="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
  >
    <p
            class="film-info-header-font text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"
    >
      {{ relatedArticles.relatedArticlesHeading }}
    </p>

    <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 mt-6 gap-1 sm:gap-3">
        <ArticleSingle
                v-for="card in relatedArticleCards"
                :key="card.id"
                :article="card"
                class="w-full max-w-[130px] sm:max-w-full mx-auto"
        />
    </div>
  </div>
</template>
