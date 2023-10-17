<script>
import { Carousel } from 'bootstrap';

export default{
    data(){
        //值
        return{
            title:"cool",
            car:false,
            car2:false,
            house:0,
            house2:0
        }
    },
    components:{
        //匯入
    },
    methods:{
        //公式
        print(){

        }
    }
}
</script>

<template>
    <h1>v-if & v-show</h1>
    <!-- v-if -->
    <h3>v-if</h3>
    <label for="">小名有車</label>
    <input type="checkbox" value="true" v-model="car">
    <p v-if="car">確實</p>
    <p>---------</p>
    <br>

    <!-- v-show -->
    <h3>v-show</h3>
    <label for="">小名有車2</label>
    <input type="checkbox" value="true" v-model="car2">
    <p v-show="car2">的確</p>
    <p>---------</p>
    <br>
    <!-- v-if & v-else -->
    <h3>v-if & v-else</h3>
    <label for="">小名有防</label>
    <select name="" id="" v-model="house">
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
    <p v-if="house == 1">防禦成功</p>
    <p v-if="house == 2">完美防禦</p>
    <p v-else>防禦</p>
    <p>---------</p>
    <br>
    <h3>v-if & v-else & v-else-if</h3>
    <label for="">小名有防</label>
    <select name="" id="" v-model="house2">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
    <p v-if="house2 == 1">防禦成功</p>
    <p v-else-if="house2 == 2">完美防禦</p>
    <p v-else>防禦</p>
    <p>---------</p>
</template>


<style lang="scss" scoped>

</style>
