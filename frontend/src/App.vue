<script setup>
import { onMounted } from 'vue';
import { useGetUser } from './composables/user/useGetUser';
const { getUser } = useGetUser()

onMounted(() => {
  document.title = "DHS - Information System"
  if (localStorage.getItem('token')) {
    getUser()
  }
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
