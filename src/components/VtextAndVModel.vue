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
    <!-- <div class="showContent"> -->
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

        <!-- <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
        <input type="checkbox" v-model="toggle" :true-value="dynamicTrueValue" :false-value="dynamicFalseValue" />
        <input type="radio" v-model="pick" value="first" />
        <input type="radio" v-model="pick" value="second" /> -->
    <!-- </div> -->
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