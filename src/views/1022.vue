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
        <h1>Expense Tracker</h1>
        <div class="inpArea">
            <label for="">Account</label><br>
            <input type="text" value="Placeholder/input text"><br>
            <label for="">Password</label><br>
            <input type="text" value="Placeholder/input text"><br>
        </div>
        <div class="btnArea">
            <span><RouterLink to="/1022sgUp">Sing up</RouterLink></span>
            <label for="">___</label>
            <span><RouterLink to="/1022main">Log in</RouterLink></span>
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
    span{
        font-size: 16pt;
        background-color:$maincolor;
        border-radius:15%;
        
    }
}
</style>