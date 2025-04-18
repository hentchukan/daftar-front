<script>
import axios from 'axios';
import feather from 'feather-icons';
import Datepicker from '@vuepic/vue-datepicker';

import '@vuepic/vue-datepicker/dist/main.css'
import 'vue-select/dist/vue-select.css';
import {ref} from 'vue';
import {DAFTAR_BACK_BASE_URL} from "../../../config";
import RatingRangeSelector from "@/components/reusable/RatingRageSelector.vue";

export default {
  components: {RatingRangeSelector, Datepicker},
  setup() {
    const searchYear = ref(new Date().getFullYear());
    const selectDate = () => {
      this.fireValue(searchYear);
    }
    return {
      searchYear,
      selectDate
    }
  },
  data: () => {
    return {
      selectCategories: [],
      selectDirectors: [],
      selectCountries: [],
      directorOptions: [],
      directorValues: [],
      titleSearch: '',
      ratingRange: {from: 0.5, to: 5}
    };
  },
  props: {
    select: {
      type: String,
      default: 'articles',
      required: false,
    }
  },
  mounted() {
    feather.replace();
    axios
            .get(DAFTAR_BACK_BASE_URL + '/v1/tags/bytype/genre')
            .then(response => {
              this.selectCategories = response.data;
            });
    axios
            .get(DAFTAR_BACK_BASE_URL + '/v1/tags/bytype/country')
            .then(response => {
              this.selectCountries = response.data;
            });
    axios
            .get(DAFTAR_BACK_BASE_URL + '/v1/directors')
            .then(response => {
              this.selectDirectors = response.data;
            });
  },
  methods: {
    // Filter articles by title search
    filterByTitle(titleSearch) {
      // let article = new RegExp(this.searchArticle, 'i');
      // return this.articles.filter((el) => el.title.match(article));
      console.log("Filter by Title " + titleSearch);
      this.filters.filmTitle = this.titleSearch;
      this.filter();
    },
    fireValue($event) {
      this.$emit('filterYear', $event.year);
    }
  }
};
</script>

<template>
  <div class="mt-10 sm:mt-10">
    <h3
            class="base-font
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-xl
					font-normal
					mb-4
				">
      اِبحث عن فِلمٍ باسمه أو بإحدى سماتِه
    </h3>

    <div class="border-b border-primary-light dark:border-secondary-dark pb-4">
      <!-- Filters grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <!-- Year -->
        <Datepicker
                class="rtf "
                :input-class-name="'pr-8 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light'"
                v-model="searchYear"
                autoApply
                placeholder="اِختر العام"
                yearPicker
                @cleared="fireValue('')"
                @update-month-year="fireValue($event)"
        />

        <!-- Category -->
        <select
                class="w-full base-font rtf px-8 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                @change="$emit('filterCategory', $event.target.value)"
        >
          <option value="">اِختر الصّنف</option>
          <option
                  v-for="option in selectCategories"
                  :key="option.id"
                  :value="option.id"
          >
            {{ option.label }}
          </option>
        </select>

        <!-- Country -->
        <select
                class="w-full rtf font-general-medium px-8 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                @change="$emit('filterCountry', $event.target.value)"
        >
          <option value="">اِختر البلد</option>
          <option
                  v-for="option in selectCountries"
                  :key="option.id"
                  :value="option.id"
          >
            {{ option.label }}
          </option>
        </select>

      </div>
      <!-- Search bar and icon -->
      <div class="flex flex-col sm:flex-row gap-2 mb-2 mt-2 ">
        <select
                class="rtf w-full base-font pr-8 px-6 py-1 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                @change="$emit('filterDirectors', $event.target.value)">
            <option value="">المُخرجُ</option>
            <option
                    v-for="option in selectDirectors"
                    :key="option.id"
                    :value="option.id">
              {{ option.name }}
            </option>
        </select>
        <RatingRangeSelector
                :from="ratingRange.from"
                :to="ratingRange.to"
                class="w-full border border-gray-300 dark:border-secondary-dark rounded-lg bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light pr-2"
                @updateRange="$emit('filterRating', $event)"
        />
        <div class="flex items-center w-full border border-gray-300 dark:border-secondary-dark rounded-lg bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light">
            <span
                class="sm:flex  bg-secondary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-l-xl cursor-pointer"
                @click="filterByTitle">
              <i class="text-ternary-dark dark:text-ternary-light" data-feather="search"></i>
            </span>
            <input
                    v-model="titleSearch"
                    type="search"
                    placeholder="عنوانُ الفِلمِ"
                    aria-label="Name"
                    @keyup.enter="filterByTitle"
                    class="rtf w-full sm:w-fit font-general-medium pl-3 pr-1 sm:px-4 py-3 border-hidden border-gray-200 dark:border-secondary-dark rounded-r-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            />
       </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-slot-image {
  height: 20px;
  width: auto;
  margin-right: 5px;
}
</style>
