<script>
import axios from 'axios';
import CardApp from '../components/main/CardApp.vue';
export default {
    name: "AppDetails",
    components: {
        CardApp
    },
    data() {
        return {
            api: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            projects: []
        }
    },
    methods: {
        getProjects() {
            axios.get(this.api + this.apiUrls.projects)
                .then((response) => {
                    this.projects = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getProjects();
    }
}
</script>
<template>
    <CardApp :data="projects"/>
</template>


<style scoped></style>