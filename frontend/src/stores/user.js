import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
        email: '',
        phone_number: '',
        role: '',
        writer: false,
        active: true,
        token: '',
    }),

    actions: () => ({
        setUser(data) {
            this.name = data.name
            this.email = data.email
            this.phone_number = data.phone_number
            this.role = data.role
            this.writer = data.writer
            this.active = data.active
        },

        setToken(token) {
            this.token = token
        },

        logout() {
            this.name = ''
            this.email = ''
            this.phone_number = ''
            this.role = ''
            this.writer = ''
            this.active = ''
        },
    })
})