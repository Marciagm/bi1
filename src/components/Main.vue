<template>
 <div class="main">
     <div>
        <!-- <input type="text" value="" placeholder="Search the world’s largest semiconductor inventory…">
        <button @click="jump">Search</button> -->
        <h1>Here is a slide show 每30秒轮播一次， 共三张图片，图片上有文字  {{slideData}}</h1>
     </div>
 </div>
</template>

<style lang="scss">
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
export default {
    data () {
        return {
            slideData: [
                {
                    img: '@/images/wv.jpeg',
                    text: 'Wide Variety of Testing Capabilities'
                },
                {
                    img: '@/images/ha.jpeg',
                    text: 'Hermetic Assembly for High Reliability and Demanding Environment'
                },
                
                {
                    img: '@/images/largest.jpeg',
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
