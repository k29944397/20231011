<script>
import {RouterLink,RouterView} from 'vue-router'
import Header from "./Header.vue"
export default{
  data(){
    return{
      
    }
  },
    components:{
      RouterLink,
      RouterView,
      Header
    }
}
</script>

<template>
<RouterLink to="/">Home</RouterLink>
<RouterLink to="/VtexrAndVModel" >Vtext&VModel</RouterLink>
</template>

<style>
.headershow{
  height: 100vh;
  width: 100vw;
}
</style>
