<script>
import feather from 'feather-icons';
import {DAFTAR_BACK_BASE_URL} from "../../../config";

export default {
	props: ['articleInfo'],
  data: () => {
    return {
      showInfo: false,
      fontSize: 24
    }
  },
	updated() {
		feather.replace();
	},
  methods: {
    generateShareUrl(platform) {
      const articleId = this.$route.params.id; // or wherever it's stored
      const shareUrl = encodeURIComponent(DAFTAR_BACK_BASE_URL + `/v1/articles/share/${articleId}`);
      const title = encodeURIComponent(this.articleInfo.title);

      switch (platform) {
        case 'Twitter':
          return `https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`;
        case 'Facebook':
          return `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        case 'Instagram':
          // Instagram does not support direct web sharing
          return 'https://www.instagram.com/';
        default:
          return '#';
      }
    },

    isNumber(part) {
      return /^\d+$/.test(part); // Checks if part consists only of digits
    },
},
};
</script>

<template>

 <div class="sm:hidden flex items-center justify-between mb-4 gap-4">

    <div class="flex-1">
         <input
                 type="range"
                 min="24"
                 max="36"
                 step="1"
                 v-model="fontSize"
                 class="w-full accent-primary-dark"
         />
    </div>
    <div>
       <button
               @click="showInfo = !showInfo"
               class="film-info-header-font sm:hidden inline-flex items-center justify-center gap-2 px-4 py-2 mb-4 text-sm font-medium
             text-white bg-primary-dark dark:bg-primary-light dark:text-primary-dark
             rounded-lg shadow hover:bg-primary hover:dark:bg-primary-light/90
             transition-all duration-300 "
       >
         <svg
                 v-if="!showInfo"
                 xmlns="http://www.w3.org/2000/svg"
                 class="h-5 w-5"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 stroke-width="2"
         >
           <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
         </svg>
         <svg
                 v-else
                 xmlns="http://www.w3.org/2000/svg"
                 class="h-5 w-5"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 stroke-width="2"
         >
           <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
         </svg>
         <span >{{ showInfo ? 'عن الفلمِ' : 'عن الفِلمِ' }}</span>
       </button>
   </div>
   </div>

	<div class="flex flex-col-reverse sm:flex-row gap-1 sm:gap-10 sm:mt-14">
		<!-- Single article right section details -->
		<div class="w-full sm:w-2/3 text-left rtf">
			<div class="flex rtf">
        <p
                class="article-title-font text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {{ articleInfo.articleDetailsHeading }}
        </p>
        <div class="flex mr-4 pt-2">
          <i data-feather="clock" class="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
          <span  v-for="(part, index) in $formatDate(articleInfo.articleDate)" :key="index"
                 class="film-meta-font ml-2 leading-none text-primary-dark dark:text-primary-light rtl:text-right"
                 :dir="isNumber(part) ? 'ltr' : 'rtl'">
                      {{ part }}
        </span>
        </div>
      </div>
			<p
				v-for="articleDetail in articleInfo.articleDetails"
				:key="articleDetail"
				class="base-font mb-5 text-4xl text-ternary-dark dark:text-ternary-light" :style="{ fontSize: fontSize + 'px' }">
				{{ articleDetail }}
			</p>
		</div>
		<!-- Single article left section details -->
		<div class="w-full sm:w-1/3 text-left mb-10 sm:mb-0" :class="{ 'hidden sm:block': !showInfo }">
      <!-- Single Article film details -->
			<div class="mb-7">
				<p class="film-info-header-font text-2xl text-secondary-dark dark:text-secondary-light mb-2 rtf">
					{{ articleInfo.filmHeading }}
				</p>
				<ul class="leading-loose">
					<li
						v-for="info in articleInfo.filmInfos"
						:key="info"
						class="film-info-font text-ternary-dark dark:text-ternary-light rtf"
					>
						<span>{{ info.title }}: </span>
						<span class="font-general-regular text-primary-dark dark:text-ternary-light rtf">
							{{ info.details }}
						</span>
					</li>
				</ul>
			</div>

			<!-- Single Article film summary -->
			<div class="mb-7">
				<p
					class="film-info-header-font text-2xl text-ternary-dark dark:text-ternary-light mb-2 rtf"
				>
					{{ articleInfo.summaryHeading }}
				</p>
				<p
					class="film-info-font text-primary-dark dark:text-ternary-light rtf"
				>
					{{ articleInfo.summaryDetails }}
				</p>
			</div>

			<!-- Single Article tags -->
			<div class="mb-7">
				<p
					class="film-info-header-font text-2xl text-ternary-dark dark:text-ternary-light mb-2 rtf"
				>
					{{ articleInfo.tagsHeading }}
				</p>
				<p
					class="film-info-font text-primary-dark dark:text-ternary-light rtf"
				>
					{{ articleInfo.tagsDetails.join('، ') }}
				</p>
			</div>

			<!-- Single article social sharing -->
			<div>
				<p class="film-info-header-font text-2xl text-ternary-dark dark:text-ternary-light mb-2 rtf">
					{{ articleInfo.socialSharingsHeading }}
				</p>
				<div class="flex justify-center gap-3 mt-5">
					<a
						v-for="social in articleInfo.socialSharings"
						:key="social.id"
						:href="generateShareUrl(social.name)"
						target="__blank"
						aria-label="Share Article"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500">
            <i
							:data-feather="social.icon"
							class="w-4 lg:w-5 h-4 lg:h-5"></i>
          </a>
				</div>
			</div>
		</div>
	</div>
</template>
