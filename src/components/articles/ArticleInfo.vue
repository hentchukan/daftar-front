<script>
import feather from 'feather-icons';

export default {
	props: ['articleInfo'],
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		
		<!-- Single article right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0 rtf">
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
			>
				{{ articleInfo.articleDetailsHeading }}
			</p>
			<p
				v-for="articleDetail in articleInfo.articleDetails"
				:key="articleDetail"
				class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
			>
				{{ articleDetail }}
			</p>
		</div>
		
		<!-- Single article left section details -->
		<div class="w-full sm:w-1/3 text-left">
			<!-- Single Article film details -->
			<div class="mb-7">
				<p
					class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2 rtf"
				>
					{{ articleInfo.filmHeading }}
				</p>
				<ul class="leading-loose">
					<li
						v-for="info in articleInfo.filmInfos"
						:key="info"
						class="font-general-regular text-ternary-dark dark:text-ternary-light rtf"
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
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2 rtf"
				>
					{{ articleInfo.summaryHeading }}
				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light rtf"
				>
					{{ articleInfo.summaryDetails }}
				</p>
			</div>

			<!-- Single Article tags -->
			<div class="mb-7">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2 rtf"
				>
					{{ articleInfo.tagsHeading }}
				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light rtf"
				>
					{{ articleInfo.tagsDetails.join(', ') }}
				</p>
			</div>

			<!-- Single article social sharing -->
			<div>
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2 rtf"
				>
					{{ articleInfo.socialSharingsHeading }}
				</p>
				<div class="flex justify-center  gap-3 mt-5">
					<a
						v-for="social in articleInfo.socialSharings"
						:key="social.id"
						:href="social.url"
						target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
						><i
							:data-feather="social.icon"
							class="w-4 lg:w-5 h-4 lg:h-5"
						></i
					></a>
				</div>
			</div>
		</div>

	</div>
</template>
