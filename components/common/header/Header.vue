<template>
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <nuxt-link to="/" class="flex items-center">
            <img src="../../../assets/images/flag-icon.png" class="mr-3 h-6 sm:h-9" alt="countries-icon" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Countries App</span>
          </nuxt-link>
          <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <MenuItem v-for="link in links" :key="link.name" :link="link" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  import MenuItem from './MenuItem.vue';
  
  export default {
    components: { MenuItem },
    data() {
      return {
        links: [
          { name: 'Home', path: '/' },
          { name: 'Country', path: '/' },
          { name: 'Contact', path: '/' },
          { name: 'About', path: '/' },
        ],
      };
    },
  };
  </script>
  