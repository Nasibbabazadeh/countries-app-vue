<template>
    <footer class="left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-blue-950 dark:border-gray-600">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {{ copyrightDate }} <nuxt-link to="/" class="hover:underline">Country Finder</nuxt-link>. All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <nuxt-link to="/" class="hover:underline me-4 md:me-6">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="hover:underline me-4 md:me-6">Privacy Policy</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="hover:underline me-4 md:me-6">Licensing</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="hover:underline">Contact</nuxt-link>
        </li>
      </ul>
    </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        copyrightDate: new Date().getFullYear(),
      } as { copyrightDate: number };
    },
  });
  </script>
  