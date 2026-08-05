<script setup lang="ts">
import AppNavbar from "@/components/layout/AppNavbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
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
                            Contact
                        </p>


                        <h1 class="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Let's Connect With
                            Dyta High School
                        </h1>


                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            Have questions about admissions, programs, or school
                            activities? Our team is ready to help you.
                        </p>

                    </div>

                </div>
            </section>



            <!-- Contact Section -->
            <section class="border-y border-gray-200 px-6 py-24">

                <div class="container mx-auto">

                    <div class="grid gap-12 lg:grid-cols-2">


                        <!-- Information -->
                        <div>

                            <h2 class="text-3xl font-bold">
                                Get In Touch
                            </h2>


                            <p class="mt-4 leading-7 text-gray-600">
                                Visit our campus or contact us through the
                                information below.
                            </p>


                            <div class="mt-10 space-y-6">


                                <div class="rounded-xl border border-gray-200 p-6">

                                    <h3 class="font-semibold">
                                        Address
                                    </h3>

                                    <p class="mt-2 text-gray-600">
                                        Jl. Pendidikan No. 10,
                                        Indonesia
                                    </p>

                                </div>



                                <div class="rounded-xl border border-gray-200 p-6">

                                    <h3 class="font-semibold">
                                        Email
                                    </h3>

                                    <p class="mt-2 text-gray-600">
                                        info@dytahighschool.com
                                    </p>

                                </div>



                                <div class="rounded-xl border border-gray-200 p-6">

                                    <h3 class="font-semibold">
                                        Phone
                                    </h3>

                                    <p class="mt-2 text-gray-600">
                                        +62 812 3456 7890
                                    </p>

                                </div>


                            </div>

                        </div>



                        <!-- Form -->
                        <div class="rounded-2xl border border-gray-200 p-8">


                            <h2 class="text-2xl font-bold">
                                Send A Message
                            </h2>


                            <p class="mt-2 text-gray-600">
                                Fill out the form and we will get back to you.
                            </p>



                            <form class="mt-8 space-y-5">


                                <div>

                                    <label class="text-sm font-medium">
                                        Name
                                    </label>

                                    <input type="text" placeholder="Your name"
                                        class="mt-2 w-full rounded-md focus:ring-3 focus:ring-gray-200 border border-gray-200 px-4 py-3 outline-none transition focus:border-gray-400" />

                                </div>



                                <div>
                                    <label class="text-sm font-medium">
                                        Email
                                    </label>
                                    <input type="email" placeholder="your@email.com"
                                        class="mt-2 w-full rounded-md focus:ring-3 focus:ring-gray-200 border border-gray-200 px-4 py-3 outline-none transition focus:border-gray-400" />
                                </div>
                                <div>
                                    <label class="text-sm font-medium">
                                        Message
                                    </label>
                                    <textarea rows="5" placeholder="Write your message..."
                                        class="mt-2 w-full rounded-md focus:ring-3 focus:ring-gray-200 border border-gray-200 px-4 py-3 outline-none transition focus:border-gray-400"></textarea>
                                </div>
                                <button
                                    class="w-full rounded-md bg-gray-900 py-3 text-sm font-medium text-white transition hover:bg-gray-700">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section class="px-6 py-24">
                <div class="container mx-auto">
                    <div class="overflow-hidden rounded-3xl border border-gray-200">
                        <iframe class="w-full h-100"
                            src="https://www.google.com/maps/embed" style="border:0;" loading="lazy"
                            referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                </div>
            </section>
        </main>
        <AppFooter />
    </div>
</template>