<template>
  <div class="flex flex-col items-center py-10">
    <h1 class="text-2xl font-bold mb-6">{{ countryName }} - Holidays</h1>

    <div v-if="holidays.length > 0" class="holiday-list w-80">
      <ul class="space-y-4">
        <li
          v-for="(holiday, index) in holidays"
          :key="index"
          class="border border-gray-400 rounded-lg p-4 text-center"
        >
          <p><strong>Holiday Info:</strong> {{ holiday.localName }} ({{ holiday.name }})</p>
          <p><strong>Date:</strong> {{ new Date(holiday.date).toLocaleDateString() }}</p>
          <p><strong>Type:</strong> {{ holiday.types.join(', ') }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No holidays found for the selected year.</p>
    </div>

    <div class="year-selection mt-6 flex space-x-2">
      <button
        v-for="year in years"
        :key="year"
        @click="fetchHolidaysForYear(year)"
        :class="{
          'bg-blue-500 text-white': year === selectedYear,
          'bg-gray-300': year !== selectedYear
        }"
        class="px-3 py-1 rounded border"
      >
        {{ year }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchCountryHolidays } from '~/services/holidayService';
import { CountryService } from '~/services/countryService';
import type { IHoliday} from '~/services/types';

const route = useRoute();
const holidays = ref<IHoliday[] | any>([]);
let countryName = ref<string | null>(null);
const selectedYear = ref<number>(new Date().getFullYear());
const years = Array.from({ length: 11 }, (_, i) => 2020 + i);

const fetchHolidaysForYear = async (year: number) => {
  const countryCode = route.params.holidayDetails as string;
  try {
    const response = await fetchCountryHolidays(countryCode, year);
    const countryData = await  CountryService()
    countryName.value = countryData.filter((country) => country.countryCode === countryCode)[0]?.name;
    holidays.value = response.holidays;
    selectedYear.value = year;
  } catch (error) {
    console.error('Error fetching holidays:', error);
  }
};

onMounted(() => {
  fetchHolidaysForYear(selectedYear.value);
});
</script>

<style scoped>
.holiday-list {
  width: 100%;
  max-width: 600px;
}

.year-selection button {
  min-width: 40px;
  padding: 6px;
}
</style>
