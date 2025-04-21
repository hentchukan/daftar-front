<script>
import feather from 'feather-icons';
import ArticleHeader from '../components/articles/ArticleHeader.vue';
import ArticleGallery from '../components/articles/ArticleGallery.vue';
import ArticleInfo from '../components/articles/ArticleInfo.vue';
import ArticleRelatedArticles from '../components/articles/ArticleRelatedArticles.vue';
import axios from 'axios';
import {DAFTAR_BACK_BASE_URL} from "../../config";

export default {
	name: 'Articles',
	props: ['articleId'],
	components: {
		ArticleHeader,
		ArticleGallery,
		ArticleInfo,
		ArticleRelatedArticles,
	},
	mounted() {
    this.fetchArticle(this.$route.params.id)
  },
	data: () => {
		return {
			singleArticleHeader: {},
			articleImages: [],
			articleInfo: {
				filmHeading: 'عَنِ الفِلْمِ',
				filmInfos: [],
				summaryHeading: 'عَنِ القِصَّةِ',
				summaryDetails: '',
				tagsHeading: 'أوسِمةٌ',
				tagsDetails: [],
				articleDetailsHeading: '',
				articleDetails: [],
				socialSharingsHeading: 'هَلاَّ سَاهَمْت فِي نَشْرِهِ؟',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/hentchukan',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/hentchukan',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/bluenotemoviereviews',
					}
				],
			},
			relatedArticles: {
				relatedArticlesHeading: 'مقالات ذات صلة',
				links: [
					{
						id: '31894fc0-b063-420b-916d-d5d434e38d27',
					},
					{
						id: '722e68c5-bd05-4e40-974a-65f235d2b68c',
					},
					{
						id: 'b701f503-b918-47c4-90d5-3066fed3497f',
					},
					{
						id: 'df243836-c4f4-4f6c-832d-3d9f4e05eb2b',
					},
				],
			},
		};
	},
	updated() {
		feather.replace();
	},
	computed: {
		paramId() {
			return this.$route.params.articleId
		},
  },
  watch: {
    '$route.params.id': {
      immediate: false,
      handler(newId) {
        this.fetchArticle(newId);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // optional
      }
    }
  },
	methods: {
    fetchArticle(id) {
      feather.replace();
      axios
              .get(DAFTAR_BACK_BASE_URL + `/v1/articles/${id}`)
              .then(response => {
                this.singleArticleHeader = {
                  filmTitle: response.data.filmInfos.title[0],
                  articleTags: response.data.tags.filter(tag => tag.type === 'Genre')
                          .map(tag => tag.label),
                  ratingDetails: response.data.rating
                };
                this.articleInfo.filmInfos = [
                  {
                    id: 1,
                    title: 'الْمُخْرِجُ',
                    details: response.data.filmInfos.directors[0],
                  },
                  {
                    id: 2,
                    title: 'السَّنَةُ',
                    details: response.data.filmInfos.year,
                  },
                  {
                    id: 3,
                    title: 'الْبُطُولَةُ',
                    details: response.data.filmInfos.stars?.join('، ') ?? '',
                  }
                ];
                this.articleInfo.summaryDetails = response.data.summary;
                this.articleInfo.tagsDetails = response.data.tags.map(tag => tag.label);
                this.articleInfo.articleDetailsHeading = response.data.articleTitle;
                this.articleInfo.articleDetails = response.data.text;
                this.articleInfo.articleDate= response.data.date;
                this.articleImages = [response.data.cover];
              });
    }
 }
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Article header -->
		<ArticleHeader :singleArticleHeader="singleArticleHeader" />

		<!-- Article gallery -->
		<ArticleGallery :articleImages="articleImages" />

		<!-- Article information -->
		<ArticleInfo :articleInfo="articleInfo" />

		<!-- Article related articles -->
		<ArticleRelatedArticles :relatedArticles="relatedArticles" />
	</div>
</template>

<style scoped></style>
