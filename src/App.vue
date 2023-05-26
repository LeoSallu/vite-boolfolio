<script>
import axios from 'axios';
import AppHeader from './components/header/AppHeader.vue';
import AppFooter from './components/footer/AppFooter.vue';
import { router } from './router';

export default {
  name: 'App',
  data(){
    return{
      api:'http://127.0.0.1:8000/api',
      apiUrls:{
        projects:'/projects'
      },
      projects:[]
    }
  },
  components: {
    AppHeader,
    AppFooter
  },
  methods:{
    getProjects(){
      axios.get(this.api+this.apiUrls.projects)
      .then((response)=>{
        this.projects = response.data.results;
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  },
  created(){
    this.getProjects();
  }
}
</script>

<template>
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
</template>


<style lang="scss">
</style>
