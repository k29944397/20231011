<script>
export default{
    data(){
        return{

        }
    },
    props:[
        "name",
        "year"
    ]
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
        <p>{{ this.name }}</p>
        <br>
        <label for="">年齡</label>
        <p>{{ this.year }}</p>
        <br>
        <!-- <input type="text" name="" id="" :value="age" @input="$emit('update:age',$event.target.value)">
        <button type="button" @click="console.log($event)">資料</button> -->
        <!-- <button type="button" @click="nextPage2">NextPage</button> -->
    </div>
</template>

<style lang="scss" scoped>
</style>