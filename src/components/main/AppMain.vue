<script>
export default {
    name: 'AppMain',
    data() {
        return {
            length: 100
        }
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
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.name }}</h5>
                            <p class="card-text">{{ project.description.substring(0, this.length) + '...' }}</p>
                            <p class="card-text">{{ project.owner }}</p>
                            <p class="card-text">{{ project.contrinutors }}</p>
                            <p v-if="project.type" class="card-text">{{ project.type }}</p>
                            <p v-if="technologies" class="card-text">{{ project.technologies.name }}</p>
                            <a href="#" class="btn btn-success">Go Somewhere</a>
                        </div>
                    </div>
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