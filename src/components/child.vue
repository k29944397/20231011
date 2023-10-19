<script>
export default{
    props: [
        "person",
        "sign",
    ]
}
</script>


<template>
    <body>
        <div class="textshow">
            {{ this.person }}
            <!-- {{ this.sign }}
            <label for="">Name</label>
            <input type="text" v-model="sign.name"> -->
        </div>
    </body>

</template>


<style lang="scss" scoped   >
.textshow{
    width: 600px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px soild rgb(0, 0, 0);
    font-size: 24pt;
}
</style>
