<script setup>
import AppCTA from '@/components/layout/AppCTA.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import AppLatestNews from '@/components/layout/AppLatestNews.vue';
import AppNavbar from '@/components/layout/AppNavbar.vue';
import AppPrincipalWelcome from '@/components/layout/AppPrincipalWelcome.vue';
import AppQuickStats from '@/components/layout/AppQuickStats.vue';
import { onMounted } from 'vue';
import AppUpcomingEvents from '@/components/layout/AppUpcomingEvents.vue';
</script>

<template>
    <AppNavbar />

    <section class="relative overflow-hidden mt-15">
        <div class="container mx-auto px-6 py-16 lg:py-24">
            <div class="grid items-center gap-10 lg:grid-cols-2">
                <div class="space-y-6">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Building Future Through
                        <span class="text-gray-500">
                            Digital Education
                        </span>
                    </h1>
                    <p class="max-w-xl text-lg text-gray-600">
                        Dyta High School Information System provides modern digital
                        services to connect students, teachers, and school communities
                        in one integrated platform.
                    </p>
                    <div class="flex flex-wrap gap-3">
                        <button class="rounded-md bg-gray-900 px-5 py-2.5 text-white transition hover:bg-gray-700">
                            Learn More
                        </button>
                        <button
                            class="rounded-md border border-gray-300 px-5 py-2.5 text-gray-900 transition hover:bg-gray-100">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div class="relative">
                    <div class="overflow-hidden rounded-2xl shadow-xl">
                        <img src="/src/assets/hero.jpg" alt="Dyta High School"
                            class="aspect-video w-full object-cover" />
                    </div>
                    <div class="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-gray-100"></div>
                    <div class="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-gray-100"></div>
                </div>
            </div>
        </div>
    </section>

    <AppQuickStats />
    <AppPrincipalWelcome />
    <AppLatestNews />
    <AppUpcomingEvents />
    <AppCTA />
    <AppFooter />
</template>