<script>
import CardsList from './CardsList.vue';
export default {
    name: 'CardApp',
    data() {
        return {
            length: 100
        }
    },
    components:{
        CardsList
    },
    props: {
        data: Object
    }
}
</script>

<template>
    <main>
        <div class="container p-3">
            <div class="row g-3">
                <div class="col col-md-4" v-for="project in data">
                    <CardsList :project="project"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: #005379;

}
</style>