<template>
    <li>
      <nuxt-link :to="link.path" class="block py-2 pr-4 pl-3 text-lg font-semibold text-white hover:bg-gray-50 hover:text-gray-700 transition-all ease-linear rounded-md">
        {{ link.name }}
      </nuxt-link>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      link: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  