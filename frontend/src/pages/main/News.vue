<script setup lang="ts">
import AppNavbar from "@/components/layout/AppNavbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

const news = [
    {
        title: "Students Win National Programming Competition",
        date: "August 5, 2026",
        category: "Achievement",
        image: "https://picsum.photos/900/600?random=20",
        description:
            "DHS students successfully achieved outstanding results in the national programming competition."
    },
    {
        title: "New Digital Learning Facility Opens",
        date: "August 2, 2026",
        category: "School",
        image: "https://picsum.photos/800/500?random=21",
        description:
            "The school introduces new digital facilities to support modern learning activities."
    },
    {
        title: "Science Fair 2026 Successfully Held",
        date: "July 28, 2026",
        category: "Event",
        image: "https://picsum.photos/800/500?random=22",
        description:
            "Students showcase innovative projects through the annual science fair."
    },
    {
        title: "Admission Registration Now Open",
        date: "July 20, 2026",
        category: "Admission",
        image: "https://picsum.photos/800/500?random=23",
        description:
            "Registration for new students is officially open for the upcoming academic year."
    },
    {
        title: "DHS Celebrates Student Achievements",
        date: "July 15, 2026",
        category: "Achievement",
        image: "https://picsum.photos/800/500?random=24",
        description:
            "Recognizing students who achieved success in academic and non-academic fields."
    },
    {
        title: "New School Program Announced",
        date: "July 10, 2026",
        category: "Information",
        image: "https://picsum.photos/800/500?random=25",
        description:
            "A new program has been introduced to improve student development."
    }
];
</script>

<template>
    <div class="min-h-screen bg-white">

        <AppNavbar />

        <main class="pt-10">

            <!-- Hero -->
            <section class="px-6 py-24">
                <div class="container mx-auto">

                    <div class="max-w-3xl">

                        <p class="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                            News
                        </p>

                        <h1 class="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Latest News &
                            Updates
                        </h1>

                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            Stay updated with the latest activities,
                            achievements, and announcements from Dyta High School.
                        </p>

                    </div>

                </div>
            </section>
            <section class="px-6 py-24">
                <div class="container mx-auto">
                    <div class="mb-12 flex justify-between items-center">
                        <h2 class="text-3xl font-bold tracking-tight">
                            Latest Articles
                        </h2>
                        <div class="flex items-center">
                            
                        </div>
                    </div>
                    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <article v-for="item in news" :key="item.title"
                            class="group overflow-hidden cursor-pointer border border-white hover:rounded-xl transition-all hover:shadow duration-200 hover:border-gray-200">
                            <div class="overflow-hidden">
                                <img :src="item.image" :alt="item.title"
                                    class="aspect-video w-full object-cover transition duration-500 group-hover:scale-105" />
                            </div>
                            <div class="p-6">
                                <div class="flex items-center gap-3 text-sm text-gray-500">
                                    <span>
                                        {{ item.category }}
                                    </span>
                                    <span>
                                        •
                                    </span>
                                    <span>
                                        {{ item.date }}
                                    </span>
                                </div>
                                <h3 class="mt-4 text-xl font-semibold text-gray-900">
                                    {{ item.title }}
                                </h3>
                                <p class="mt-3 text-sm leading-7 text-gray-600">
                                    {{ item.description }}
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>

        <AppFooter />

    </div>
</template>