<script>
import {RouterLink,RouterView} from 'vue-router'
export default{
    components:{
        RouterLink,
    }
}

</script>

<template>
    <div class="headerShow">
        <Header />
    </div>
    <div class="showContent">
        <Routerview />
    </div>
</template>

<style>

</style>
