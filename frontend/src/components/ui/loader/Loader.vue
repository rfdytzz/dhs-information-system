<script setup lang="ts">
withDefaults(
    defineProps<{
        size?: 'sm' | 'md' | 'lg'
    }>(),
    {
        size: 'md',
    }
)
</script>

<template>
    <div class="animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" :class="{
        'size-4': size === 'sm',
        'size-6': size === 'md',
        'size-8': size === 'lg',
    }" role="status" aria-label="Loading" />
</template>