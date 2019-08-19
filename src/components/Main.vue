<template>
 <div class="main">
     <div>
        <!-- <input type="text" value="" placeholder="Search the world’s largest semiconductor inventory…">
        <button @click="jump">Search</button> -->
         <el-carousel :interval="10000" arrow="always">
             <el-carousel-item v-for="(item, index) in slideData" :key="index">
                 <img :src="item.img" style="width: 100%; height: 600px"/>
                 <h3>{{ item.text }}</h3>
             </el-carousel-item>
         </el-carousel>
     </div>
 </div>
</template>

<style lang="scss" scoped>
    .el-carousel__item h3 {
        color: white;
        font-size: 36px;
        line-height: 600px;
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        text-shadow: 0px 3px 6px #17222d, 0px 2px 20px #17222d;


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
import wv from '@/images/wv.jpeg'
import ha from '@/images/ha.jpeg'
import largest from '@/images/largest.jpeg'
export default {
    data () {
        return {
            slideData: [
                {
                    img: wv,
                    text: 'Wide Variety of Testing Capabilities'
                },
                {
                    img: ha,
                    text: 'Hermetic Assembly for High Reliability and Demanding Environment'
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
