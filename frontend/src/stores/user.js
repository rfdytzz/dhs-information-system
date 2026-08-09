import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
        email: '',
        phone_number: '',
        role: localStorage.getItem('role') || '',
        writer: false,
        active: true,
        token: localStorage.getItem('token') || '',
    }),

    actions: {
        setUser(data) {
            this.name = data.name
            this.email = data.email
            this.phone_number = data.phone_number
            this.writer = data.writer
            this.activecd = data.active
        },

        setRole(role) {
            this.role = role
            localStorage.setItem('role', role)
        },

        setToken(token) {
            this.token = token
            localStorage.setItem('token', token)
        },

        logout() {
            this.name = ''
            this.email = ''
            this.phone_number = ''
            this.role = ''
            this.writer = ''
            this.active = ''
        },
    }
})