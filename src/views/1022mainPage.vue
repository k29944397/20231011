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
                pm:"收入"
                }
            ],
            plus:[],
            minus:[],
            totalp:0,
            totalm:0,

        }
    },
    methods:{
        addshow(){
            this.value6 = !this.value6;
        },
        addPro(){
            this.project.push({ id:this.name, spend:this.money,inorout:this.pm})
                if(this.pm == "收入"){
                    this.plus.push(this.money);
                }else{
                    this.minus.push(this.money);
                }


            this.newPro='';
        },
        totalPlus(){
            this.totalp = 0;
            for(let i = 0; i< this.plus.length;i++){
                this.totalp += this.plus[i];
            }
        },
        totalMinus(){
            this.totalm = 0;
            for(let x = 0; x< this.minus.length;x++){
                this.totalm += this.minus[x];
            }
        },
        addDl(key){
            this.project.splice(this.key);
            this.plus = [];
            this.minus = [];
        }
    }
}

</script>

<template>  
    <!-- 彈出視窗 -->
    <div class="jump" v-show="value6" >
        <div class="add" @click="addshow()">
        
        </div>
        <div class="addmain">
            <br><br>
            <label for="">text</label><br>
            <input type="text" v-model="name" placeholder="項目"><br><br>
            <label for="">number</label><br>
            <input type="number"  v-model="money" placeholder="資金"><br><br>
            <label for="">收入</label>
            <input type="radio" v-model="pm" name="income" value="收入">
            <label for="">支出</label>
            <input type="radio" v-model="pm" name="income" value="支出"><br><br>
            <button @click="addPro(),addshow(),totalPlus(),totalMinus()">確定</button>
            <button @click="addshow()">關閉</button>
        </div>
    </div>

    <!-- 本體 -->
    <body>

    <div class="leftBody">
        <h1>Expense Tracker</h1>
        <h3>Kouhei</h3>
        <h4>YOUR BALANCE</h4>
        <h5 v-text="'$'+(totalp-totalm)"></h5>

        <h6>問題:刪除單筆資料</h6>
    </div>
    <div class="rightBody">
        <div class="rightBody_Top">
            <div class="inArea">
                <h1 class="t1">INCOME</h1>
                <p>總進帳：{{ this.totalp }}</p>
            </div>
            <div class="expArea">
                <h2 class="t2">EXPENSE</h2>
                <p>總支出：{{ this.totalm }}</p>    
            </div>
            
            <button class="addBtn" @click="addshow()">Add transaction</button>
            <button class="dlBtn" @click="addDl(),totalPlus(),totalMinus()">刪除全部資料</button>
        </div>
        <!-- 記帳子頁(x)區域(O) -->
        <div class="rightBody_B">
            <div class="boxArea" v-for="i in project">
                <span>NAME：{{ i.id }}--</span>
                <span>Money：{{ i.spend }}</span>
                <span>/收支：{{ i.inorout }}</span>
                <button disabled>刪除</button>
            </div>
        </div>
    </div>
</body>
</template>

<style lang="scss" scoped>
$maincolor: rgb(55,123,170);
body{
    display: flex;
    width: 1200px;
    height: 1000px;
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
    border:3px solid #000;
    margin: 0;
    width: 410px;
    height: 1000px;
    position: relative;
    display: flex;
    .inArea{
        display: inline;
        color: rgb(13, 219, 133);
    }
    .expArea{
        display: inline;
        color: rgb(189, 10, 46);;
    }
    .addBtn{
        top: 150px;
        position: absolute;
        background-color:  rgb(55,123,170);
        color: #fff;
        border-radius:15%;
    }
    .dlBtn{
        top: 150px;
        right: 0px;
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
        display: flex;
        font-size: 24pt;
    }
    h2{
        margin: 0;
        display: flex;
        font-size: 24pt;
    }
}
.jump{
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.add{
    // visibility:hidden;
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: rgb(0,0,0, .25);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    backdrop-filter: opacity(100%);
}
.addmain{
    text-align: center;
    background-position: center center;
    position: absolute;
    background-color: #FFF;
    height: 400px;
    width: 600px;
    z-index: 2;
}
.rightBody_B{
    position: absolute;
    margin-top: 200px;
    height: 800px;
    width: 400px;
    color: #FFF;
    font-weight: bold;
    text-wrap: nowrap;
    .boxArea{
        border-radius:10%;
        height: 30px;
        width: auto;
        background-color: rgb(170, 182, 231);
        border: 1px solid #000;
        margin: 1px;
    }
}
</style>