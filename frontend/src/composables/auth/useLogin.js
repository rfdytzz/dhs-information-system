import api from "@/lib/axios"
import { useUserStore } from "@/stores/user"
import { ref } from "vue"
import { useRouter } from "vue-router"

export function useLogin() {
    const router = useRouter()
    const user = useUserStore()
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
            router.push('/admin')
        } catch (error) {
            console.log(error?.response?.data)
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