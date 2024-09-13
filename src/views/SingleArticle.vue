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
		feather.replace();
		axios
			.get(DAFTAR_BACK_BASE_URL + `/v1/articles/${this.paramId}`)
			.then(response => {
				this.singleArticleHeader = {
					filmTitle: response.data.filmInfos.title[0],
					articleDate: response.data.date,
					articleTags: response.data.tags,
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
						details: response.data.filmInfos.stars.join(', '),
					}
				];
				this.articleInfo.summaryDetails = response.data.summary;
				this.articleInfo.tagsDetails = response.data.tags;
				this.articleInfo.articleDetailsHeading = response.data.articleTitle;
				this.articleInfo.articleDetails = response.data.text;
				this.articleImages = [response.data.cover];
			});
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
					},
					{
						id: 5,
						name: 'Youtube',
						icon: 'youtube',
						url: 'https://www.youtube.com/user/IoriYagamiOroche',
					},
				],
			},
			relatedArticles: {
				relatedArticlesHeading: 'مقالات ذات صلة',
				links: [
					{
						id: 1,
						title: 'Mobile UI',
						img: require('@/assets/images/mobile-project-1.jpg'),
					},
					{
						id: 2,
						title: 'Web Application',
						img: require('@/assets/images/web-project-1.jpg'),
					},
					{
						id: 3,
						title: 'UI Design',
						img: require('@/assets/images/ui-project-2.jpg'),
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: require('@/assets/images/mobile-project-2.jpg'),
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
	methods: {},
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
