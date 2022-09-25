<script>
import axios from 'axios';
import feather from 'feather-icons';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue';

export default {
	components: {Datepicker},
	setup() {
        const searchYear = ref(new Date().getFullYear());
        const selectDate = () => {
          this.fireValue(searchYear);
        }
        return {
			searchYear,
			selectDate
        }
    },
	data: () => {
		return {
			selectOptions : [],
			selectCountries: []
		};
	},
	props: {
		select: {
			type: String,
			default: 'articles',
			required: true,
		}
	},
	mounted() {
		feather.replace();
		axios
			.get('http://localhost:8181/v1/tags/bytype/genre')
			.then(response => {
				this.selectOptions = response.data;
			});
		axios
			.get('http://localhost:8181/v1/tags/bytype/country')
			.then(response => {
				this.selectCountries = response.data;
			});
	},
	methods: {
		fireValue($event) {
			this.$emit('filterYear', $event.year);
		}
	}
};
</script>

<template>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-1 sm:gap-2">
		<Datepicker v-model="searchYear" 
			@update-month-year="this.fireValue($event)" 
			yearPicker
			@cleared="this.fireValue('')"
			autoApply
			placeholder="اِختر العام">
		</Datepicker>
		<select
			@change="$emit('filterCategory', $event.target.value)"
			:name="select"
			:id="select"
			class="font-general-medium
				px-4
				py-2
				border-1 border-gray-200
				dark:border-secondary-dark
				rounded-lg
				text-sm
				sm:text-md
				bg-secondary-light
				dark:bg-ternary-dark
				text-primary-dark
				dark:text-ternary-light
			"
		>
			<option value="" class="text-sm sm:text-md">اِختر الصّنف</option>
			<option
				v-for="option in selectOptions"
				:key="option.id"
				:value="option.id"
				class="sm:text-md"
			>
				{{ option.label }}
			</option>
		</select>

		<select
			@change="$emit('filterCountry', $event.target.value)"
			:name="select"
			:id="select"
			class="font-general-medium
				px-4
				py-2
				border-1 border-gray-200
				dark:border-secondary-dark
				rounded-lg
				text-sm
				sm:text-md
				bg-secondary-light
				dark:bg-ternary-dark
				text-primary-dark
				dark:text-ternary-light
			"
		>
			<option value="" class="text-sm sm:text-md">اِختر البلد</option>
			<option
				v-for="option in selectCountries"
				:key="option.id"
				:value="option.id"
				class="sm:text-md"
			>
				{{ option.label }}
			</option>
		</select>
	</div>
</template>

<style lang="scss" scoped>
	.input-slot-image {
        height: 20px;
        width: auto;
        margin-right: 5px;
    }
</style>
