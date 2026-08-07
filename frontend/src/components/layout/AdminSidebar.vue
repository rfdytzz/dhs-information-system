<script setup lang="ts">
import {
    LayoutDashboard,
    Newspaper,
    CalendarDays,
    Images,
    GraduationCap,
    Users,
    UserRoundCheck,
    Settings,
    ShieldCheck,
    FileText,
    School,
    ChevronDown,
    Megaphone,
    Mail,
    NotebookPen
} from "@lucide/vue"

import { ref } from "vue"

const openMenu = ref<string | null>(null)

const toggleMenu = (name: string) => {
    openMenu.value =
        openMenu.value === name ? null : name
}


const menus = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        link: "/admin"
    },

    {
        group: "Content Management",
    },

    {
        title: "News",
        icon: Newspaper,
        link: "/admin/news"
    },

    {
        title: "Events",
        icon: CalendarDays,
        link: "/admin/events"
    },

    {
        title: "Personal Blog",
        icon: NotebookPen,
        link: "/admin/blog"
    },

    {
        title: "Gallery",
        icon: Images,
        link: "/admin/gallery"
    },


    {
        title: "Pages",
        icon: FileText,
        children: [
            {
                title: "About School",
                link: "/admin/pages/about"
            },
            {
                title: "Vision & Mission",
                link: "/admin/pages/vision"
            },
            {
                title: "History",
                link: "/admin/pages/history"
            },
            {
                title: "Facilities",
                link: "/admin/pages/facilities"
            }
        ]
    },


    {
        group: "Academic"
    },


    {
        title: "Programs",
        icon: GraduationCap,
        link: "/admin/programs"
    },

    {
        title: "Curriculum",
        icon: School,
        link: "/admin/curriculum"
    },


    {
        group: "People"
    },

    {
        title: "Users",
        icon: ShieldCheck,
        link: "/admin/users"
    },

    {
        group: "System"
    },


    {
        title: "Announcements",
        icon: Megaphone,
        link: "/admin/announcements"
    },

    {
        title: "Messages",
        icon: Mail,
        link: "/admin/messages"
    },

    {
        title: "Settings",
        icon: Settings,
        link: "/admin/settings"
    }

]

</script>

<template>
    <aside class="fixed inset-y-0 left-0 flex h-screen w-72 flex-col border-r border-gray-200 bg-white">
        <div class="flex h-18 items-center border-b border-gray-200 px-6">
            <div class="flex justify-between w-full items-center gap-3">
                <div>
                    <p class="font-semibold">
                        Dyta High School
                    </p>
                    <p class="text-xs text-gray-500">
                        Admin Panel
                    </p>
                </div>
                <img src="/src/assets/dhs-logo.png" class="size-12" alt="">
            </div>
        </div>
        <nav data-lenis-prevent class="flex-1 overflow-y-scroll overscroll-contain px-4 py-5"> <template
                v-for="menu in menus" :key="menu.title || menu.group">
                <div v-if="menu.group"
                    class="mb-3 mt-6 px-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                    {{ menu.group }}
                </div>
                <div v-else-if="menu.children">
                    <button @click="toggleMenu(menu.title)"
                        class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-gray-100">
                        <span class="flex items-center gap-3">
                            <component :is="menu.icon" class="h-4 w-4" />
                            {{ menu.title }}
                        </span>
                        <ChevronDown class="h-4 w-4 transition" />
                    </button>
                    <div v-if="openMenu === menu.title" class="mt-1 space-y-1 pl-9">
                        <router-link v-for="child in menu.children" :key="child.link" :to="child.link"
                            class="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                            {{ child.title }}
                        </router-link>
                    </div>
                </div>
                <router-link v-else-if="menu.link" :to="menu.link"
                    class="mb-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition hover:bg-gray-100">
                    <component :is="menu.icon" class="h-4 w-4" />
                    {{ menu.title }}
                </router-link>
            </template>
        </nav>
    </aside>
</template>