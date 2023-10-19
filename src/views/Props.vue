<script>
import child from "../components/child.vue";
export default{
    data(){
        return{
            // propsObj:{
            //     name:"mary",
            //     age:58,
            //     email:"xxx@gggmail.com"
            // },
            page:1,
            // genderText:["男性","女性"],
            // personal:[],
            personal:{
                name:"",
                phone:"",
                email:"",
                address:"",
                school:"",
                gender:"",
                favorite:"",
            }
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
        <input type="text" v-model="personal.name">
        <br>
        <label for="">電話</label>
        <input type="text" v-model="personal.phone">
        <br>
        <label for="">信箱</label>
        <input type="text" v-model="personal.email">
        <br>
        <label for="">地址</label>
        <input type="text" v-model="personal.address">
        <br>
        <label for="">學校</label>
        <input type="text" v-model="personal.school">
        <br>
        <label for="">男性</label>
        <input type="radio" v-model="personal.gender" name="gender" value="男性">
        <label for="">女性</label>
        <input type="radio" v-model="personal.gender" name="gender" value="女性">
        <br>
        <label for="">興趣</label>
        <input type="text" v-model="personal.favorite">
        <br>
        <button type="button" @click="changePage()">next</button>
    </div>
    <div v-if="page ==2" class="show">
        <!-- 確認註冊帳戶資訊版面 -->
        <h1>使用者資訊</h1>
        <Label>姓名:</Label>
        <p>{{ personal.name }}</p>
        <Label>電話:</Label>
        <p>{{ personal.phone }}</p>
        <Label>E-mail:</Label>
        <p>{{ personal.email }}</p>
        <Label>地址:</Label>
        <p>{{ personal.address }}</p>
        <Label>畢業於:</Label>
        <p>{{ personal.school }}</p>
        <Label>性別:</Label>
        <p>{{ personal.gender }}</p>
        <Label>興趣:</Label>
        <p>{{ personal.favorite}}</p>
        <button type="button" @click="changePage2()">確定</button>
    </div>
    <div class="show">
        <child :person="personal" />
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
