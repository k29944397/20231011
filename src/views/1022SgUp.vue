<script>
export default{
    data(){
        return{
            
        }
    },
    components:{
        
    },
    methods:{
    }
}
</script>
<template>
    <div class="main">
        <h1>Sign Up</h1>
        <div class="inpArea">
            <label for="">Account</label><br>
            <input type="text" value="Placeholder/input text"><br>
            <label for="">Password</label><br>
            <input type="text" value="Placeholder/input text"><br>
            <label for="">Repeat Password</label><br>
            <input type="text" value="Placeholder/input text"><br>
        </div>
        <div class="btnArea">
            <span><RouterLink to="/1022">Canel</RouterLink></span>
            <label for="">___</label>
            <span><RouterLink to="/1022">Sign Up</RouterLink></span>
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
    span{
        font-size: 16pt;
        background-color:#fff;
        border-radius:8.7%;
    }
}
</style>