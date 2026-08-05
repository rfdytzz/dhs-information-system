<script setup lang="ts">
import AppNavbar from "@/components/layout/AppNavbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<template>
    <div class="min-h-screen bg-white">
        <AppNavbar />
        <main class="pt-10">
            <section class="px-6 py-24">
                <div class="container mx-auto">
                    <div class="max-w-3xl">
                        <p class="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                            School History
                        </p>
                        <h1 class="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Our Journey Through
                            The Years
                        </h1>
                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            Discover the story of Dyta High School, from its
                            beginning to becoming a modern educational institution.
                        </p>
                    </div>
                </div>
            </section>
            <section class="border-y border-gray-200 px-6 py-24">
                <div class="container mx-auto">
                    <div class="relative mx-auto max-w-4xl">
                        <div class="absolute left-4 top-0 h-full w-px bg-gray-200 md:left-1/2"></div>
                        <div class="relative mb-16">
                            <div
                                class="absolute left-0 top-1 h-8 w-8 rounded-full border-4 border-white bg-gray-900 shadow md:left-1/2 md:-translate-x-1/2">
                            </div>
                            <div class="ml-14 md:ml-0 md:grid md:grid-cols-2 md:gap-16">
                                <div class="md:text-right">
                                    <span class="text-sm font-medium text-gray-500">
                                        2005
                                    </span>
                                    <h3 class="mt-2 text-2xl font-bold">
                                        School Founded
                                    </h3>
                                </div>
                                <p class="mt-4 leading-7 text-gray-600 md:mt-0">
                                    Dyta High School was established with a
                                    commitment to provide quality education
                                    and create opportunities for students.
                                </p>
                            </div>
                        </div>
                        <div class="relative mb-16">
                            <div
                                class="absolute left-0 top-1 h-8 w-8 rounded-full border-4 border-white bg-gray-900 shadow md:left-1/2 md:-translate-x-1/2">
                            </div>
                            <div class="ml-14 md:ml-0 md:grid md:grid-cols-2 md:gap-16">
                                <div>
                                    <span class="text-sm font-medium text-gray-500">
                                        2012
                                    </span>
                                    <h3 class="mt-2 text-2xl font-bold">
                                        Facility Development
                                    </h3>
                                </div>
                                <p class="mt-4 leading-7 text-gray-600 md:mt-0">
                                    Expanded school facilities including
                                    modern classrooms, laboratories, and
                                    digital learning spaces.
                                </p>
                            </div>
                        </div>
                        <div class="relative mb-16">
                            <div
                                class="absolute left-0 top-1 h-8 w-8 rounded-full border-4 border-white bg-gray-900 shadow md:left-1/2 md:-translate-x-1/2">
                            </div>
                            <div class="ml-14 md:ml-0 md:grid md:grid-cols-2 md:gap-16">
                                <div class="md:text-right">
                                    <span class="text-sm font-medium text-gray-500">
                                        2020
                                    </span>
                                    <h3 class="mt-2 text-2xl font-bold">
                                        Digital Transformation
                                    </h3>
                                </div>
                                <p class="mt-4 leading-7 text-gray-600 md:mt-0">
                                    Started implementing digital solutions
                                    to support learning and school management.
                                </p>
                            </div>
                        </div>
                        <div class="relative">
                            <div
                                class="absolute left-0 top-1 h-8 w-8 rounded-full border-4 border-white bg-gray-900 shadow md:left-1/2 md:-translate-x-1/2">
                            </div>
                            <div class="ml-14 md:ml-0 md:grid md:grid-cols-2 md:gap-16">
                                <div>
                                    <span class="text-sm font-medium text-gray-500">
                                        2026
                                    </span>
                                    <h3 class="mt-2 text-2xl font-bold">
                                        Future Innovation
                                    </h3>
                                </div>
                                <p class="mt-4 leading-7 text-gray-600 md:mt-0">
                                    Continuing to innovate and prepare
                                    students for a rapidly changing world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="px-6 py-24">
                <div class="container mx-auto">
                    <div class="rounded-3xl bg-gray-900 px-8 py-16 text-center">
                        <h2 class="text-4xl font-bold text-white">
                            Growing Together Since Day One
                        </h2>
                        <p class="mx-auto mt-5 max-w-2xl text-gray-400">
                            Every milestone represents our commitment to
                            providing better education for future generations.
                        </p>
                    </div>
                </div>
            </section>
        </main>
        <AppFooter />
    </div>
</template>