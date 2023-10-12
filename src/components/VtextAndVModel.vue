<script>
import test from './test.vue';
export default{
    data(){
        return{
            //放內容
            // V-text
            title:"Title",
            address:"Taipei",
            info:{
                name:"Jojo",
                age:13
            },
            //V-model
            cool:'',
            age:16
        }
    },
    components:{
        //放匯入
        test
    },
    methods:{
        //放元素
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

        <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
        <input type="checkbox" v-model="toggle" :true-value="dynamicTrueValue" :false-value="dynamicFalseValue" />
        <input type="radio" v-model="pick" value="first" />
        <input type="radio" v-model="pick" value="second" />
    <!-- </div> -->
</template>

<style lang="scss" scoped>
</style>