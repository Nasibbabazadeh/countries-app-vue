<template>
  <div class="flex justify-around py-14 bg-flag-countries bg-cover bg-repeat-y">
    <section class="flex flex-col">
      <AllCountriesSection/>
    </section>
  <section>
    <RandomCountriesWidget/>
  </section>
</div>
</template>

<script setup lang="ts">
import AllCountriesSection from '~/components/home/AllCountriesSection.vue';
import RandomCountriesWidget from '~/components/home/RandomCountriesWidget.vue';
useHead({
  meta: [
    { property: 'og:title', content: 'Home page' },
    { property: 'og:description', content: 'Welcome to the homepage of the website' },
    { property: 'og:image', content: '/social-share-image.png' }
  ]
});

useSeoMeta({
  title: 'Home',
  description: 'Welcome to the home page of the website',
});
</script>

