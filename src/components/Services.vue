<template>
    <div class="services">
        <img-nav type="services" />
        <el-row class="tac">
            <el-col :span="6">
                <div class="tabWrapper">
                    <ul class="tab">
                        <li v-for="(item, index) in tabList" :label="item.label" :key="index" :class="{activeTab: $store.state.activeMenuName === item.title}">
                            <div  @click="tabClick(item)">
                                <i v-if="item.children && item.children.length > 0 && activeTabName !== item.title" class="el-icon-caret-right"></i>
                                <i v-if="item.children && item.children.length > 0 && activeTabName === item.title" class="el-icon-caret-bottom"></i>
                                {{item.title}}
                            </div>
                            <ul class="tabSub" v-if="item.children && item.children.length > 0">
                                <li v-for="(itemSub, i) in item.children" :key="i" @click="tabSubClick(itemSub)" :class="{activeSubTab: activeSubTabName === itemSub.title}">
                                    {{itemSub.title}}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="content">
                   <h2>Your Semiconductor Solutions.</h2>
                    <h3>The largest continuous source of semiconductors in Asia.</h3>
                    <ul>
                        <li><span>Design</span> BI can re-create the original device.  The end product is a form, fit, and functional replacement guaranteed to the original data sheet performance.
                        <li><span>Wafer Fab </span> Partnering with foundries to replicate the original manufacturers’ die.</li>
                        <li><span>Test</span> Our proven test protocol ensures the highest test quality with accuracy guaranteed; offering a wide variety of capabilities across multiple test platforms.</li>
                       <li><span> Wafer Processing</span> Our in-house capabilities provide quick-turn wafer processing for Wafer Thinning, Back Metallization, Probing, Sawing, Visual Inspection, Pick and Place.</li>
                        <li><span>Long term storage</span> Providing inventory tracking for both wafer/die and finished products under controlled environment.</li>

                    </ul>

                </div>
                <div class="tabContent">
                        <div v-if="activeTabName === 'Manufacturing Services'" class="ManufacturingServices">
                            Manufacturing Services
                        </div>
                        <div  v-if="activeTabName === 'Logistics Services'" class="LogisticsServices">
                            Logistics Services
                        </div>
                </div>
            </el-col>
            <el-col :span="2">
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { navNew } from '../config'
import ImgNav from '@/components/ImgNav'

export default {
    components: {
        ImgNav
    },
    data () {
        return {
            activeTabName: '',
            activeSubTabName: '',
            tabList: navNew[2].children
        }
    },
    methods: {
    tabClick(tab){
        if(this.$store.state.activeMenuName !== tab.title){
            this.$store.commit('setActiveMenuName',tab.title)
        }
        /// 获取请求获取数据

    },
    tabSubClick(tabSub){
        this.activeSubTabName = tabSub.title
        /// 获取请求获取数据

    },
}
}
</script>
<style lang="scss" scoped>
.services {
    height: 400px;
    color: $light-color;
}
.content{
    //font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.25em;
    font-weight: normal;
    //letter-spacing: 1px;
    text-align: left;
    padding: 15px 0 20px 20px;
    border-left: 1px solid #e4e7ed;
    h2{
        margin: 10px auto;
        color: #8e8a8a;
        font-size: 26px;
        text-align: left;
        &:after{
            content: '';
            height: 10px;
            width: 95px;
            border-bottom: 2px solid #4e2d66;
            display: block;
        }
    }
    h3{
        margin-bottom: 10px;
        color: black;
        font-size: 24px;
    }
    ul{
        margin: auto 10px;
        li{
            list-style: none;
            color: #0a0a0a;
            font-size: 16px;
            margin-bottom: 5px;
            line-height: 30px;
            span {
                color: #4e2d66;
                font-size: 16px;
                font-weight: 900;
            }
        }
    }
}


</style>
