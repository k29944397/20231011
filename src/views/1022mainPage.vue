<script>
import child1022 from "../components/1022child.vue";
export default{
    date(){
        return{
            totalp:0,
            totalm:0,
            totalpm:totalp+totalm,
            plus:[],
            minus:[],
            radio:{
            },
        }
    },
    methods:{
        totalpp(){
            for(let i = 0; i< plus.length;i++){
                total += plus[i];
            }
        },
        totalmm(){
            for(let x = 0; x<minus.length;x++){
                total2 += minus[x];
            }
        },
        show(){
            add.style.visibility = "visible";
        },
    },
    components:{
        child1022
    }
}
</script>

<template>
        <div class="add">
            <div class="addmain">
                <label for="">text</label>
                <input type="text" name="" id="">
                <label for="">number</label>
                <input type="number" name="" id="">
                <label for="">收入</label>
                <input type="radio" v-model="radio" name="income" value="plus">
                <label for="">支出</label>
                <input type="radio" v-model="radio" name="income" value="minus">
                <button>確定</button>
            </div>
        </div>
    <body>
    <div class="leftBody">
        <h1>Expense Tracker</h1>
        <h3>Kouhei</h3>
        <h4>YOUR BALANCE</h4>
        <h5 v-text="'$'+totalpm"></h5>
    </div>
    <div class="rightBody">
        <div class="rightBody_Top">
            <h1 class="t1">INCOME</h1>
            <!-- <p>{{ totalp }}</p> -->
            <h2 class="t2">EXPENSE</h2>
            <!-- <p>{{ totalm }}</p> -->
            <button class="addBtn" @click="show()">Add transaction</button>
        </div> 
        <div class="rightBody_B">
            <child1022 />
        </div>
    </div>
</body>
</template>

<style lang="scss" scoped>
$maincolor: rgb(55,123,170);
body{
    margin: 0;
    display: flex;
    width: 600px;
    height: 100px;
}
.leftBody{
    margin: 0;
    background-color: $maincolor;
    color: #FFF;
    height: 1000px;
    width: 400px;
    h1{
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }
    h3{
        display: flex;
        justify-content: center;
    }
    h4{
        display: flex;
        justify-content: center;
    }
    h5{
        margin: 0;
        display: flex;
        justify-content: center;
        font-size: 30pt;
    }
}
.rightBody{
    margin: 0;
    width: 400px;
    height: 1000px;
    position: relative;
    display: flex;
    button{
        top: 150px;
        position: absolute;
        background-color:  rgb(55,123,170);
        color: #fff;
        border-radius:15%;
    }
}
.rightBody_Top{
    position: absolute;
    margin: 0;
    margin-top: 20px;
    background-color: #FFF;
    height: 200px;
    width: 400px;
    display: flex;
    justify-content:center;
    h1{
        margin: 0;
        color: rgb(13, 219, 133);
        display: flex;
        font-size: 24pt;
    }
    h2{
        margin-top: 0;
        color: rgb(189, 10, 46);;
        display: flex;
        font-size: 24pt;
    }
}
.add{
    visibility:hidden;
    background-position: center center;
    background-size: cover;
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: rgb(0,0,0, .25);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    backdrop-filter: opacity(100%);
    .addmain{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFF;
        height: 400px;
        width: 600px;
        z-index: 1;
    }
}
.rightBody_B{
    position: absolute;
    margin-top: 200px;
    height: 800px;
    width: 400px;
    display: flex;
    justify-content: center;
    .addBtn{
        background-color: $maincolor;
        color: #FFF;
        border-radius:5%;
        font-size: 14pt;
        display: flex;
        justify-content: center;
    }
    button{
        background-color: $maincolor;
        color: #FFF;
        border-radius:10%;
    }
}
</style>