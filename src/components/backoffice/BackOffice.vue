<script>
import { QuillEditor, Quill } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import BackOfficeFilmInfo from "./BackOfficeFilmInfo.vue"
import axios from 'axios';
import {onMounted} from "vue";
import {DAFTAR_BACK_BASE_URL} from "../../../config";

export default {
    components: {
        'quill': QuillEditor,
        'filmInfoBar': BackOfficeFilmInfo
    },
    data: () => {
        return {
            filmInfo: {},
            articleTitle: '',
            articleDate: new Date(),
            status: 'draft'
        }
    },
    methods: {
        handleToastClose() {
          if (this.status === 'success') {
            this.resetData()
          } else if (this.status === 'error') {
            this.status = 'draft'
          } else {
            console.log("Handle toast close")
          }
        },
        submitData() {
          let container = document.getElementById('editor');
          let editor = new Quill(container);

          // Create FormData object
          let formData = new FormData();

          // Convert ArticleDTO to JSON string and wrap it in a Blob
          let articleDTO = {
            "filmInfo": this.filmInfo,
            "title": this.articleTitle,
            "text": editor.getText(),
            "articleDate": this.articleDate
          };
          let articleBlob = new Blob([JSON.stringify(articleDTO)], { type: 'application/json' });

          // Append Blob to FormData
          formData.append('article', articleBlob);

          // Append image files
          if (this.coverFile) {
            formData.append('coverImage', this.coverFile);
          }
          if (this.posterFile) {
            formData.append('posterImage', this.posterFile);
          }

          // Send FormData using axios
          axios.post(DAFTAR_BACK_BASE_URL + '/v1/articles', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(response => {
            if (response.status === 200) {
              this.status = 'success'
              toast.success(this.articleTitle + " has been saved successfully", this.toastOptions());
            }
          })
          .catch(error => {
            this.status = 'error'
            toast.error("An error occurred while saving the article " + error.response.data, this.toastOptions());
          });
        },
        toastOptions() {
          return {
            "theme": "auto",
            "type": "info",
            "position": "top-center",
            "hideProgressBar": true,
            "transition": "slide",
            "dangerouslyHTMLString": true,
            "autoClose": false,
            onClose: () => this.handleToastClose()
          }
        },
        resetData() {
          /*this.filmInfo = {}
          this.articleTitle = ''
          this.articleDate = new Date()
          this.coverFile = null
          this.posterFile = null
          this.$refs.filmInfoBar.reset();*/
          window.location.reload();
        },
        getFilmInfoYear(filmInfoYear) {
          console.log("Film date "+filmInfoYear);
          this.filmInfo.year = filmInfoYear;
          toast.success(this.filmInfo.year + " has been saved successfully", this.toastOptions());
        },
        getFilmInfoTitles(filmInfoTitles) {
          console.log("Film title "+filmInfoTitles);
          this.filmInfo.title = filmInfoTitles;
        },
        getFilmInfoDirectors(filmInfoDirectors) {
          console.log("Film directors "+filmInfoDirectors);
          this.filmInfo.directors = filmInfoDirectors;
        },
        getFilmInfoStars(filmInfoStars) {
          console.log("Film starring "+filmInfoStars);
          this.filmInfo.stars = filmInfoStars;
        },
        getFilmInfoCountries(filmInfoCountries) {
          console.log("Film countries "+filmInfoCountries);
          this.filmInfo.countries = filmInfoCountries;
        },
        getFilmInfoGenres(filmInfoGenres) {
          console.log("Film countries "+filmInfoGenres);
          this.filmInfo.genres = filmInfoGenres;
        },
        getArticleTitle(articleTitle) {
          console.log("Article title "+articleTitle);
          this.articleTitle = articleTitle;
        },
        getFilmInfoSummary(filmInfoSummary) {
          console.log("Film Summary "+filmInfoSummary);
          this.filmInfo.filmSummary = filmInfoSummary;
        },
        getFilmCover(filmCover) {
          if (filmCover === undefined) {
            this.coverFile = null
            this.filmInfo.cover = null
          } else {
            this.coverFile = filmCover
            let nameParts = this.coverFile.name.split('.')
            this.filmInfo.cover = nameParts[0] + "-cover." + nameParts[1]
          }
          console.log("Film cover "+this.$refs.filmInfoBar.coverFile);
        },
        getFilmPoster(filmPoster) {
          if (filmPoster === undefined) {
            this.posterFile = null
            this.filmInfo.poster = null
          } else {
            this.posterFile = filmPoster
            let nameParts = this.posterFile.name.split('.')
            this.filmInfo.poster = nameParts[0] + "-poster." + nameParts[1]
          }
          console.log("Film poster "+this.$refs.filmInfoBar.posterFile);
        },
        getArticleDate(articleDate) {
          console.log("Article date "+this.articleDate);
          this.articleDate = articleDate;
        }
    }
}

onMounted(() => {
  let toolbarOptions = [{ 'direction': 'rtl' }];
  QuillEditor.props.globalOptions.default = () => toolbarOptions
})


</script>

<template>
    <filmInfoBar
        ref="filmInfoBar"
        @fireFilmInfoYear="this.getFilmInfoYear($event)"
        @fireFilmInfoTitles="$event => this.getFilmInfoTitles($event)"
        @fireFilmInfoDirectors="$event => this.getFilmInfoDirectors($event)"
        @fireFilmInfoStars="this.getFilmInfoStars($event)"
        @fireFilmInfoCountries="this.getFilmInfoCountries($event)"
        @fireFilmInfoGenres="this.getFilmInfoGenres($event)"
        @fireArticleTitle="$event => this.getArticleTitle($event)"
        @fireFilmInfoSummary="$event => this.getFilmInfoSummary($event)"
        @fireFilmCover="getFilmCover"
        @fireFilmPoster="$event => this.getFilmPoster($event.target.files[0])"
        @fireArticleDate="$event => this.getArticleDate($event)"/>

    <div style="padding-top: 1rem">
        <quill id="editor" theme="snow" toolbar="full" style="min-height: 30rem;" />
    </div>

    <div class="
					flex
					justify-between
					border-b border-primary-light
					dark:border-secondary-dark
					pb-3
					gap-2
				"
			>
				<div class="flex justify-between gap-2" v-on:click="submitData">
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
						<i data-feather="save"
							class="text-ternary-dark dark:text-ternary-light"></i>
					</span>

				</div>
    </div>
  <ToastifyContainer />
</template>
<style scoped>

</style>
