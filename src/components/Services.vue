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
                   <h2> Wafer Processing</h2>
                    Our in-house capabilities provide quick-turn wafer processing for Wafer Thinning, Back Metallization, Probing, Sawing, Visual Inspection, Pick and Place.<br/><br/>
                    <h2>Finish Product Design</h2>
                    BI can re-create the original device.  The end product is a form, fit, and functional replacement guaranteed to the original data sheet performance.<br/><br/>
                    <h2>Test</h2>
                    Our proven test protocol ensures the highest test quality with accuracy guaranteed; offering a wide variety of capabilities across multiple test platforms.

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
    letter-spacing: 1px;
    text-align: left;
    padding: 15px 0 20px 20px;
    border-left: 1px solid #e4e7ed;
    h2 {
        font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 1.25em;
        font-weight: bold;
        letter-spacing: 1px;
        margin-bottom: 1rem;
    }
}

</style>
