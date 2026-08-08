<script setup lang="ts">
import Button from '../ui/button/Button.vue';

</script>

<template>
    <section class="py-20">
        <div class="container mx-auto px-6">
            <div class="mb-12 flex items-end justify-between">
                <div>
                    <p class="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
                        News
                    </p>
                    <h2 class="mt-3 text-4xl font-bold tracking-tight">
                        Latest News
                    </h2>
                </div>
                <Button variant="ghost">
                    View All
                </Button>
            </div>

            <div class="grid gap-8 lg:grid-cols-3">

                <article class="group overflow-hidden hover:border-gray-300 transition duration-200 hover:shadow-xl rounded-2xl border border-gray-200 lg:col-span-2">
                    <img src="https://picsum.photos/900/600"
                        class="aspect-video w-full object-cover transition duration-500 ">

                    <div class="p-8">
                        <span class="text-sm text-muted-foreground">
                            August 5, 2026
                        </span>

                        <h3 class="mt-3 text-3xl font-semibold transition group-hover:text-primary">
                            Students Win National Programming Competition
                        </h3>

                        <p class="mt-4 text-muted-foreground">
                            Our students successfully achieved first place in the National
                            Programming Competition among hundreds of schools.
                        </p>

                        <Button variant="link" class="mt-5 p-0">
                            Read Article →
                        </Button>
                    </div>
                </article>

                <!-- Side News -->
                <div class="space-y-6">

                    <article class="group flex gap-4 hover:border-gray-300 transition duration-200 hover:shadow-xl rounded-xl border border-gray-200 p-4">
                        <img src="https://picsum.photos/300/200" class="h-24 w-32 rounded-lg object-cover">

                        <div>
                            <p class="text-xs text-muted-foreground">
                                Aug 3, 2026
                            </p>

                            <h4 class="mt-2 font-semibold group-hover:underline">
                                Science Fair 2026 Successfully Held
                            </h4>
                        </div>
                    </article>

                    <article class="group flex gap-4 rounded-xl hover:border-gray-300 transition duration-200 hover:shadow-xl border border-gray-200 p-4">
                        <img src="https://picsum.photos/301/200" class="h-24 w-32 rounded-lg object-cover">

                        <div>
                            <p class="text-xs text-muted-foreground">
                                Jul 30, 2026
                            </p>

                            <h4 class="mt-2 font-semibold group-hover:underline">
                                New Computer Laboratory Opens
                            </h4>
                        </div>
                    </article>

                    <article class="group flex gap-4 rounded-xl hover:border-gray-300 transition duration-200 hover:shadow-xl border border-gray-200 p-4">
                        <img src="https://picsum.photos/302/200" class="h-24 w-32 rounded-lg object-cover">

                        <div>
                            <p class="text-xs text-muted-foreground">
                                Jul 27, 2026
                            </p>

                            <h4 class="mt-2 font-semibold group-hover:underline">
                                Admission Registration Now Open
                            </h4>
                        </div>
                    </article>

                </div>

            </div>

        </div>
    </section>
</template>