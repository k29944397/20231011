<script>
export default{
    data(){
        return{
            info:{
                name:"",
                year:"",
            },
            page:true,
        }
    },
    // methods:{
    //     nextPage(){
    //         this.page = 2;
    //     },
    //     nextPage2(){
    //         this.page = 1;
    //     }
    // }
}
</script>

<template>
    <div class="page2">
        <label for="">名字</label>
        <p>{{ info.name }}</p>
        <br>
        <label for="">年齡</label>
        <p>{{ info.year }}</p>
        <br>
        <!-- <button type="button" @click="nextPage2">NextPage</button> -->
    </div>
</template>

<style lang="scss" scoped>
</style>