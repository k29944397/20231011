<script>
export default{
    //data : funtion(){}
    //ES6語法糖
    data(){
        return{
            title:"cool",
            smallNum:1,//預設最小
            bigNum:100,//預設最大
            ansNum:Math.floor((Math.random()*100)+1),
        }
    },
    methods:{
        //print : funtion(){}
        cool(){
            alert(this.title)
        },
        gus(){
        const guessNum = document.getElementById("guessNum");
        const min = document.getElementById("min");
        const max = document.getElementById("max");
        let resNum = parseInt(guessNum.value);
        guessNum.value = "";
        console.log(resNum)
        console.log(this.ansNum)
            if(resNum == this.ansNum){
                showText.innerText = ("答對了答案是"+this.ansNum);
                return;
            }
            else if(resNum > this.ansNum){
                this.bigNum = resNum;
                max.innerText = resNum;
            }

            else if(resNum < this.ansNum){
                this.smallNum = resNum;
                min.innerText = resNum;
            }
            else{
                showText.innerText = "請輸入範圍內的數字";
            }
        },
        write(){
            console.log(this.text)
        },
        goOhterWat(){
            this.$router.push("/Vfor")
        }
    }
}
</script>

<template>
    <h1> v - on</h1>
    <button type="button" v-on:click="cool()">cool</button>
    <!-- <button type="button" @click="print()">123</button> -->
    <div class="bgArea">
        <div class="gameArea">
            <div class="gameTitle mb-5">
                <p class="fs-2" id="showText">猜一個數字</p>
                <spen class="fs-1" id="min">1</spen>
                <spen class="fs-1">~</spen>
                <spen class="fs-1" id="max">100</spen>
            </div>
            
            <div class="ansArea w-50 h-50 d-flex flex-colum align-items-center">
                <input type="number" id="guessNum" class="ansNum mb-4">
                <button type="button" class="ansBtn" v-on:click="gus()">回答</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bgArea{
    background-color: #777;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .gameArea{
        position: relative;
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 5px 5px 5px black;
    }
    input{
        position: absolute;
        left: 10px;
        bottom: 30px;
    }
    .ansBtn{
        position: absolute;
        bottom: 20px;
        left: 10px;
        background-color: rgb(100, 110, 5);
        color: #fff;
        border-radius: 20%;
    }
}
</style>