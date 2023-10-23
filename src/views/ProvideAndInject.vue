<script>
import provideChild1 from '../components/provideChild1.vue';
import { ref, provide} from 'vue';
export default{
    data(){
        return{
            dataMsg:"message",
        }
    },
    components:{
        provideChild1
    },
    methods:{
        addItem(){
            this.dataArr.push('xxx')
        }
    },
    provide(){
        return{
            msg:this.dataMsg,
            cool:"cool",
            arr:this.dataArr,
        }
    },
    setup(){
        let setupMsg = ref('setupMsg')
        provide('setupMSG',setupMsg)
        return{
            setupMsg
        }
    }
}
</script>

<template>
    <div class="warp">
        <h1>這是爺爺</h1>
        <provideChild1 />
    </div>
</template>

<style lang="scss" scoped>
.warp{
    width: 600px;
    height: 600px;
    border: 1px solid black;
}
</style>