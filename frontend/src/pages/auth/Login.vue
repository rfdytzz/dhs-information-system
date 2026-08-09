<script setup>
import Button from '@/components/ui/button/Button.vue';
import Loader from '@/components/ui/loader/Loader.vue';
import { useLogin } from '@/composables/auth/useLogin';
import pinia from '@/stores';
import { useUserStore } from '@/stores/user';
import { CircleAlert, Eye, EyeOff, X } from '@lucide/vue';
import { ref } from 'vue';

const user = useUserStore(pinia)

const isShow = ref(false)
const toggleShow = () => {
    isShow.value = !isShow.value
}

const email = ref('')
const password = ref('')
const { loading, message, getLogin } = useLogin()
const handleLogin = () => {
    getLogin(email.value, password.value)
}

const closeMessage = () => {
    message.value = ''
}

</script>

<template>
    <div class="w-full h-screen flex items-center justify-center lg:bg-gray-100">
        <div class="h-145 max-w-5xl w-5xl rounded-xl bg-white lg:border border-gray-200 lg:shadow grid grid-cols-1 lg:grid-cols-2">
            <div class="w-full h-full gap-5 rounded-l-xl border-r border-gray-200 flex flex-col items-center justify-center">
                <div class="flex flex-col gap-2 items-center">
                    <img src="/src/assets/dhs-logo.png" class="size-25" alt="">
                    <div class="text-3xl font-bold">Welcome Back</div>
                    <div class="text-sm font-normal text-gray-400">Log in to your DHS account</div>
                </div>
                <div v-if="message" class="py-2.5 px-3 text-red-500 border border-red-200 text-sm flex justify-between items-center bg-red-100 w-[80%] rounded-md">
                    <div class="flex items-center gap-2">
                        <CircleAlert class="size-4"/>
                        {{ message }}
                    </div>
                    <X @click="closeMessage" class="size-4 cursor-pointer"/>
                </div>
                <form @submit.prevent="handleLogin" class="flex flex-col gap-7 w-[80%]">
                    <div class="flex flex-col gap-3">
                        <label for="email" class="font-semibold text-sm">Email</label>
                        <input v-model="email" required id="email" type="text" class="focus:outline-0 border rounded-md py-2 px-4 border-gray-200 focus:border-gray-400 transition duration-100 focus:ring-3 ring-gray-200" placeholder="name@dhs.sch.id">
                    </div>
                    <div class="flex flex-col gap-3">
                        <label for="password" class="font-semibold text-sm flex items-center justify-between">Password <router-link to="" class="font-normal hover:underline">Forgot your Password?</router-link></label>
                        <div class="border flex rounded-md py-2 px-4 items-center gap-2 border-gray-200 focus-within:border-gray-400 transition duration-100 focus-within:ring-3 ring-gray-200">
                            <input v-model="password" required id="password" :type="isShow ? 'text' : 'password'" class="focus:outline-0 flex-1" placeholder="••••••••">
                            <Eye @click="toggleShow" v-if="isShow" class="cursor-pointer size-5 text-gray-500 hover:text-black transition duration-100"/>
                            <EyeOff @click="toggleShow" v-else class="cursor-pointer size-5 text-gray-500 hover:text-black transition duration-100"/>
                        </div>
                    </div>
                    <Button type="submit" size="long" class="flex items-center gap-1" :disabled="loading">
                        <Loader v-if="loading" size="sm" />
                        Log in
                    </Button>
                </form>
                <span class="text-sm text-gray-500">Can't log in? <router-link to="" class="text-black hover:underline">Contact the admin</router-link></span>
            </div>
            <div class="relative hidden lg:block">
                <img src="/src/assets/hero.jpg" alt="Hero" class="h-full w-full object-cover rounded-r-xl">
                <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent rounded-r-xl"></div>
                <div class="absolute bottom-10 left-10 right-10 text-white">
                    <span class="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur">
                        Dyta High School
                    </span>
                    <h2 class="mt-5 text-4xl font-bold leading-tight">
                        Welcome to
                        <br>
                        Dyta High School
                    </h2>
                    <p class="mt-4 text-sm leading-6 text-white/90">
                        Access the administration dashboard to manage students,
                        teachers, news, events, galleries and academic programs
                        in one integrated platform.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>