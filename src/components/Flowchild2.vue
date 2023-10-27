<script>
export default{
    data(){
        return{

        }
    },
    props:[
        "name",
        "year"
    ]
}
</script>

<template>
    <div class="page2">
        <label for="">名字</label>
        <p>{{ this.name }}</p>
        <br>
        <label for="">年齡</label>
        <p>{{ this.year }}</p>
        <br>
    </div>
</template>

<style lang="scss" scoped>
</style>