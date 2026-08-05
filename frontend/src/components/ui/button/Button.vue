<script setup lang="ts">
import { computed } from "vue"

type Variant =
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"

type Size =
    | "default"
    | "sm"
    | "lg"
    | "icon"

const props = defineProps<{
    variant?: Variant
    size?: Size
    type?: "button" | "submit" | "reset"
    disabled?: boolean
}>()

const buttonClass = computed(() => {
    const base =
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none cursor-pointer disabled:opacity-50"

    const variants = {
        default:
            "bg-gray-900 text-white hover:bg-gray-700",

        destructive:
            "bg-red-600 text-white hover:bg-red-700",

        outline:
            "border border-gray-300 bg-white hover:bg-gray-100",

        secondary:
            "bg-gray-200 text-gray-900 hover:bg-gray-300",

        ghost:
            "hover:bg-gray-100",

        link:
            "text-blue-600 underline-offset-4 hover:underline"
    }

    const size = {
        default:
            "px-2 py-1.5 text-md",

        sm:
            "h-8 px-3 text-xs",

        lg:
            "h-10 px-8",

        icon:
            "h-9 w-9",

        long: 
            "p-3 text-md w-full"
    }

    return [
        base,
        variants[props.variant ?? "default"],
        size[props.size ?? "default"]
    ].join(" ")
})
</script>

<template>
    <button :type="type ?? 'button'" :disabled="disabled" :class="buttonClass">
        <slot />
    </button>
</template>