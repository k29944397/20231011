<script>
export default{
    data(){
        return{
            user:{
                name:"",
                password:""
            },
        }
    },
    components:{
        
    },
    methods:{
        login(){
            if(this.user.name ==="" && this.user.password ===""){
                alert("請輸入帳號或密碼");
            }else{
                if(this.user.name in localStorage){
                    let password = localStorage[this.user.name]
                    if(this.user.password === password){
                        alert("登入成功")
                        this.$router.push("/1022main");
                    }else{
                        alert("密碼錯誤");
                    }
                }else{
                    alert("帳號不存在")
                }
            }
        }
    },
};

</script>
<template>
    <div class="main">
        <h1>Expense Tracker</h1>
        <div class="inpArea">
            <label for="">Account</label><br>
            <input type="text" placeholder="Placeholder/input text" v-model="this.user.name"><br>
            <label for="">Password</label><br>
            <input type="password" placeholder="Placeholder/input text" v-model="this.user.password"><br>
        </div>
        <div class="btnArea">
            <button id="signBtn"><RouterLink to="/1022sgUp">Sing up</RouterLink></button>
            <label for="">___</label>
            <button class="logBtn" id="login_btn" v-on:click="login()">Log in</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$maincolor:rgb(60, 127, 165);
h1{
    margin-top: 50px;
    color: $maincolor;
    display: flex;
    justify-content: center;
    align-items: center;
}
.inpArea{
text-align:  center;
}
.btnArea{
    a{text-decoration:none}
    a:hover{text-decoration:none}
    text-align: center;
    a:link{color:#fff;} //未經使用超連結的字體顏色
    a:visited {color:#ffffff;}  // 已存取連結
    a:hover {color:#ffffff;}  // 滑鼠移動到連結上
    a:active {color:#ffffff;}  // 滑鼠點選時 
    label{
        color: #fff;
    }
    button{
        font-size: 16pt;
        background-color:$maincolor;
        border-radius:15%;
        color: #fff;
    }
    .logBtn{
        :hover{
            background-color: pink;
        }
        :active{
            background-color: aqua;
        }
    }
}
</style>