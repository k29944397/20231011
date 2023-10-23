<script>
import child2 from "../components/child2.vue"
export default{
    data(){
        return{
            childText:"apple",
        }
    },
    components:{
        child2
    },
    methods:{ //emitObj:funtion(params){}
        emitObj(params){
            this.childText = params
        }
    }
}
</script>

<template>
    <h1>Emit</h1>
    {{ this.childText }}
    <div class="show">
        <!-- 告知子元件，想要父元件做甚麼事就傳達apple這個暗號 -->
        <child2 @apple="emitObj"/>
    </div>
</template>

<style lang="scss" scoped>
</style>