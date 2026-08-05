<script setup lang="ts">
import AppNavbar from "@/components/layout/AppNavbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

const galleries = [
    {
        title: "Classroom Activities",
        category: "Academic",
        image: "https://picsum.photos/800/600?random=60",
    },
    {
        title: "Technology Practice",
        category: "Laboratory",
        image: "https://picsum.photos/800/600?random=61",
    },
    {
        title: "Student Collaboration",
        category: "Activities",
        image: "https://picsum.photos/800/600?random=62",
    },
    {
        title: "Sports Day",
        category: "Sport",
        image: "https://picsum.photos/800/600?random=63",
    },
    {
        title: "School Event",
        category: "Event",
        image: "https://picsum.photos/800/600?random=64",
    },
    {
        title: "Graduation Ceremony",
        category: "Achievement",
        image: "https://picsum.photos/800/600?random=65",
    },
    {
        title: "Campus Environment",
        category: "Campus",
        image: "https://picsum.photos/800/600?random=66",
    },
    {
        title: "Student Project",
        category: "Innovation",
        image: "https://picsum.photos/800/600?random=67",
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
                            Gallery
                        </p>
                        <h1 class="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Moments At
                            Dyta High School
                        </h1>
                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            Explore memorable moments, activities, and
                            achievements from our school community.
                        </p>
                    </div>
                </div>
            </section>
            <section class="border-y border-gray-200 px-6 py-24">
                <div class="container mx-auto">
                    <div class="mb-12 flex items-end justify-between">
                        <div>
                            <p class="text-sm uppercase tracking-[0.3em] text-gray-500">
                                Our Collection
                            </p>
                            <h2 class="mt-3 text-3xl font-bold">
                                School Gallery
                            </h2>
                        </div>
                    </div>
                    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <article
                            v-for="gallery in galleries"
                            :key="gallery.title"
                            class="group relative overflow-hidden rounded-2xl border border-gray-200"
                        >
                            <img
                                :src="gallery.image"
                                :alt="gallery.title"
                                class="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-110"
                            />
                            <div
                                class="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/70 via-black/20 to-transparent p-6 opacity-0 transition duration-300 group-hover:opacity-100"
                            >
                                <span class="text-sm text-gray-300">
                                    {{ gallery.category }}
                                </span>
                                <h3 class="mt-1 text-xl font-semibold text-white">
                                    {{ gallery.title }}
                                </h3>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section class="px-6 py-24">
                <div class="container mx-auto">
                    <div class="rounded-3xl bg-gray-900 px-8 py-16 text-center">
                        <h2 class="text-4xl font-bold tracking-tight text-white">
                            Every Moment Tells A Story
                        </h2>
                        <p class="mx-auto mt-5 max-w-2xl text-gray-400">
                            From learning experiences to unforgettable events,
                            every activity becomes part of the DHS journey.
                        </p>
                    </div>
                </div>
            </section>
        </main>
        <AppFooter />
    </div>
</template>