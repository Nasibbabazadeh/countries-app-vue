<template>
    <div class="flex justify-center items-center min-h-screen">
      <div class="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 class="text-2xl font-bold mb-4">{{ countryInfo?.commonName }} ({{ countryInfo?.countryCode }})</h1>
        <p><strong>Official Name:</strong> {{ countryInfo?.officialName }}</p>
        <p><strong>Region:</strong> {{ countryInfo?.region }}</p>
        <p><strong>Country Code:</strong> {{ countryInfo?.countryCode }}</p>
        
        <div v-if="countryInfo?.borders?.length" class="mt-4">
          <h2 class="text-xl font-semibold mb-2">Borders:</h2>
          <ul class="list-disc ml-4">
            <li v-for="(border, index) in countryInfo.borders" :key="index" class="mb-2">
              <p><strong>{{ border.commonName }}</strong> ({{ border.countryCode }})</p>
              <p class="text-gray-600"><em>{{ border.officialName }}</em></p>
            </li>
          </ul>
        </div>
        <div v-else>
          <p>No bordering countries available.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { fetchCountryInfo } from '../../services/countryService';
  import type { CountryInfo } from '~/services/types';
  
  const route = useRoute();
  const countryInfo = ref<CountryInfo | null>(null);
  
  onMounted(async () => {
    const countryCode = route.params.countryDetails as string;
    try {
      countryInfo.value = await fetchCountryInfo(countryCode);
    } catch (error) {
      console.error('Failed to fetch country info:', error.message);
    }
  });
  </script>
  
  