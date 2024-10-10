<template>
    <h1 class="text-2xl font-bold mb-6">Countries Information</h1>
    <div class="search-container mb-4">
      <input
        type="text"
        placeholder="Search for a country..."
        v-model="searchQuery"
        class="border border-gray-300 rounded-lg p-2 w-80"
      />
    </div>
    <div class="w-80">
      <h2 class="text-lg font-semibold mb-4">Countries List</h2>
      <ul class="space-y-4">
        <li
          v-for="country in filteredCountries"
          :key="country.countryCode"
          class="border border-blue-800 rounded-lg p-4 text-center hover:bg-gray-100 transition-all ease-linear"
        >
          <NuxtLink :to="`/country/${country.countryCode}`" class="text-2xl font-semibold">
            {{ country.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
</template>


<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { CountryService } from '~/services/countryService';
import type { ICountries } from '~/services/types';

const countries = ref<ICountries[]>([]);
const searchQuery = ref<string>('');

const filteredCountries = computed(() =>
  countries.value.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
onMounted(async () => {
  try {
    countries.value = await CountryService();
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
});



</script>