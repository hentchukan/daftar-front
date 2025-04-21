<script>
export default {
	props: ['articleImages'],
};
</script>

<template>
	<div class="w-full flex justify-center mt-12 mb-10 sm:mb-0">
			<img
				:src="articleImages"
				class="w-full h-auto rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				alt="مشكل في إظهار صورة الفلمِ"
			/>
	</div>
</template>
