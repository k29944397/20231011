<script>
export default{
    data(){
        return{
            text:"orange",
        }
    },
    methods:{
        emitGo(){
        //往父元件傳遞訊息
        //告知父元件執行apple(,左邊的值)
            this.$emit("apple",this.text)
        }
    }
}

</script>

<template>
<div class="showArea">
    <h1>Emit child</h1>
    <p>text變數:{{this.text}}</p>
    <!-- <button type="button" @click="emit('apple',this.text)">emitGo</button> -->
    <button type="button" @click="emitGo">emitGo</button>
</div>
</template>

<style lang="scss" scoped>
</style>