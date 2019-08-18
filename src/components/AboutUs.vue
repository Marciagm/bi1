<template>
 <div class="about-us">
    <img-nav type="aboutUs" />
     <el-row class="tac">
         <el-col :span="8">
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
         <el-col :span="14">
             <div class="tabContent">
                 <div v-if="activeTabName === 'Career'" class="Career">
                     Career
                 </div>
                 <div  v-if="activeTabName === 'Contact Us'" class="ContactUs">
                     Contact Us
                 </div>
             </div>
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
                tabList: navNew[3].children
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
<style lang="scss">
.about-us {
    color: $light-color;
    min-height: 400px;
}
</style>
