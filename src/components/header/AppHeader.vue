<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-3">
            <div class="container">
                <a class="navbar-brand" href="#">Boolfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <router-link :to="{name:'home'}" class="nav-link">Home</router-link>
                        <router-link :to="{name:'about'}" class="nav-link">About Us</router-link>
                        <router-link :to="{name:'projects'}" class="nav-link">Projects</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.navbar {
    background-color: #06A77D;

    div {
        a {
            color: aliceblue;
        }
        div{
            a{
                color: aliceblue;
               &:hover {
                border-bottom: 3px solid #005379;
                color: #005379;
               }
            }
        }
    }
}
</style>