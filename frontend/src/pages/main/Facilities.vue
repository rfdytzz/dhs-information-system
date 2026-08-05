<script setup lang="ts">
import AppNavbar from "@/components/layout/AppNavbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

const facilities = [
    {
        title: "Smart Classroom",
        description:
            "Modern classrooms equipped with digital learning technology to support interactive education.",
        image: "https://picsum.photos/800/500?random=1",
    },
    {
        title: "Computer Laboratory",
        description:
            "Advanced computer facilities for programming, technology, and digital learning activities.",
        image: "https://picsum.photos/800/500?random=2",
    },
    {
        title: "Science Laboratory",
        description:
            "Complete laboratory facilities for practical experiments and scientific exploration.",
        image: "https://picsum.photos/800/500?random=3",
    },
    {
        title: "Library",
        description:
            "A comfortable learning space with various books and digital resources.",
        image: "https://picsum.photos/800/500?random=4",
    },
    {
        title: "Sports Center",
        description:
            "Facilities that support physical activities, sports, and student talents.",
        image: "https://picsum.photos/800/500?random=5",
    },
    {
        title: "Auditorium",
        description:
            "A multipurpose area for school events, presentations, and activities.",
        image: "https://picsum.photos/800/500?random=6",
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
                            Facilities
                        </p>
                        <h1 class="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Modern Facilities For
                            Better Learning
                        </h1>
                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            Discover facilities designed to support academic
                            growth, creativity, collaboration, and student
                            activities.
                        </p>
                    </div>
                </div>
            </section>
            <section class="border-y border-gray-200 px-6 py-24">
                <div class="container mx-auto">
                    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <article v-for="facility in facilities" :key="facility.title"
                            class="group overflow-hidden rounded-2xl border border-gray-200">
                            <div class="overflow-hidden">
                                <img :src="facility.image" :alt="facility.title"
                                    class="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105" />
                            </div>
                            <div class="p-6">
                                <h2 class="text-xl font-semibold text-gray-900">
                                    {{ facility.title }}
                                </h2>
                                <p class="mt-3 text-sm leading-7 text-gray-600">
                                    {{ facility.description }}
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section class="px-6 py-24">
                <div class="container mx-auto">
                    <div class="grid items-center gap-12 lg:grid-cols-2">
                        <img src="https://picsum.photos/900/600?random=10" alt="Campus"
                            class="rounded-3xl object-cover" />
                        <div>
                            <p class="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                                Campus Environment
                            </p>
                            <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                A Place To Learn,
                                Create, And Grow
                            </h2>
                            <p class="mt-5 leading-8 text-gray-600">
                                Our campus provides a comfortable environment
                                where students can develop knowledge, skills,
                                creativity, and confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="px-6 pb-24">
                <div class="container mx-auto">
                    <div class="rounded-3xl bg-gray-900 px-8 py-16 text-center">
                        <h2 class="text-4xl font-bold tracking-tight text-white">
                            Experience DHS Campus
                        </h2>
                        <p class="mx-auto mt-5 max-w-2xl text-gray-400">
                            Explore a learning environment built to support
                            every student's journey.
                        </p>
                    </div>
                </div>
            </section>
        </main>
        <AppFooter />
    </div>
</template>