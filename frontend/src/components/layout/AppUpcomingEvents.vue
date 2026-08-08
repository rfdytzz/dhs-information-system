<script setup lang="ts">
import Button from '../ui/button/Button.vue';

const events = [
    {
        date: "20",
        month: "AUG",
        title: "Graduation Ceremony 2026",
        description:
            "Celebrating the achievements and journey of our graduating students.",
        location: "Main Auditorium",
    },
    {
        date: "05",
        month: "SEP",
        title: "Technology Innovation Expo",
        description:
            "Students showcase creative projects and technology innovations.",
        location: "Computer Laboratory",
    },
    {
        date: "15",
        month: "SEP",
        title: "Annual Sports Competition",
        description:
            "A school event that promotes teamwork and sportsmanship.",
        location: "School Field",
    },
];
</script>

<template>
    <section class="px-6 py-24">
        <div class="container mx-auto">
            <div class="mb-12 flex items-end justify-between">
                <div>
                    <p class="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
                        Events
                    </p>
                    <h2 class="mt-3 text-4xl font-bold tracking-tight">
                        Upcoming Events
                    </h2>
                </div>
                <Button variant="ghost">
                    View All
                </Button>
            </div>

            <div class="mt-12 grid gap-6 lg:grid-cols-3">

                <article v-for="event in events" :key="event.title"
                    class="group rounded-2xl border border-gray-200 p-6 transition hover:shadow-md">

                    <div class="flex gap-5">

                        <!-- Date -->
                        <div
                            class="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-gray-900 text-white">
                            <span class="text-xl font-bold">
                                {{ event.date }}
                            </span>

                            <span class="text-xs text-gray-400">
                                {{ event.month }}
                            </span>
                        </div>


                        <div>

                            <h3 class="text-lg font-semibold text-gray-900">
                                {{ event.title }}
                            </h3>


                            <p class="mt-2 text-sm leading-6 text-gray-600">
                                {{ event.description }}
                            </p>

                        </div>

                    </div>


                    <div class="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-500">
                        {{ event.location }}
                    </div>


                </article>


            </div>


            <!-- Mobile View All -->
            <div class="mt-8 text-center sm:hidden">

                <router-link to="/events" class="text-sm font-medium text-gray-600 hover:text-gray-900">
                    View All Events →
                </router-link>

            </div>


        </div>
    </section>
</template>