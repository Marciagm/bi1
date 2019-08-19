<template>
    <div style="margin-bottom: 50px;">
        <img :src="img"  style="height: 264px;width: 100%"/>
        <!-- <p>{{text}}</p> -->
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
        }
    }
}
</script>
