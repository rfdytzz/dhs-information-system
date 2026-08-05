<script setup lang="ts">
import { X } from "@lucide/vue"

defineProps<{
    open: boolean
}>()

const emit = defineEmits<{
    (e: "close"): void
    (e: "save"): void
}>()
</script>

<template>
    <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
        <div class="w-full max-w-md rounded-xl border border-gray-200 bg-white">
            <div class="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <div>
                    <h2 class="font-semibold">Edit User</h2>
                    <p class="text-sm text-gray-500">Update user permissions.</p>
                </div>

                <button @click="emit('close')" class="rounded-md p-2 hover:bg-gray-100">
                    <X class="size-4" />
                </button>
            </div>

            <div class="space-y-6 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="font-medium">Writer Access</p>
                        <p class="text-sm text-gray-500">
                            Allow this user to create and edit content.
                        </p>
                    </div>

                    <label class="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" class="peer sr-only" />

                        <div
                            class="h-6 w-11 rounded-full bg-gray-300 transition peer-checked:bg-gray-900 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5">
                        </div>
                    </label>
                </div>

                <div class="flex items-center justify-between">
                    <div>
                        <p class="font-medium">Account Status</p>
                        <p class="text-sm text-gray-500">
                            Enable or disable this account.
                        </p>
                    </div>

                    <label class="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" class="peer sr-only" />

                        <div
                            class="h-6 w-11 rounded-full bg-gray-300 transition peer-checked:bg-green-600 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5">
                        </div>
                    </label>
                </div>
            </div>

            <div class="flex justify-end gap-3 border-t border-gray-200 px-6 py-4">
                <button @click="emit('close')"
                    class="rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">
                    Cancel
                </button>

                <button @click="emit('save')"
                    class="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700">
                    Save Changes
                </button>
            </div>
        </div>
    </div>
</template>