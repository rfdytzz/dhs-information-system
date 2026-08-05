<script setup lang="ts">
import AppNavbar from "@/components/layout/AppNavbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

const events = [
    {
        title: "DHS Graduation Ceremony 2026",
        date: "August 20, 2026",
        location: "Main Auditorium",
        image: "https://picsum.photos/800/500?random=40",
        description:
            "A special ceremony celebrating student achievements and graduation."
    },
    {
        title: "Technology Innovation Expo",
        date: "September 5, 2026",
        location: "Computer Laboratory",
        image: "https://picsum.photos/800/500?random=41",
        description:
            "Students showcase creative projects and technology innovations."
    },
    {
        title: "Annual Sports Competition",
        date: "September 15, 2026",
        location: "School Field",
        image: "https://picsum.photos/800/500?random=42",
        description:
            "A sports event to encourage teamwork and healthy competition."
    },
    {
        title: "Parent Meeting",
        date: "October 2, 2026",
        location: "School Hall",
        image: "https://picsum.photos/800/500?random=43",
        description:
            "A meeting between parents and teachers to discuss student progress."
    },
];
</script>

<template>
    <div class="min-h-screen bg-white">
        <AppNavbar />
        <main class="pt-10">
            <section class="px-6 py-24">
                <div class="container mx-auto">
                    <div class="max-w-3xl">
                        <p class="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                            Events
                        </p>
                        <h1 class="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            School Events &
                            Activities
                        </h1>
                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            Discover upcoming events, activities, and memorable
                            moments happening at Dyta High School.
                        </p>
                    </div>
                </div>
            </section>
            <section class="border-y border-gray-200 px-6 py-24">
                <div class="container mx-auto">
                    <div class="grid items-center gap-12 lg:grid-cols-2">
                        <img src="https://picsum.photos/1000/700?random=50" alt="Upcoming Event"
                            class="aspect-video rounded-2xl object-cover" />
                        <div>
                            <span class="text-sm uppercase tracking-[0.2em] text-gray-500">
                                Upcoming Event
                            </span>
                            <h2 class="mt-4 text-3xl font-bold tracking-tight">
                                Dyta High School Anniversary
                            </h2>
                            <p class="mt-5 leading-7 text-gray-600">
                                Celebrate our school's journey with students,
                                teachers, alumni, and the entire school community.
                            </p>
                            <div class="mt-6 space-y-2 text-sm text-gray-500">
                                <p>
                                    Date : August 25, 2026
                                </p>
                                <p>
                                    Location : Main Auditorium
                                </p>
                            </div>
                            <button
                                class="mt-8 rounded-md bg-gray-900 px-5 py-2.5 text-sm text-white transition hover:bg-gray-700">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="px-6 py-24">
                <div class="container mx-auto">
                    <div class="mb-12">
                        <h2 class="text-3xl font-bold tracking-tight">
                            Upcoming Events
                        </h2>
                    </div>
                    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <article v-for="event in events" :key="event.title"
                            class="group overflow-hidden rounded-2xl border border-gray-200">
                            <div class="overflow-hidden">
                                <img :src="event.image" :alt="event.title"
                                    class="aspect-video w-full object-cover transition duration-500 group-hover:scale-105" />
                            </div>
                            <div class="p-6">
                                <div class="text-sm text-gray-500">
                                    {{ event.date }}
                                </div>
                                <h3 class="mt-3 text-xl font-semibold">
                                    {{ event.title }}
                                </h3>
                                <p class="mt-2 text-sm text-gray-500">
                                    {{ event.location }}
                                </p>
                                <p class="mt-4 text-sm leading-7 text-gray-600">
                                    {{ event.description }}
                                </p>
                                <router-link to="/events/detail"
                                    class="mt-5 inline-block text-sm font-medium hover:underline">
                                    Learn More →
                                </router-link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section class="border-y border-gray-200 px-6 py-24">
                <div class="container mx-auto">
                    <div class="grid gap-10 lg:grid-cols-2">
                        <div>
                            <p class="text-sm uppercase tracking-[0.3em] text-gray-500">
                                Academic Calendar
                            </p>
                            <h2 class="mt-4 text-3xl font-bold">
                                Plan Your Activities
                            </h2>
                            <p class="mt-5 leading-7 text-gray-600">
                                Stay informed about important dates and school
                                activities throughout the academic year.
                            </p>
                        </div>
                        <div class="rounded-2xl border border-gray-200 p-8">
                            <div class="flex justify-between border-b border-gray-200 py-4">
                                <span>Semester Start</span>
                                <span class="text-gray-500">
                                    July 2026
                                </span>
                            </div>
                            <div class="flex justify-between border-b border-gray-200 py-4">
                                <span>Mid Exam</span>
                                <span class="text-gray-500">
                                    October 2026
                                </span>
                            </div>
                            <div class="flex justify-between py-4">
                                <span>Final Exam</span>
                                <span class="text-gray-500">
                                    December 2026
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <AppFooter />
    </div>
</template>