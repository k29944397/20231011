<script>
import { mapState, mapActions } from 'pinia';
import indexState from '../stores/indexState';
export default{
    data(){
        //值
    },
    components:{
        //匯入
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
    <button>{{ location }}</button>
</template>
<style lang="scss" scoped>
p{
    font-size: larger;
    color: black;
}
</style>