<script>
import {RouterLink,RouterView} from 'vue-router'
import Header from "./Header.vue"
export default{
  data(){
    return{
      img:["","",""]
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
  <body>
    <h1>H O M E</h1>
    <!-- <h2>江修輔<br>畢業於 實踐大學 資訊科技與通訊學系</h2> -->
    <img :src="img" alt="">
  </body>
</template>

<style lang="scss" scoped>
body{
  margin-top: 10px;
  text-align: center;
}
</style>
