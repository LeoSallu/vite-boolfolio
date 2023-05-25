<script>
import axios from 'axios';
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';
import AppFooter from './components/footer/AppFooter.vue';
export default {
  name: 'App',
  data(){
    return{
      api:'http://127.0.0.1:8000/api',
      apiUrls:{
        projects:'/projects'
      },
      project:[]
    }
  },
  components: {
    AppHeader,
    AppMain,
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
  <header>
    <AppHeader />
  </header>
  <main>
    <AppMain />
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>


<style lang="scss">

</style>
