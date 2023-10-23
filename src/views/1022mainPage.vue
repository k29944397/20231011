<script>
export default{
    date(){
        return{
            totalp:0,
            totalm:0,
            totalpm:totalp+totalm,
            plus:[],
            minus:[]
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
            
        }
    }
}
</script>

<template>
    <body>
    <div class="leftBody">
        <h1>Expense Tracker</h1>
        <h3>Kouhei</h3>
        <h4>YOUR BALANCE</h4>
        <h5 v-text="'$'+totalpm"></h5>
    </div>
    <div class="rightBody">
        <div class="rightBody_Top">
            <h1 class="t1">INCOME
                <h1 v-text="'$'+totalp"></h1>
            </h1>
            <h2 class="t2">EXPENSE
                <h2 v-text="'$'+totalm"></h2>
            </h2>
        </div>
        <div class="show">
            <input type="text" name="" id="">
            <input type="number" name="" id="">
            <button>確定</button>
        </div>
        <div class="rightBody_B">
            <button class="addBtn" @click="show">Add transaction</button>
            <div class="ie1">Breakfast $65.00 <button>DL</button><br></div>
            <div class="ie2">Lunch $90.00<button>DL</button><br></div>
            <div class="ie3">Design Case $100000.00<button>DL</button><br></div>
            <div class="ie4">BlueRay Video $1420.00<button>DL</button></div>
        </div>
    </div>
</body>
</template>

<style lang="scss" scoped>
$maincolor: rgb(55,123,170);
body{
    margin: 0;
    display: flex;
}
.leftBody{
    margin: 0;
    background-color: $maincolor;
    color: #FFF;
    height: 100vh;
    width: 40vw;
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
}
.rightBody_Top{
    margin: 0;
    margin-top: 50px;
    background-color: #FFF;
    height: 30vh;
    width: 60vw;
    display: flex;
    justify-content:center;
    h1{
        margin: 0;
        color: rgb(186,198,164);
        display: flex;
        font-size: 24pt;
    }
    h2{
        margin-top: 0;
        color: rgb(138,99,107);;
        display: flex;
        font-size: 24pt;
    }
}
.show{
    display: none;
}
.rightBody_B{
    margin-top: 0;
    padding-left: 20vw;
    height: 70vh;
    width: 60vw;
    // background-color: #797979;
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
.ie1{
    height: 30px;
    width: 250px;
    margin: 0;
    color: $maincolor;
    border: 1px solid rgb(55,123,170);
    border-radius:10%;
    
}
.ie2{
    height: 30px;
    width: 250px;
    margin: 0;
    color: $maincolor;
    border: 1px solid rgb(55,123,170);
    border-radius:10%;
}
.ie3{
    height: 30px;
    width: 250px;
    margin: 0;
    color: $maincolor;
    border: 1px solid rgb(55,123,170);
    border-radius:10%;
}
.ie4{
    height: 30px;
    width: 250px;
    margin: 0;
    color: $maincolor;
    border: 1px solid rgb(55,123,170);
    border-radius:10%;
}
</style>