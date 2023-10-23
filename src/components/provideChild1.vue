<script>
import provideChild2 from './provideChild2.vue';
export default{
    data(){
        return{
            dataMsg:"message",
        }
    },
    components:{
        provideChild2
    },
    provide(){
        return{
            msg:this.dataMsg,
        }
    }
}
</script>
<template>
    <div class="warp">
        <h1>這是兒子</h1>
        <provideChild2 />
    </div>
</template>
<style lang="scss" scoped>
.warp{
    width: 400px;
    height: 400px;
    border: 1px solid black;
}
</style>