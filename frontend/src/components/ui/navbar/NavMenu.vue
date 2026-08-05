<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const isProfile = ref(false)
const isAcademic = ref(false)
const route = useRoute()
const profileRoutes = [
    '/profile',
    '/profile/vision-mission',
    '/profile/history',
    '/profile/facilities'
]
</script>

<template>
    <nav class="flex items-center">
        <router-link to="/" :class="route.path === '/' ? 'bg-gray-100' : ''"
            class="px-2 py-2 rounded-md transition duration-100 hover:bg-gray-100">Home</router-link>
        <div class="relative inline-block" @mouseleave="isProfile = false">
            <button :class="isProfile || profileRoutes.includes(route.path)
                    ? 'bg-gray-100'
                    : ''
                " @mouseenter="isProfile = true" class="block px-2 py-1.5 rounded-md transition duration-100">
                Profile
            </button>
            <div class="absolute right-0 top-full pt-2 z-50" v-if="isProfile" @mouseenter="isProfile = true">
                <div class="text-sm w-50 bg-white border border-gray-100 p-2 flex flex-col rounded-md gap-1 shadow-md">
                    <router-link :class="route.path === '/profile' ? 'bg-gray-100' : ''" to="/profile"
                        class="p-2 hover:bg-gray-100 rounded-md transition duration-100">About
                        School</router-link>
                    <router-link :class="route.path === '/profile/vision-mission' ? 'bg-gray-100' : ''"
                        to="/profile/vision-mission"
                        class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Vision &
                        Mission</router-link>
                    <router-link :class="route.path === '/profile/history' ? 'bg-gray-100' : ''" to="/profile/history"
                        class="p-2 hover:bg-gray-100 rounded-md transition duration-100">History</router-link>
                    <router-link :class="route.path === '/profile/facilities' ? 'bg-gray-100' : ''"
                        to="/profile/facilities"
                        class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Facilities</router-link>
                </div>
            </div>
        </div>
        <div class="relative inline-block" @mouseleave="isAcademic = false">
            <router-link :class="isAcademic ? 'bg-gray-100' : ''" to="" @mouseenter="isAcademic = true"
                class="block px-2 py-1.5 rounded-md transition duration-100">
                Academic
            </router-link>
            <div class="absolute right-0 top-full pt-2 z-50" v-if="isAcademic" @mouseenter="isAcademic = true">
                <div class="text-sm w-50 bg-white border border-gray-100 p-2 flex flex-col rounded-md gap-1 shadow-md">
                    <router-link to=""
                        class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Curriculum</router-link>
                    <router-link to=""
                        class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Calendar</router-link>
                    <router-link to=""
                        class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Registration</router-link>
                </div>
            </div>
        </div>
        <router-link to="/news" :class="route.path === '/news' ? 'bg-gray-100' : ''" class="px-2 py-2 hover:bg-gray-100 rounded-md transition duration-100">News</router-link>
        <router-link to="/events" :class="route.path === '/events' ? 'bg-gray-100' : ''" class="px-2 py-2 hover:bg-gray-100 rounded-md transition duration-100">Events</router-link>
        <router-link to="/gallery" :class="route.path === '/gallery' ? 'bg-gray-100' : ''" class="px-2 py-2 hover:bg-gray-100 rounded-md transition duration-100">Gallery</router-link>
        <router-link to="/contact" :class="route.path === '/contact' ? 'bg-gray-100' : ''" class="px-2 py-2 hover:bg-gray-100 rounded-md transition duration-100">Contact</router-link>
    </nav>
</template>