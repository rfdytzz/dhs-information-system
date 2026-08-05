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
                            Vision & Mission
                        </p>

                        <h1 class="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Our Direction and
                            Commitment
                        </h1>

                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            Our vision and mission guide Dyta High School in
                            creating meaningful education and preparing students
                            for future challenges.
                        </p>
                    </div>

                </div>
            </section>


            <!-- Vision -->
            <section class="border-y border-gray-200 px-6 py-24">
                <div class="container mx-auto">

                    <div class="grid gap-12 lg:grid-cols-2">

                        <div>
                            <p class="text-sm uppercase tracking-[0.3em] text-gray-500">
                                Vision
                            </p>

                            <h2 class="mt-4 text-4xl font-bold tracking-tight text-gray-900">
                                Becoming a Leading School
                                for Future Generations
                            </h2>
                        </div>


                        <div>
                            <p class="text-lg leading-8 text-gray-600">
                                To become an innovative and excellent educational
                                institution that develops students with knowledge,
                                character, creativity, and global competitiveness.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            <section class="px-6 py-24">
                <div class="container mx-auto">

                    <div class="text-start">
                        <p class="text-sm uppercase tracking-[0.3em] text-gray-500">
                            Mission
                        </p>

                        <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-900">
                            Our Commitment
                        </h2>
                    </div>


                    <div class="mt-14 grid gap-6 md:grid-cols-2">

                        <div class="rounded-2xl border border-gray-200 p-8">
                            <span class="text-sm text-gray-500">
                                01
                            </span>

                            <h3 class="mt-4 text-xl font-semibold">
                                Quality Education
                            </h3>

                            <p class="mt-3 leading-7 text-gray-600">
                                Providing high-quality learning programs
                                supported by professional educators.
                            </p>
                        </div>


                        <div class="rounded-2xl border border-gray-200 p-8">
                            <span class="text-sm text-gray-500">
                                02
                            </span>

                            <h3 class="mt-4 text-xl font-semibold">
                                Digital Innovation
                            </h3>

                            <p class="mt-3 leading-7 text-gray-600">
                                Utilizing technology to create modern and
                                effective learning experiences.
                            </p>
                        </div>


                        <div class="rounded-2xl border border-gray-200 p-8">
                            <span class="text-sm text-gray-500">
                                03
                            </span>

                            <h3 class="mt-4 text-xl font-semibold">
                                Character Development
                            </h3>

                            <p class="mt-3 leading-7 text-gray-600">
                                Building students with integrity, discipline,
                                and responsibility.
                            </p>
                        </div>


                        <div class="rounded-2xl border border-gray-200 p-8">
                            <span class="text-sm text-gray-500">
                                04
                            </span>

                            <h3 class="mt-4 text-xl font-semibold">
                                Student Growth
                            </h3>

                            <p class="mt-3 leading-7 text-gray-600">
                                Supporting students to discover talents and
                                achieve their goals.
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            <!-- Quote -->
            <section class="px-6 pb-24">
                <div class="container mx-auto">

                    <div class="rounded-3xl bg-gray-900 px-8 py-16 text-center">

                        <blockquote class="mx-auto max-w-3xl text-3xl font-semibold leading-tight text-white">
                            "Education is not only about what students learn,
                            but also about who they become."
                        </blockquote>

                        <p class="mt-6 text-gray-400">
                            Dyta High School
                        </p>

                    </div>

                </div>
            </section>

        </main>

        <AppFooter />

    </div>
</template>