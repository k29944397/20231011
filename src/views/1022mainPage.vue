<script>
export default{
    data(){
        return{
            value6:false,
            newPro:'',
            project:[
                {
                name:"",
                money:0,
                pm:true
                }
            ],
            plus:[],
            minus:[],
            totalp:0,
            totalm:0
        }
    },
    methods:{
        addshow(){
            this.value6 = !this.value6;
        },
        addPro(){
            this.project.push({ id:this.name, spend:this.money,inorout:this.pm})
                if(this.pm = true){
                    this.plus.push(this.money)
                }else{
                    this.minus.push(this.money)
                }
            console.log(this.plus)
            console.log(this.minus)
            this.newPro='';
        },
        totalPlus(){
            let totalp=0;
            for(var i = 0; i< this.plus.length;i++){
                totalp += this.plus[i];
            }
            console.log(totalp)
        },
        totalMinus(){
            let totalm=0;
            for(var x = 0; x< this.minus.length;x++){
                totalm += this.minus[x];
            }
            console.log(totalm)
        },
        addDl(key){
            this.project.splice(key,1);
        }
    }
}

</script>

<template>  
    <!-- 彈出視窗 -->
    <div v-show="value6" >
    <div class="add">
        <div class="addmain">
            <label for="">text</label>
            <input type="text" v-model="name" placeholder="項目">
            <label for="">number</label>
            <input type="number"  v-model="money" placeholder="資金">
            <label for="">收入</label>
            <input type="radio" v-model="pm" name="income" value="true">
            <label for="">支出</label>
            <input type="radio" v-model="pm" name="income" value="false">
            <button @click="addPro(),addshow()">確定</button>
            <button @click="addshow()">關閉</button>
        </div>
    </div>
    </div>
    <!-- 本體 -->
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
            <button class="t1btn" @click="totalPlus()">++</button>
            <!-- <p>{{ totalp }}</p> -->
            <h2 class="t2">EXPENSE</h2>
            <button class="t1btn" @click="totalMinus()">--</button>
            <!-- <p>{{ totalm }}</p> -->
            <button class="addBtn" @click="addshow()">Add transaction</button>
        </div>
        <!-- 記帳子頁 -->
        <div class="rightBody_B">
            <div v-for="i in project">
                <p>NAME:{{ i.id }}</p>
                <p>Money:{{ i.spend }}</p>
                <p>這是{{ i.inorout }}</p>
                <button @click="addDl()">DL</button>
            </div>
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
    .addBtn{
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
    .t1btn{
        height: 25px;
        width: 30px;
    }
}
.add{
    // visibility:hidden;
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