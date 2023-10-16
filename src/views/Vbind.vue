<script>
export default{
    data(){
        return{
            title:"cool",
            isRed:false,
            isLarge:false,
            styleArr:[],
            imgText:"https://th.bing.com/th/id/OIP.DfvcS-BqyBkzj_UvWaIfQAAAAA?pid=ImgDet&rs=1",
            imgArr:["../../pic/1.png","../../pic/2.png","../../pic/3.png","../../pic/4.png","../../pic/5.png","../../pic/6.png","../../pic/7.png","../../pic/8.png"],
        }
    },
    components:{

    },
    methods:{
        
    }
}
</script>

<template>
    <h1>V-bind</h1>
    <!-- v-model ==> 綁定標籤的值 -->
    <!-- v-bind ==> 綁定標籤的屬性 -->
    <h1 class="cool">cool1</h1>

    <h2 v-bind:class="title">cool2</h2>
    <!-- <h2 :class""title">cool2</h2> -->
    <h3>class{}</h3>
    <label for="">isRed</label>
    <input type="checkbox" value="true" v-model="isRed">
    <label for="">isLarge</label>
    <input type="checkbox" value="true" v-model="isLarge">

    <!-- 未啟動,h2 無 class名稱 -->
    <h2 :class="{
        red:isRed,
        large:isLarge,
    }">這裡</h2>
    <!-- 當isRed/isLarge 為true時,立即賦予h2標籤 red/large class名稱 -->

    <!-- styleArr 是變數,記得在data(){}之中宣告並使他成為 空陣列 -->
    <h3>class[]</h3>
    <label for="">Red</label>
    <input type="checkbox" value="red" v-model="styleArr">
    <label for="">Large</label>
    <input type="checkbox" value="large" v-model="styleArr">
    <label for="">Bold</label>
    <input type="checkbox" value="bold" v-model="styleArr">
    <h2 :class="styleArr">那裡</h2>

    <div class="waterf">
        <!-- <img src="https://th.bing.com/th/id/OIP.DfvcS-BqyBkzj_UvWaIfQAAAAA?pid=ImgDet&rs=1" alt=""> -->
        <img :src="imgText" alt="">
        <img :src="imgArr[0]" alt="">
        <img :src="imgArr[1]" alt=""><img :src="imgArr[2]" alt="">
        <img :src="imgArr[3]" alt=""><img :src="imgArr[4]" alt="">
        <img :src="imgArr[5]" alt=""><img :src="imgArr[6]" alt="">
        <img :src="imgArr[7]" alt="">
    </div>
</template>

<style lang="scss" >
.cool{
    color: rgb(0, 56, 37);
}
.red{
    color: #ff0000;
}
.large{
    font-size: 50pt;
}
.bold{
    font-weight: bold;
}
.waterf{
    border: 1px solid red;
    margin: 20px;
    width: 600px;
    height: 100%;
    img{
        margin: 20px;
        width: 150px;
        height: 250px;
    }:hover{
            width: 155px;
            height: 258px;
        }
}
</style>