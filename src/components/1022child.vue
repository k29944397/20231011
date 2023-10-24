<script>
export default{
    data(){
        return{
            info:[],
        }
    },
    methods:{
        getInfo(){
            this.$emit("get",this.info)
        },
        show(){

        }
    }
}
</script>
<template>
    <div class="c1">    
        <div class="textArea">
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
.c1{
    display: flexbox;
    justify-content: center;
    height: 600px;
    width: 300px;
    background-color: aquamarine;
}

</style>