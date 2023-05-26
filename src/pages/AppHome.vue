<script>
export default {
    name: "AppHome"
}
</script>
<template>
    <main v-cloak>
        <article class="container p-2 h-100" >
            <h1 class="text-center">Welcome to my portfolio</h1>
            <div class="text h-75 d-flex justify-content-around align-items-center">
                <p class="mini-text-box p-4">Click on the upper link "Project" to see my portfolio.</p>
                <p class="mini-text-box p-4">Or click on the "About us" for more info about me!</p>
            </div>
        </article>
    </main>
</template>


<style lang="scss" scoped>
main {
    height: 83vh;
    background-color: #005379;

    article {
        h1 {
            color: aliceblue;
        }

        .text {
            .mini-text-box {
                background-color: #F5F2E8;
                border: 1px solid #005379;
                border-radius: 7px;
                width: 300px;
            }
        }
    }

}
</style>