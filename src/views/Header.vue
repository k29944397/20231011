<script>
import {RouterLink} from 'vue-router'
export default{
    components:{
        RouterLink
    }
}

</script>

<template>
    <nav class="topnav">
        <RouterLink to="/">Home<br></RouterLink>
        <RouterLink to="/VtextAndVModel" >Vtext&VModel<br></RouterLink>
        <RouterLink to="/Vfor" >V-for</RouterLink>
    </nav>

</template>

<style lang="scss" scoped>
.topnav{
    height: 100%;
    width: 100%;
    font-size: 24pt;
    background-color: aquamarine;
    color: #fff;
    &:hover{
    background-color: #f7b606;
    color: rgb(255, 0, 0);
    }
    .rourinf{
        text-decoration: none;
        margin: 0;
    }
}
</style>
