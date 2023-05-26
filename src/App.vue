<script>
import AppHeader from './components/header/AppHeader.vue';
import AppFooter from './components/footer/AppFooter.vue';
import { router } from './router';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
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
