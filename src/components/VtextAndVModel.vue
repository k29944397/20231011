<script>
import test from './test.vue';
export default{
    data(){
        return{
            //放內容
            // V-text(值)
            title:"Title",
            address:"Taipei",
            info:{
                name:"Jojo",
                age:13,
            },
            checkedNames: [],
            //V-model(類型)
            cool:'',
            age:16,
            radioText:["pork","chicken","fish"],
            imgText:["../../pic/1.png","../../pic/2.png","../../pic/3.png"]
        }
    },
    components:{
        //放匯入(別的程式)
        test
    },
    methods:{
        //放元素(算式)
        testtest(){
            console.log("xxx");
        }
    }
}
</script>

<template>
    <h1>V-text</h1>
        <p>{{ this.title }}</p>
        <p v-text="address"></p>
        <p v-text="info"></p>
        <test v-text="info"/>

    <h1>V-Model</h1>
        <input type="text" v-model="cool">
        <h4>{{ this.cool }}</h4>
        <input type="number" v-model="age">
        <h4 v-text="'age:'+age"></h4>

        <select name="" id="" v-model="selectText">
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
    <div>{{ selectText }}</div>

    <!-- Checkbox -->
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <div>Checked names: {{ checkedNames }}</div>

    <!-- radio的name要一樣不然會被分開 -->
    <p>radio↓</p>
    <label for="">早餐</label>
    <input type="radio" v-model="radioText" name="food" value="pork">
    <label for="">午餐</label>
    <input type="radio" v-model="radioText" name="food" value="chicken">
    <label for="">晚餐</label>
    <input type="radio" v-model="radioText" name="food" value="fish">
    <h3>{{ radioText }}</h3>
    <!-- <p>imgtext</p>
    <label for=""></label>
    <input type="checkbox">
    <img :src="imgText" alt=""> -->
</template>

<style lang="scss" scoped>
</style>