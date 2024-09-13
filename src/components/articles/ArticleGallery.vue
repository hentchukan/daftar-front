<script>
export default {
	props: ['articleImages'],
};
</script>

<template>
	<div class="grid grid-cols-1 sm:grid-cols-1 sm:gap-10 mt-12">
		<div
			class="mb-10 sm:mb-0"
			v-for="articleImage in articleImages"
			:key="articleImage"
		>
			<img
				:src="articleImage"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				alt="{{ articleImage }}"
			/>
		</div>
	</div>
</template>
