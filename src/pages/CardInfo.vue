<script>
import axios from 'axios';
export default {
    name: 'CardInfo',
    data() {
        return {
            api: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            project: null,
            isError: false,
            errorMessage: null,
            formData:{
                author:'',
                message:''
            }
        }
    },
    methods: {
        getProject() {
            axios.get(this.api + this.apiUrls.projects + "/" + this.$route.params.id)
                .then((response) => {
                    this.project = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                    this.isError = true;
                    this.errorMessage = error.message;
                })
        },
        leadsFn(){
            const data={
                author:this.formData.author,
                message:this.formData.message,
                project_id:this.project.id
            };
            axios.post(`${this.store.apiUrls}/leads`,data)
            .then((response)=>{
                if(response.status===201){
                    this.project.leads.push(response.data)
                }
            })
            .catch((error)=>{
                console.log(error);
            });
        }
    },
    created() {
        this.getProject();
    }


}
</script>

<template>
    <section class="p-3" v-if="project">
        <div class="container">
            <div class="card">
                <img v-if="project.image" :src="project.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Project name: {{ project.name }}</h5>
                    <p class="card-text">Project description: {{ project.description.substring(0, this.length) + '...' }}
                    </p>
                    <p class="card-text">Project owner: {{ project.owner }}</p>
                    <p class="card-text">Project contributors: {{ project.contributors }}</p>
                    <div v-if="project.type">
                        <p class=card-text>Type: {{ project.type.type }}</p>
                    </div>
                    <div v-if="project.technologies.length > 0">
                        <p class=card-text>Technologies:</p>
                        <ul>
                            <li v-for="technologies in project.technologies">{{ technologies.name }}</li>
                        </ul>
                    </div>
                    <div v-if="project.leads.length" class="my-3">
                        <h4>Leads</h4>
                        <ul>
                            <li v-for="lead in project.leads">
                                <p>Author: {{ lead.author ?? 'Anonymus' }}</p>
                                <p>{{ lead.message }}</p>
                            </li>
                        </ul>
                    </div>
                    <router-link :to="{ name: 'projects' }" class="btn btn-success">Go back to Projects list</router-link>
                </div>
            </div>
        </div>
    </section>
    <section v-if="isError">
        <div class="container">
            <p>{{ errorMessage }}</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: #005379;
    height: 83vh;

}
</style>