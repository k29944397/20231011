<script>
import { mapState, mapActions } from 'pinia';
import {RouterLink} from 'vue-router';
import indexState from '../stores/indexState';
export default{
    data(){
        //值
    },
    components:{
        //匯入
        RouterLink
    },
    methods:{
        //公式
    },
    computed:{
        ...mapState(indexState, ["location", "locationInfo"])
    },
    methods:{
        ...mapActions(indexState, ["getLocation", "setLocation"])
    }
}

</script>

<template>
    <nav class="topnav">
        <RouterLink to="/">Home</RouterLink>
        <span>--</span>
        <RouterLink to="/VtextAndVModel" >Vtext&VModel</RouterLink>
        <span>--</span>
        <RouterLink to="/Vfor" >V-for</RouterLink>
        <span>--</span>
        <RouterLink to="/Von" >V-on</RouterLink>
        <span>--</span>
        <RouterLink to="/workS" >甜點</RouterLink>
        <span>--</span>
        <RouterLink to="/vbind" >V-bind</RouterLink>
        <span>--</span>
        <RouterLink to="/vifAndvshow" >V-if&V-show</RouterLink>
        <span>--</span>
        <RouterLink to="/HwHome" >HwHome</RouterLink>
        <span>--</span>
        <RouterLink to="/Props" >Props</RouterLink>
        <span>--</span>
        <RouterLink to="/Emit" >Emit</RouterLink>
        <span>--</span>
        <RouterLink to="/DataFlow" >DataFlow</RouterLink>
        <span>--</span>
        <RouterLink to="/1022" >沒有記帳</RouterLink>
        <span>--</span>
        <RouterLink to="/Provide" >Provide</RouterLink>
        <span>--</span>
        <RouterLink to="/WatchAndComputed">Watch</RouterLink>
        <span>--</span>
        <RouterLink to="/PPinia">Pinia</RouterLink>
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
