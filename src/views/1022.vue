<script>
export default{
    data(){
        return{
            user:{
                // name:"",
                // password:""
            },
            store:{
                name:"",
                password:""
            }
        }
    },
    components:{
        
    },
    methods:{
        login(){
            // this.$router.push("/1022main");
	        var user_nameArr = new Array(localStorage.length);
            var store_password = localStorage.getItem(this.user.password);
	            for(var i in localStorage){
	                user_nameArr[i] = localStorage.key(i);
                    console.log(store_password)
		            if(user_nameArr.includes(this.user.name)){
	    	            if(this.user.password = store_password){
		    	            alert("登入成功");
                            this.$router.push("/1022main");
        	            }else{
		    	            alert("密碼錯誤or此帳號不存在");
        	            }
    	            }
	        }
        }
        //===
        // login() {
        //     firebaseAuth.signInWithEmailAndPassword(this.user.name, this.user.password)
        //     .then(() => {
        //         this.$router.push("/1022mainPage");
        //     })
        //     .catch((error) => {
        //         alert(error.message);
        //     });
        // },
    },
};

</script>
<template>
    <div class="main">
        <h1>Expense Tracker</h1>
        <div class="inpArea">
            <label for="">Account</label><br>
            <input type="text" placeholder="Placeholder/input text" v-model="user.name"><br>
            <label for="">Password</label><br>
            <input type="password" placeholder="Placeholder/input text" v-model="user.password"><br>
        </div>
        <div class="btnArea">
            <button id="signBtn"><RouterLink to="/1022sgUp">Sing up</RouterLink></button>
            <label for="">___</label><RouterLink to="/1022main">Log in</RouterLink>
            <button id="login_btn" v-on:click="login()">施工中</button>
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
}
</style>