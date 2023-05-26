<script>
export default {
    name: 'CardList',
    data() {
        return {
            length: 100
        }
    },
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="card">
        <img v-if="project.image" :src="project.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Project name: {{ project.name }}</h5>
            <p class="card-text">Project description: {{ project.description.substring(0, this.length) + '...' }}</p>
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
            <a href="#" class="btn btn-success">Go Somewhere</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
main {
    background-color: #005379;

}
</style>