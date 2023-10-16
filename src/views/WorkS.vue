<script>
export default{
    data(){
        return{
            imgArr:["../../pic/1.png","../../pic/2.png","../../pic/3.png","../../pic/4.png","../../pic/5.png","../../pic/6.png","../../pic/7.png","../../pic/8.png"],
        }
    },
    components:{

    },
    methods:{

    }
}
</script>

<template>
    <body>
        <div class="pageHead">
            <div class="fakeHome"></div>
            <div class="drop">
            <div class="dropOption">
                <img src="../../pic/Group 10.png" alt="">
            </div>
        
            <ul class="dropdown">
                <li>選項 1</li>
                <li>選項 2</li>
                <li>選項 3</li>
                <li>選項 4</li>
                <li>選項 5</li>
                <li>選項 6</li>
                <li>選項 7</li>
                <li>選項 8</li>
                <li>選項 9</li>
                <li>選項 10</li>
            </ul>
        </div>
        </div>
        <div class="area1">
            <div class="area1L">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus optio ex illum non ut aliquam magnam fugiat tempora quia quo!</p>
            </div>
            <div class="area1R">
                <img :src="imgArr[0]" class="pic1" alt="">
            </div>
        </div>
        <div class="onSale">On Sale</div>
        <div class="area2 d-flex justify-content-around">
            <div class="picA2">
                <img class="pic2" :src="imgArr[1]">
                <button>Buy it</button>
            </div>
            <div class="picA3">
                <img class="pic3" :src="imgArr[2]">
                <button>Buy it</button>
            </div>
            <div class="picA4">
                <img class="pic4" :src="imgArr[3]">
                <button>Buy it</button>
            </div>
        </div>
        <hr>
        <div class="news">News</div>
        <div class="area3 d-flex justify-content-around">
            <div class="card1">
                <div class="card" style="width:250px">
                    <img class="card-img-top" :src="imgArr[4]" alt="Card image" style="width:100%">
                    <div class="card-body">
                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                    <a href="#" class="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>
            <div class="card2">
                <div class="card" style="width:250px">
                    <img class="card-img-top" :src="imgArr[5]" alt="Card image" style="width:100%">
                    <div class="card-body">
                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                    <a href="#" class="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>
            <div class="card3">
                <div class="card" style="width:250px">
                    <img class="card-img-top" :src="imgArr[6]" alt="Card image" style="width:100%">
                    <div class="card-body">
                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                    <a href="#" class="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="moreA">
            <button class="more">More</button>
        </div>
        <div class="area4">
            <div class="area4L">
                <img class="pic4" :src="imgArr[7]" alt="">
            </div>
            <div class="area4R">
                <div class="area4RP">
                    <div class="a4Top">
                        New Arrival
                    </div>
                    <div class="a4Lorem">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ab ipsam iste? Non aut magnam est esse pariatur quo asperiores alias.
                    </div>
                </div>
            </div>
        </div>
        <div class="last">
            ＯＯＯＯ Company(C)2019 by Hiroshi
        </div>
    </body>
</template>

<style lang="scss" scoped>
body{
    height: 100vh;
    width: 100vw;
    margin: 0;
    // background-color: rgb(255, 145, 55);
}
.pageHead{
    margin: 0;
    display: flex;
    // background-color: rgb(255, 145, 55);
}
.fakeHome{
    height: 80px;
    width: 80px;
    background-color: pink;
    margin: 20px;
}

.drop{
    position: relative;
    display: block;
    width: 150px;
    margin-left: 60vw;//改回70vw先60vw方便找東西
    &:hover {
        .dropOption {
            display: block;
        }
    }
    &:hover {
        .dropdown {
            display: block;
        }
    }
    &:hover {
        .dropdown.close{
            display: none;
        }
    }
    .dropOption {
            position: relative;
            width: auto;
            font-size: 20px;
            padding: 10px;
            border-radius: 5px;
            box-sizing: border-box;
            cursor: pointer;
        }
        .dropdown {
            display: none;
            width: 100%;
            max-height: 350px;
            position: absolute;
            color: #333;
            padding: 0;
            margin: 0;
            background-color: #f9f9f9;
            border-radius: 6px;
            box-sizing: border-box;
            overflow: auto;//滑軸位置
        li {
            display: block;
            color: #000;
            padding: 12px;
            font-size: 20px;
            margin: 0 10px;//子選項邊界
            cursor: pointer;
            &:first-child {//第一個li往上推10px
                margin: 10px;
            }
            &:last-child {//最後一個li往下推10px
                margin-bottom: 10px;
            }
            &:hover {
                background-color: rgb(214, 192, 151);
                border-radius: 6px;
            }
        }
        &::-webkit-scrollbar {
            width: 12px;//滑軸寬度
        }
        &::-webkit-scrollbar-track {
            background-color: #eee;
            border-radius: 6px;//滑軸軌道
        }
        &::-webkit-scrollbar-thumb {
            background-color: rgb(107, 106, 105);
            border-radius: 15px;//滑軸本體
        }
        &::-webkit-scrollbar-button {
            background-color: #f9f9f9;//滑軸上下空白處
        }
    }
}
.area1{
    display: flex;
    margin: 0;
    text-align: left;
    p{
        width: 50vw;
    }
}
.area1R{
    height: 250px;
    width: 250px;
    img{
        height: 250px;
        width: 250px;
    }
}
.onSale{
    text-align: center;
    font-size: 24pt;
}
.area2{
    display: flex;
    justify-content: center;
    .picA2{
        width: 150px;
        height: 250px;
        position: relative;
        display: flex;
        justify-content: center;
        img{
        width: 150px;
        height: 250px;
        position: absolute;
        }
        button{
            top: 200px;

            position: absolute;
        }
    }
    .picA3{
        width: 150px;
        height: 250px;
        position: relative;
        display: flex;
        justify-content: center;
        img{
        width: 150px;
        height: 250px;
        position: absolute;
        }
        button{
            top: 200px;

            position: absolute;
        }
    }
    .picA4{
        width: 150px;
        height: 250px;
        position: relative;
        display: flex;
        justify-content: center;
        img{
        width: 150px;
        height: 250px;
        position: absolute;
        }
        button{
            top: 200px;

            position: absolute;
        }
    }
}
.news{
    text-align: center;
    font-size: 24pt;
}
.card1{
    height: 250px;
    width: 250px;
}
.area3{
    display: flex;
}
.moreA{
    display: flex;
    justify-content: center;
    font-size: 16pt;
    margin: 5px 0px;
    // background-color: rgb(255,145,55);
    .more{
        background-color: pink;
        color: #fff;
        border-radius:5%;
    }
}
.area4{
    display: flex;
    // background-color: rgb(255,145,55);
    .area4L{
        height: 300px;
        width: 400px;
        background-color: pink;
        img{
            margin-top: 50px;
            margin-left: 150px;
            height: 200px;
            width: 300px;
        }
    }
    .area4R{
        .area4RP{
            // margin-top: 20px;
            // margin-left: 20vw;
            margin: 20px 20vw;
            width: 150px;
            height: auto;
            background-color: pink;
            justify-self: center;
            .a4Top{
                text-align: center;
                font-weight: bold;
                font-size: 16pt;
                margin: 5px;
            }
            .a4Lorem{
                margin: 0px 5px;
                font-size: 14pt;
            }
        }

    }
}
.last{
    background-color: pink;
    width: 100vw;
    height: 120px;
    text-align: center; 
}
</style>
