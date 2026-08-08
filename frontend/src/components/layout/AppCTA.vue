<script setup lang="ts">
import Button from '../ui/button/Button.vue';

</script>

<template>
    <section class="px-6 py-24">
        <div class="container mx-auto">
            <div class="rounded-3xl border bg-gray-900 px-8 py-16 text-center text-white lg:px-16">
                <p class="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
                    Admission
                </p>

                <h2 class="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
                    Ready to Begin Your Journey?
                </h2>

                <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                    Join Dyta High School and experience a learning environment that
                    inspires innovation, collaboration, and academic excellence.
                </p>

                <div class="mt-10 flex flex-wrap justify-center gap-4">
                    <Button size="lg">
                        Apply Now
                    </Button>

                    <Button variant="outline" size="lg">
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>