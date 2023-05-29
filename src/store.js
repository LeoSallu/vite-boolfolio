import { reactive } from "vue";

const store = reactive({
    apiUrl:import.meta.env.VITE_BACKEND_API_URL
})
export default store;