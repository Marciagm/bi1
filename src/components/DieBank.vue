<template>
 <div class="die-bank">
    <img-nav :type="type" />
    <h1>
        这里有个提交登记的表单
    </h1>
 </div>
</template>

<style lang="scss">
.die-bank {
    color: $light-color;
    min-height: 400px;
}
</style>
<script>
import ImgNav from '@/components/ImgNav'

export default {
    components: {
        ImgNav,
    },
    data () {
        return {
            type: 'dieBank'
        }
    }
}
</script>