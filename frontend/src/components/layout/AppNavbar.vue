<script setup>
import { ref } from 'vue';
import Button from '../ui/button/Button.vue';
import NavMenu from '../ui/navbar/NavMenu.vue';
import { Menu, X } from '@lucide/vue';

const isSidebar = ref(false)
const toggleSidebar = () => {
    isSidebar.value = !isSidebar.value
    document.body.classList.toggle('overflow-hidden', isSidebar.value)
}
</script>

<template>
    <header class="max-w-full fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-10 py-2 border-b border-gray-200 px-5">
        <div class="flex items-center justify-between">
            <div class="flex gap-2 items-center">
                <img src="/src/assets/dhs-logo.png" class="size-16" alt="">
                <div class="flex flex-col">
                    <div class="text-md font-semibold">DYTA HIGH SCHOOL</div>
                    <div class="text-sm">DIGITAL CENTER</div>
                </div>
            </div>
            <NavMenu class="lg:block md:hidden hidden" />
            <div class="lg:block md:hidden hidden">
                <Button>Log in</Button>
            </div>
            <div class="lg:hidden md:block block">
                <div @click="toggleSidebar" class="cursor-pointer p-2 rounded-full hover:bg-gray-200">
                    <Menu class="size-8" />
                </div>
            </div>
        </div>
    </header>

    <div @click="toggleSidebar" v-if="isSidebar" class="inset-0 z-10 bg-black/40 top-0 fixed"></div>

    <div :class="isSidebar ? 'translate-x-0' : 'translate-x-full'"
        class="fixed transitionn duration-200 z-20 w-72 h-screen top-0 right-0 bg-white border border-gray-200">
        <div class="flex justify-between items-center p-5 h-20 border-b border-gray-200">
            <div class="text-md font-semibold">DHS MENU</div>
            <div @click="toggleSidebar" class="cursor-pointer p-2 rounded-full hover:bg-gray-200">
                <X class="size-8" />
            </div>
        </div>
        <div class="flex flex-col gap-1 p-5">
            <router-link to="" class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Home</router-link>
            <router-link to="" class="p-2 hover:bg-gray-100 rounded-md transition duration-100">About
                School</router-link>
            <router-link to="" class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Vision &
                Mission</router-link>
            <router-link to="" class="p-2 hover:bg-gray-100 rounded-md transition duration-100">History</router-link>
            <router-link to="" class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Facilities</router-link>
            <router-link to="" class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Curriculum</router-link>
            <router-link to="" class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Calendar</router-link>
            <router-link to="" class="p-2 hover:bg-gray-100 rounded-md transition duration-100">News</router-link>
            <router-link to="" class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Events</router-link>
            <router-link to="" class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Gallery</router-link>
            <router-link to="" class="p-2 hover:bg-gray-100 rounded-md transition duration-100">Contact</router-link>
        </div>
        <div class="flex justify-between items-center p-5 h-20 border-b border-gray-200">
            <Button size="long">Log in</Button>
        </div>
    </div>
</template>