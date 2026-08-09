import api from "@/lib/axios";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

export function useGetUser() {
    const data = ref({})
    const user = useUserStore()

    const getUser = async () => {
        const token = localStorage.getItem('token')
        try {
            const res = await api.get('/user',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            data.value = res.data
            user.setUser(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        data,
        getUser
    }
}