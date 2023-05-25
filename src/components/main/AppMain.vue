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
                            <div v-if="project.type"> 
                                <p class=card-text>Type: {{ project.type.type }}</p>
                            </div>
                            <div v-if="project.technologies.length>0"> 
                                <p class=card-text>Technologies:</p>
                                <ul>
                                    <li v-for="technologies in project.technologies">{{ technologies.name }}</li>
                                </ul>
                            </div>
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