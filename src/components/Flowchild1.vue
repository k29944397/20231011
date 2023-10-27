<script>
export default{
    data(){
        return{
            info:{
                name:"",
                year:"",
            },
        }
    },
    methods:{
        getInfo(){
            this.$emit("get",this.info)
        },
    }
}
</script>

<template>
    <div class="page1">
        <label for="">名字</label>
        <br>
        <input type="text" v-model="info.name">

        <br>
        <label for="">年齡</label>
        <br>
        <input type="number" v-model="info.year">
        <br>

        <button type="button" @click="getInfo">上傳並換頁</button>

</div>
</template>

<style lang="scss" scoped>

</style>