<script setup>
import { ref } from 'vue';
import Button from '../ui/button/Button.vue';

const isProfile = ref(false)
const isAcademic = ref(false)
</script>

<template>
    <header class="max-w-full py-2 border-b border-gray-200 px-5">
        <div class="flex items-center justify-between">
            <div class="flex gap-2 items-center">
                <img src="/src/assets/dhs-logo.png" class="size-16" alt="">
                <div class="flex flex-col">
                    <div class="text-md font-semibold">DYTA HIGH SCHOOL</div>
                    <div class="text-sm">DIGITAL CENTER</div>
                </div>
            </div>
            <nav class="flex items-center gap-2">
                <router-link class="px-2 py-1.5 rounded-md transition duration-100 hover:bg-gray-100">Home</router-link>
                <div class="relative inline-block" @mouseleave="isProfile = false">
                    <router-link :class="isProfile ? 'bg-gray-100' : ''" to="" @mouseenter="isProfile = true"
                        class="block px-2 py-1.5 rounded-md transition duration-100">
                        Profile
                    </router-link>
                    <div class="absolute right-0 top-full pt-2 z-50" v-if="isProfile" @mouseenter="isProfile = true">
                        <div
                            class="text-sm w-50 bg-white border border-gray-100 p-2 flex flex-col rounded-md gap-1 shadow-md">
                            <router-link to="" class="p-2 hover:bg-gray-100 rounded-md transition duration-100">About
                                School</router-link>
                            <router-link to="" class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Vision &
                                Mission</router-link>
                            <router-link to=""
                                class="p-2 hover:bg-gray-100 rounded-md transition duration-100">History</router-link>
                            <router-link to=""
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
                        <div
                            class="text-sm w-50 bg-white border border-gray-100 p-2 flex flex-col rounded-md gap-1 shadow-md">
                            <router-link to=""
                                class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Curriculum</router-link>
                            <router-link to=""
                                class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Calendar</router-link>
                            <router-link to=""
                                class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Registration</router-link>
                        </div>
                    </div>
                </div>
                <router-link to=""
                    class="px-2 py-1.5 hover:bg-gray-100 rounded-md transition duration-100">News</router-link>
                <router-link to=""
                    class="px-2 py-1.5 hover:bg-gray-100 rounded-md transition duration-100">Events</router-link>
                <router-link to=""
                    class="px-2 py-1.5 hover:bg-gray-100 rounded-md transition duration-100">Gallery</router-link>
                <router-link to=""
                    class="px-2 py-1.5 hover:bg-gray-100 rounded-md transition duration-100">Contact</router-link>
            </nav>
            <Button>Log in</Button>
        </div>
    </header>
</template>