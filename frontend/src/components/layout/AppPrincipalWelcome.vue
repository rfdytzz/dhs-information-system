<script setup lang="ts">
</script>

<template>
    <section class="bg-background">
        <div class="container mx-auto px-6 py-24">
            <div class="grid items-center gap-16 lg:grid-cols-2">
                <div class="relative">
                    <img src="/src/assets/principal.jpg" alt="Principal" class="aspect-4/5 w-full rounded-2xl object-cover" />

                    <div
                        class="absolute -bottom-6 -right-6 hidden border border-gray-200 bg-white rounded-xl bg-background p-5 shadow-sm lg:block">
                        <p class="text-sm text-muted-foreground">
                            Principal
                        </p>

                        <h3 class="mt-1 font-semibold">
                            Dr. John Doe, M.Ed.
                        </h3>
                    </div>
                </div>

                <div>
                    <span
                        class="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        Principal's Welcome
                    </span>

                    <h2 class="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
                        A Message from the Principal
                    </h2>

                    <blockquote class="mt-8 border-l-2 border-gray-300 pl-6 text-lg leading-8 text-muted-foreground">
                        At Dyta High School, we believe that education is more than
                        academic achievement. It is about building character,
                        encouraging creativity, and preparing students to become
                        confident leaders in an ever-changing world.
                    </blockquote>

                    <p class="mt-6 leading-8 text-muted-foreground">
                        We are committed to providing a safe, inclusive, and innovative
                        learning environment where every student has the opportunity to
                        discover their potential and achieve excellence.
                    </p>

                    <div class="mt-8">
                        <h3 class="font-semibold">
                            Dr. John Doe, M.Ed.
                        </h3>

                        <p class="text-sm text-muted-foreground">
                            Principal of Dyta High School
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>