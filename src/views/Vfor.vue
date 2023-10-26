<script>
export default{
    data(){
        return{
            arr:[1,2,3],
            arr2:[
                {
                    name:"Jojo",age:18,address:"Taipei"
                },
                {
                    name:"Nono",age:48,address:"Xinhua"
                },
                {
                    name:"Coco",age:26,address:"Shibuya"
                }
            ]
        }
    }
}
</script>
<template>
    <body>
        <h1>V-for</h1>
    <!-- figma/Frame3 -->
    arr
    <div class="boxArea3">
        <p class="ppp" v-for="item in arr">{{ item }}</p>
    </div>
    arr2
    <ol v-for="x in arr2">
        <li>{{ x.name }}</li>
        <li>{{ x.age }}</li>
        <li>{{ x.address }}</li>
    </ol>
    <!-- <div class="area2">
        <h2>PINK</h2>
        <div class="area3">
            <h3>在Vue.js安裝Bootstrap<br> 1.CMD輸入npm install bootstrap @popperjs/core <br> 2.</h3>
        </div>
    </div> -->
    </body>
    

</template>
<style lang="scss" scoped>
body{
    text-align: center;
}
.boxArea3{
    display: flex;
    justify-content: center;
}
.ppp{
    margin-left: 20px;
    width: 200px;
    height: 200px;
    background-color: pink;
    display: flex;
    justify-content: center;
    color: pink;
}
.area2{
    display: flex;
    align-items: center;
}
h2{
    width: 300px;
    height: 300px;
    background-color: pink;
    color: pink;
}
.area3{
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
}
</style>