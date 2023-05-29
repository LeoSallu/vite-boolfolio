<script>
import axios from 'axios';
import store from '../store';
import CardList from '../components/main/CardsList.vue';
export default {
    name: "TypesPage",
    components: {
        CardList
    },
    data() {
        return {
            store,
            type: null
        }
    },
    methods: {
        getType() {
            axios.get(`${this.store.apiUrl}/types/${this.$route.params.id}`)
                .then((response) => {
                    console.log(response);
                    this.type = response.data.results;
                    console.log(response.data);

                })
        }
    },
    created() {
        this.getType();
        
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.getType();
            }
        )
    },
    mounted(){
        console.log('Mounted');
        console.log(this.type);
        console.log(this.$route.params.id);
    }
}
</script>


<template>
    <section v-if="type">
        <div class="container">
            <h1 class="mt-5 mb-3">Type Page: {{ type.type }}</h1>
            <!-- {{ JSON.stringify(type.projects) }} -->
            <div class="row g-3">
                <div class="col col-md-4" v-for="project in type.projects">
                    <CardList :project="project" />
                </div>
            </div>


        </div>
    </section>
</template>


<style scoped></style>