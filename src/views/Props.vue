<script>
import child from "../components/child.vue";
export default{
    data(){
        return{
            propsObj:{
                name:"mary",
                age:58,
                email:"xxx@gggmail.com"
            },
            page:1,
            genderText:["男性","女性"],
            personal:[],
        }
    },
    methods:{
        changePage(){
            this.page = 2;
        },
        changePage2(){
            this.page = 1;
        }
    },
    components:{
        child
    }
}
</script>


<template>
<body>
    <div v-if="page ==1" class="show">
        <!-- 填寫註冊帳戶資訊版面 -->
        <h1>註冊</h1>
        <label for="">姓名</label>
        <input type="text" v-model="personal[0]">
        <br>
        <label for="">電話</label>
        <input type="text" v-model="personal[1]">
        <br>
        <label for="">信箱</label>
        <input type="text" v-model="personal[2]">
        <br>
        <label for="">地址</label>
        <input type="text" v-model="personal[3]">
        <br>
        <label for="">學校</label>
        <input type="text" v-model="personal[4]">
        <br>
        <label for="">男性</label>
        <input type="radio" v-model="genderText" name="gender" value="男性">
        <label for="">女性</label>
        <input type="radio" v-model="genderText" name="gender" value="女性">
        <br>
        <label for="">興趣</label>
        <input type="text" v-model="personal[5]">
        <br>
        <button type="button" @click="changePage()">next</button>
    </div>
    <div v-if="page ==2" class="show">
        <!-- 確認註冊帳戶資訊版面 -->
        <h1>使用者資訊</h1>
        <Label>姓名:</Label>
        <p>{{ personal[0] }}</p>
        <Label>電話:</Label>
        <p>{{ personal[1] }}</p>
        <Label>E-mail:</Label>
        <p>{{ personal[2] }}</p>
        <Label>地址:</Label>
        <p>{{ personal[3] }}</p>
        <Label>畢業於:</Label>
        <p>{{ personal[4] }}</p>
        <Label>性別:</Label>
        <p>{{ genderText }}</p>
        <Label>興趣:</Label>
        <p>{{ personal[5] }}</p>
        <button type="button" @click="changePage2()">確定</button>
    </div>
    <div class="show">
        <child :person="propsObj" />
    </div>
</body>

</template>


<style lang="scss" scoped>
body{
    text-align: center;
}
.show{
    input{
        margin: 2px 0;
    }
}
</style>
