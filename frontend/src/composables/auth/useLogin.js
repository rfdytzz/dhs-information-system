import api from "@/lib/axios"
import pinia from "@/stores"
import { useUserStore } from "@/stores/user"
import { ref } from "vue"
import { useRouter } from "vue-router"

export function useLogin() {
    const router = useRouter()
    const user = useUserStore(pinia)
    const loading = ref(false)
    const message = ref('')

    const getLogin = async (email, password) => {
        try {
            loading.value = true
            const res = await api.post('/login', {
                email: email,
                password: password
            })
            user.setToken(res.data.token)
            user.setRole(res.data.role)
            router.push('/admin')
        } catch (error) {
            console.log(error)
            message.value = error?.response?.data?.message
        } finally {
            loading.value = false
        }
    }

    return {
        loading,
        message,
        getLogin
    }
}