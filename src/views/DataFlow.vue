<script>
import flowchild1 from "../components/flowchild1.vue";
import flowchild2 from "../components/Flowchild2.vue";
export default{
    data(){
        return{
            obj:{
            },
            page:false
        }
    },
    components:{
        flowchild1,
        flowchild2
    },
    methods:{
        infoGet(x){
            this.obj = x;
            this.page = !this.page;
        },
        pageChange(parm){
            console.log(parm)
            this.page = !this.page;
        }
    }
}
</script>

<template>
    <h1>{{ this.obj }}</h1>
    <div v-show="page == false" class="show">
        <p>C1</p>
        <flowchild1 @get="infoGet" />
        <!-- <button type="button" @click="pageChange">pageChange</button> -->
    </div>
    <div v-show="page == true" class="show">
        <p>C2</p>
        <flowchild2 :name="obj.name" :year="obj.year" :pageChan="pageChange" />
        <!-- <flowchild2 v-bind="this.obj" :pageChan="pageChange"/> -->
        <button type="button"  @click="pageChange">返回</button>
    </div>

</template>

<style lang="scss" scoped>
.show{
    height: 250px;
    width: 250px;
    border: 1px solid black;
    text-align: center;
}
</style>