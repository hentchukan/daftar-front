<script>
import vSelect from 'vue-select';
import axios from 'axios';
import Datepicker from '@vuepic/vue-datepicker';
import 'vue-select/dist/vue-select.css';
import { ref } from 'vue';
import {DAFTAR_BACK_BASE_URL} from "../../../config";
export default {
  components: { 'v-select': vSelect, Datepicker},
  setup() {
    const filmInfoYear = ref(new Date().getFullYear());
    const articleDate = ref(new Date());
    return {
      filmInfoYear,
      articleDate
    }
  },
  data: () => {
    return {
      selectOptions: [],
      filmTitles: [],
      titleOptions: [],
      countryValues: [],
      countryOptions: [],
      genreValues: [],
      genreOptions: [],
      starOptions: [],
      starValues: [],

      directorValues: [],
      directorOptions: [],
      articleTitle: '',
      filmInfoSummary: '',
      filmCover: '',
      filmPoster: '',
      coverFile: {},
      posterFile: {}
    };
  },
  mounted() {
    axios
            .get(DAFTAR_BACK_BASE_URL + '/v1/directors')
            .then(response => {
              this.directorOptions = response.data;
            });
    axios.get(DAFTAR_BACK_BASE_URL + '/v1/starring')
            .then(response => {
              this.starOptions = response.data;
            });
    axios.get(DAFTAR_BACK_BASE_URL + '/v1/tags/bytype/genre')
            .then(response => {
              this.genreOptions = response.data;
            });
    axios.get(DAFTAR_BACK_BASE_URL + '/v1/tags/bytype/country')
            .then(response => {
              this.countryOptions = response.data;
            });
  },
  methods: {
    uploadCoverFile(event) {
      this.coverFile = event.target.files[0]
      let nameParts = event.target.files[0].name.split('.')
      this.filmCover = nameParts[0] + "-cover." + nameParts[1]
      console.log("uploaded file " + this.filmCover)
    },
    uploadPosterFile(event) {
      this.posterFile = event.target.files[0]
      let nameParts = event.target.files[0].name.split('.')
      this.filmPoster = nameParts[0] + "-poster." + nameParts[1]
      console.log("uploaded file " + this.filmPoster)
    },
    setTitleClass() {
      return "font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light bo-info-bar-item";
    },
    fireFilmYearUpdate($event) {
      this.$emit('fireFilmInfoYear', $event.year);
    },
    fireArticleDate($event) {
      if ($event === '') {
        this.articleDate = new Date()
        this.$emit('fireArticleDate', this.articleDate)
      } else {
        this.$emit('fireArticleDate', $event)
      }
    },
    reset() {
      this.filmTitles = [];
      this.directorValues = [];
      this.starValues = [];
      this.countryValues = [];
      this.genreValues = [];
      this.articleTitle = '';
      this.filmInfoSummary = '';
      this.filmCover = '';
      this.filmPoster = '';
      this.coverFile = {};
      this.posterFile = {};
    },
    isPosterFileReceived() {
      console.log("Poster file received " + this.posterFile + "  this.posterFile.files " + this.posterFile.files)
      return this.posterFile && this.posterFile.files && this.posterFile.files.length > 0;
    },
    isCoverFileReceived() {
      return this.coverFile && this.coverFile.files && this.coverFile.files.length > 0;
    }
  }
}
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-1 sm:gap-2">
    <v-select
            taggable
            multiple
            push-tags
            label="name"
            placeholder="عنوانُ الفِلمِ أو عَناوينُهُ"
            :options="titleOptions"
            v-model="filmTitles"
            :create-option="title => ({ name: title })"
            :reduce="title => title.name"

            @option:selected="$emit('fireFilmInfoTitles', this.filmTitles)"
            @option:deselected="$emit('fireFilmInfoTitles', this.filmTitles)"
    />

    <div>
      <v-select
              taggable
              multiple
              push-tags
              label="name"
              placeholder="المُخرج"
              :options="directorOptions"
              v-model="directorValues"
              :create-option="director => ({ name: director })"
              :reduce="director => director.name"
              @option:selected="this.$emit('fireFilmInfoDirectors', this.directorValues)"
              @option:deselected="this.$emit('fireFilmInfoDirectors', this.directorValues)"
      />
    </div>

    <Datepicker v-model="filmInfoYear"
                @change="$emit('fireFilmInfoYear', $event.target.value)"
                @update-month-year="this.fireFilmYearUpdate($event)" yearPicker
                @cleared="this.fireFilmYearUpdate('')" autoApply placeholder="سنةُ الصّدور">
    </Datepicker>

    <div>
      <v-select
              taggable
              multiple
              push-tags
              label="name"
              placeholder="البطولة"
              :options="starOptions"
              v-model="starValues"
              :create-option="star => ({ name: star })"
              :reduce="star => star.name"
              @option:selected="this.$emit('fireFilmInfoStars', this.starValues)"
              @option:deselected="this.$emit('fireFilmInfoStars', this.starValues)"
      />
    </div>

    <div>
      <v-select
              taggable
              multiple
              push-tags
              label="id"
              placeholder="البلدُ"
              :options="countryOptions"
              v-model="countryValues"
              :create-option="country => ({ id: country })"
              :reduce="country => country.id"
              @option:selected="this.$emit('fireFilmInfoCountries', this.countryValues)"
              @option:deselected="this.$emit('fireFilmInfoCountries', this.countryValues)"
      />
    </div>

    <div>
      <v-select
              taggable
              multiple
              push-tags
              label="id"
              placeholder="الصنف"
              :options="genreOptions"
              v-model="genreValues"
              :create-option="genre => ({ id: genre })"
              :reduce="genre => genre.id"
              @option:selected="this.$emit('fireFilmInfoGenres', this.genreValues)"
              @option:deselected="this.$emit('fireFilmInfoGenres', this.genreValues)"
      />
    </div>
    <div>
      <Datepicker v-model="articleDate"
                  @change="$emit('fireArticleDate', $event.target.value)"
                  @update:model-value="this.fireArticleDate($event)"
                  @cleared="this.fireArticleDate('')" autoApply placeholder="تاريخ المقال">
      </Datepicker>
    </div>
    <div>
      <input v-model="articleTitle"
             @focusout="$emit('fireArticleTitle', $event.target.value)"
             :class=[this.setTitleClass()]
             id="title"
             name="title"
             type="search"
             required=""
             placeholder="عنوانُ المقالِ"
             aria-label="Title"/>
    </div>

    <div>
        <textarea v-model="filmInfoSummary"
                  @focusout="$emit('fireFilmInfoSummary', $event.target.value)"
                  :class=[this.setTitleClass()] style="direction: rtl"
                  id="summary"
                  name="summary"
                  required=""
                  placeholder="مُلخّصُ الفِلمِ"
                  aria-label="Title"/>
    </div>

    <div :class="[this.$refs.coverFile && this.$refs.coverFile.files.length == 0 ? 'red-bordered' : 'green-bordered']">
      <button :class="['btn', 'btn-info']" @click="this.$refs.coverFile.click() || console.log(this.$refs.coverFile.files.length == 0)">غِلافُ الفِلم</button>
      <input
              @change="$emit('fireFilmCover', $event.target.files[0])"
              :class=[this.setTitleClass()] style="width: 27rem; display: none"
              id="cover"
              name="cover"
              ref="coverFile"
              type="file"
              required="required"
              accept="image/*"
      />
    </div>

    <div></div>
    <div :class="[this.$refs.posterFile && this.$refs.posterFile.files.length == 0 ? 'red-bordered' : 'green-bordered']">
      <button class="btn btn-info" @click="this.$refs.posterFile.click()">مُعلّقَةُ الفِلم</button>
      <input
              @change="$emit('fireFilmPoster', $event)"
              :class=[this.setTitleClass()] style="width: 27rem; margin-left: -4.6rem; display: none"
              id="poster"
              name="poster"
              ref="posterFile"
              type="file"
              required="required"
              accept="image/*"/>
    </div>
  </div>
</template>

<style scoped>
.red-bordered {
  border: 1px solid red;
  border-radius: 8px;
}
.green-bordered {
  border: 1px solid green;
  border-radius: 8px;
}
</style>
