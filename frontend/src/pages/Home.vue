<script setup>
import AppNavbar from '@/components/layout/AppNavbar.vue';
import { onMounted } from 'vue';

onMounted(() => {
    document.title = "DHS - Information System"
})
</script>

<template>
    <AppNavbar />
</template>