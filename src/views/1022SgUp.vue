<script>
export default{
    data(){
        return{
            user:{
                name: "",
                password: "",
            },
        }
    },
    components:{
        
    },
    methods:{
        signUp(){
	        if(this.user.name == 0||this.user.password == 0){
		        alert("請輸入帳號密碼");
	        }

	        else{
		        localStorage.setItem(this.user.name,this.user.password);
                this.$router.push("/1022");
		        alert("註冊成功");
                // 註冊成功,自動回到登入
		        // setTimeout(function(){
		    	//     this.$router.push("/1022");
		        // },1000);  //1秒
	        }
        }
    }
}
</script>
<template>
    <div class="main">
        <h1>Sign Up</h1>
        <div class="inpArea">
            <label for="">Account</label><br>
            <input type="text" v-model="user.name" placeholder="Placeholder/input text" id="reg_name"><br>
            <label for="">Password</label><br>
            <input type="password" v-model="user.password" placeholder="Placeholder/input text" id="reg_password"><br>
        </div>
        <div class="btnArea">
            <button id=""><RouterLink to="/1022">Canel</RouterLink></button>
            <label for="">___</label>
            <button id="signBtn" v-on:click="signUp()">Sign Up</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$maincolor:rgb(60, 127, 165);
.main{
    padding-top: 50px;
    height: 100vh;
    background-color: $maincolor;
}
h1{
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.inpArea{
    color: #fff;
    text-align:  center;
    input{
        border-radius:15%;
        color: #fff;
        border: 1px solid #fff;
        background-color: $maincolor;
    }
    input::placeholder{
        color: #fff;
    }
}
.btnArea{
    a{text-decoration:none}
    a:hover{text-decoration:none}
    a:link{color:$maincolor;} //未經使用超連結的字體顏色
    a:visited {color:$maincolor;}  // 已存取連結
    a:hover {color:$maincolor;}  // 滑鼠移動到連結上
    a:active {color:$maincolor;}  // 滑鼠點選時 
    text-align: center;
    font-weight: bold;
    label{
        color: $maincolor;
    }
    button{
        color: $maincolor;
        font-size: 16pt;
        background-color:#fff;
        border-radius:8.7%;
    }
}
</style>