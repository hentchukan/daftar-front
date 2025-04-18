<template>
  <div class="star-rating">

      <span v-for="star in 5"
            :key="star" :class="defineClass(star)">{{star > rating ? "☆" : "★"}}</span>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number, // Accepts decimal values (e.g., 3.5)
  },
  computed: {
    fullStars() {
      return Math.floor(this.rating);
    },
  },
  methods: {
    defineClass(star) {
      return ["text-xl sm:text-2xl lg:text-3xl ", star <= this.rating ? "filled" : (star - this.rating === 0.5 ? "half" : "empty")];
    },
  }
};
</script>

<style scoped>
.star-rating {
  display: inline-flex;
  align-items: center; /* Ensures vertical alignment */
  vertical-align: middle; /* Aligns with surrounding text */
  margin-top: -10px; /* Adjust this value as needed */
}

.filled {
  color: gold;
}
.half {
  color: gold;
  position: relative;
}
.half::before {
  content: "★";
  color: gold;
  position: absolute;
  width: 50%;
  overflow: hidden;
}
.empty {
  color: #ccc;
}
</style>
