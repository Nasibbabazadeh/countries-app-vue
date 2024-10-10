<script setup lang="ts">
import Footer from '~/components/common/footer/Footer.vue';
import Header from '~/components/common/header/Header.vue';
</script>

<template>
    <Header/>
        <slot/>
    <Footer/>
</template>