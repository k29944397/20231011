<script>
import {RouterLink,RouterView} from 'vue-router'
import Header from "./Header.vue"
export default{
  data(){
    return{
      info:0,
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
    <label for="">一些個資</label>
    <select name="" id="" v-model="info">
        <option value="0">姓名</option>
        <option value="1">學歷</option>
        <option value="2">持有執照</option>
    </select>
    <p v-if="info == 1">畢業於 實踐大學 資訊科技與通訊學系</p>
    <p v-else-if="info == 2">日檢N3<br>網頁程式設計-專業級(HTML5)</p>
    <p v-else>姓名:江修輔</p>
  </body>
</template>

<style lang="scss" scoped>
body{
  margin-top: 10px;
  text-align: center;
}
</style>
