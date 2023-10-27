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
    computed:{
        jyp(){
            return this.ntd *4.63;
        }
    },
    beforeCreate(){
        console.log("beforeCreate"+this.point)
    },
    mounted(){
        console.log("mounted"+this.point)
    },
    created(){
        console.log("Create"+this.point)
    },
    beforeMount(){
        console.log("brfore"+this.point)
    },
    beforeUpdate(){
        console.log("berforeUpdata"+this.point)
    },
    updated(){
        console.log("update"+this.point)
    },
    beforeUnmount(){
        console.log("beforeUumount"+this.point)
    },
    unmounted(){
        console.log("umounted"+this.point)
    }
}
</script>

<template>
    <p>Point : {{this.point}}</p>
    <p>ntd : {{ this.ntd }}</p>
    <p>jyp : {{ this.jyp }} </p>
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