<template>
    <div style="margin-bottom: 50px;position: relative">
        <img :src="img"  style="height: 264px;width: 100%"/>
        <div class="text">
            <h1>{{h1Text}}</h1>
            <h2>{{h2Text}}</h2>
        </div>

    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import { imgNavInfo } from '@/config'

export default {
    props: ['type'],
    data () {
        return {
            img: imgNavInfo[this.type].img,
            text: imgNavInfo[this.type].text,
            h1Text: imgNavInfo[this.type].h1Text,
            h2Text: imgNavInfo[this.type].h2Text
        }
    }
}
</script>
<style lang="scss"scoped>
    .text{
        position: absolute;
        height:122px;
        width: 100%;
        left: 0;
        top:50%;
        margin-top: -61px
    }
    h1{
        //font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 2.375em;
        font-weight: 900;
        text-shadow: 0 0 0.25em rgba(0, 0, 0, 0.5);
        margin: auto;
        text-align: center;
        color: white;
    }
    h2{
        font-size: 1.6em;
        line-height: 2em;
        text-shadow: 0px 3px 6px #17222d, 0px 2px 20px #17222d;
        margin:1rem auto 0 auto;
        text-align: center;
        color: white;
    }
</style>
