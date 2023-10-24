<script>
export default{
    data(){
        return{
            point:0,
            ntd:0
        }
    },
    methods:{
        addPoint(){
            this.point +=1;
        }
    },
    watch:{
        point(){
            this.ntd = this.point *10;
        }
    },
    components:{
        jyp(){
            return this.ntd *4.63;
        }
    }
}
</script>

<template>
    <p>Point : {{this.point}}</p>
    <p>ntd : {{ this.ntd }}</p>
    <div class="circle" @click="addPoint"></div>
</template>

<style lang="scss" scoped>
.circle{
    background-color: rgb(255, 0, 0);
    height: 300px;
    width: 300px;
    border-radius:50%;
}
p{
    text-align: center
}

</style>