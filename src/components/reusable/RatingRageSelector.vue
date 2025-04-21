<script>
export default {
  name: "RatingRangeSelector",
  props: {
    from: {
      type: Number,
      default: 0.5,
    },
    to: {
      type: Number,
      default: 5,
    },
  },
  emits: ["updateRange"],
  data() {
    return {
      fromValue: this.from,
      toValue: this.to,
      options: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
    };
  },
  methods: {
    emitChange() {
      this.$emit("updateRange", {
        'from': this.fromValue,
        'to': this.toValue,
      });
    },
  },
};
</script>

<template>
  <div class="flex flex-nowrap items-center justify-end gap-3 rtf
focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300 dark:focus-within:ring-blue-800">
    <label class="text-sm base-font text-primary-dark dark:text-ternary-light ">التقدير من</label>
    <select
            v-model="fromValue"
            @change="emitChange"
            class="h-full px-3 py-2 pr-8 rounded border-none outline-none ring-0 appearance-none dark:border-secondary-dark bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
    >
      <option
              v-for="option in options"
              :key="'from-' + option"
              :value="option"
              :disabled="option > toValue"
      >
        {{ option }}
      </option>
    </select>

    <label class="text-sm base-font text-primary-dark dark:text-ternary-light">إلى</label>
    <select
            v-model="toValue"
            @change="emitChange"
            class="h-full py-2 pr-8 rounded border-none outline-none appearance-none ring-0 dark:border-secondary-dark bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
    >
      <option
              v-for="option in options"
              :key="'to-' + option"
              :value="option"
              :disabled="option < fromValue"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style scoped>

</style>