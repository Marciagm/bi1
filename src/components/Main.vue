<template>
 <div class="main">
     <div>
        <!-- <input type="text" value="" placeholder="Search the world’s largest semiconductor inventory…">
        <button @click="jump">Search</button> -->
         <el-carousel :interval="10000" arrow="always">
             <el-carousel-item v-for="(item, index) in slideData" :key="index">
                 <img :src="item.img" style="width: 100%;"/>
                 <h1>{{ item.text }}</h1>
             </el-carousel-item>
         </el-carousel>
     </div>
 </div>
</template>

<style lang="scss" scoped>
    .el-carousel__item h1 {
        color: white;
        line-height: 700px;
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 2.375em;
        font-weight: 900;
        text-shadow: 0 0 0.25em rgba(0, 0, 0, 0.5);
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
.main {
    .story {
        position: absolute;
        font-size: 2.375em;
        font-weight: 900;
        color: #fff;
        top: 400px;
        left: 35%;
        text-shadow: 0 0 0.25em rgba(0, 0, 0, 0.5);
    }
    .slide-img {
        width: 100%;
    }
    input {
        font-size: 1.25em;
        padding: 0.5em;
        height: 2em;
        width: 30em;
    }
    button {
        background: $p2;
        color: $light-color;
        padding: 1em;
        font-size: 1.25em;
    }
}
</style>
<script>
import wv from '@/images/main1.jpg'
import ha from '@/images/main2.jpg'
import largest from '@/images/main3.jpg'
export default {
    data () {
        return {
            slideData: [
                {
                    img: ha,
                    text: 'Hermetic Assembly for High Reliability and Demanding Environment'
                },
                {
                    img: wv,
                    text: 'Wide Variety of Testing Capabilities'
                },
                

                {
                    img: largest,
                    text: 'Largest Source of EOL Products in Asia'
                },
            ]
        }
    },
    methods: {
        jump () {
            this.$router.push('/products')
        }
    }
}
</script>
