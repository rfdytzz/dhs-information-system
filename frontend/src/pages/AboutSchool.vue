<script setup lang="ts">
import AppNavbar from "@/components/layout/AppNavbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<template>
    <AppNavbar />

    <main class="pt-10">
        <section class="px-6 py-24">
            <div class="container mx-auto">
                <div class="max-w-3xl">
                    <p class="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                        About School
                    </p>

                    <h1 class="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Building Future Through
                        Quality Education
                    </h1>

                    <p class="mt-6 text-lg leading-8 text-gray-600">
                        Dyta High School is committed to creating an innovative
                        learning environment that encourages students to grow,
                        explore their potential, and prepare for the future.
                    </p>
                </div>

            </div>
        </section>


        <!-- About Content -->
        <section class="border-y border-gray-200 px-6 py-24">
            <div class="container mx-auto">

                <div class="grid items-center gap-14 lg:grid-cols-2">

                    <div>
                        <img src="/src/assets/hero.jpg" alt="Dyta High School"
                            class="aspect-video w-full rounded-2xl object-cover" />
                    </div>


                    <div>
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                            About Dyta High School
                        </h2>

                        <p class="mt-6 leading-8 text-gray-600">
                            Dyta High School is an educational institution
                            dedicated to providing high-quality education
                            supported by technology, experienced teachers,
                            and modern facilities.
                        </p>

                        <p class="mt-4 leading-8 text-gray-600">
                            We believe that every student has unique potential.
                            Through academic programs, extracurricular activities,
                            and character development, we help students become
                            confident and responsible individuals.
                        </p>
                    </div>

                </div>

            </div>
        </section>


        <!-- Values -->
        <section class="px-6 py-24">
            <div class="container mx-auto">

                <div class="text-center">
                    <p class="text-sm uppercase tracking-[0.3em] text-gray-500">
                        Our Values
                    </p>

                    <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-900">
                        What We Stand For
                    </h2>
                </div>


                <div class="mt-14 grid gap-6 md:grid-cols-3">

                    <div class="rounded-xl border border-gray-200 p-8">
                        <h3 class="text-xl font-semibold">
                            Innovation
                        </h3>

                        <p class="mt-3 text-gray-600">
                            Encouraging creativity and adapting to modern
                            educational technology.
                        </p>
                    </div>


                    <div class="rounded-xl border border-gray-200 p-8">
                        <h3 class="text-xl font-semibold">
                            Excellence
                        </h3>

                        <p class="mt-3 text-gray-600">
                            Striving for academic achievement and continuous
                            improvement.
                        </p>
                    </div>


                    <div class="rounded-xl border border-gray-200 p-8">
                        <h3 class="text-xl font-semibold">
                            Character
                        </h3>

                        <p class="mt-3 text-gray-600">
                            Building integrity, responsibility, and leadership
                            in every student.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    </main>
    <AppFooter />
</template>