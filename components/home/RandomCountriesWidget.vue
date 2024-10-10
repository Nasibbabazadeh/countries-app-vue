<template>
    <h1 class="text-2xl font-bold text-center mb-6">Countries and Next Holiday</h1>
    <div v-if="randomCountries.length > 0" >
      <ul class="flex flex-col gap-8">
        <li
        v-for="(country, index) in randomCountries"
        :key="index"
        class="bg-white shadow-md rounded-lg p-4"
        >
        <NuxtLink :to="`/country/holidays/${country.countryCode}`" class="text-lg">
        <h3 class="text-lg font-semibold text-gray-800"> Country Code : {{ country.countryCode }} </h3>
          <p class="mt-2"><strong>Holiday:</strong> {{ country.name }}</p>
          <p><strong>Date:</strong> {{ country.date }}</p>
        </NuxtLink>
        </li>
      </ul>
    </div>
    <div v-else class="text-center">
      <p>Loading...</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchHolidays} from '~/services/holidayService';
import type { IHoliday } from '~/services/types';
const randomCountries = ref<IHoliday[]>([]);
onMounted(async () => {
  try {
    const holidays = await fetchHolidays();
    console.log(holidays);
    randomCountries.value = holidays
      .sort(() => 0.5 - Math.random())
      .slice(0, 3); 
  } catch (error) {
    console.error('Error fetching random countries and holidays:', error);
  }
});
</script>

