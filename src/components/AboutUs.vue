<template>
 <div class="about-us">
    <img-nav type="aboutUs" />
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
                 <h2>Corporate Headquarters</h2>
                 <p style="margin-bottom: 20px;font-size: 18px;line-height: 1.6;">
                     If you have any questions or queries please contact us on :
                     <span class="hilight">+65 98915586</span> or email sales@bi-components.com.<br>
                     <br/>
                     <span class="firm-info" style="font-weight: bold;">
                     BI  COMPONENTS<br>
                     51 Goldhill Plaza #07-10/11<br>
                     Singapore 308900<br>
                     TEL:&nbsp;&nbsp;&nbsp;&nbsp;+65 98915586<br>
                     FAX:&nbsp;&nbsp;&nbsp;&nbsp;+65 63543261<br>
                     <a href="mailto:sales@bi-components.com" target="_blank" class="hilight">sales@bi-components.com</a><br>
                     </span>
                 </p>
                 <p style="font-size: 18px;">
                 Headquartered in Singapore. BI Components strives to be a world leading semiconductor solution provider, offering comprehensive bare die & wafer inventory with value-added die processing services and packaging solutions for hybrid IC and multi-chip module manufacturers in global marketplace. BI's extensive product line of hi-reliability bare die components, has made the company one the top and largest bare die supplier of choice for Aerospace, Defense, Space, Medical, and Industrial markets in Asia and worldwide.<br/><br/>
                 The corporate facility is equipped with ESD protected class 10,000 cleanrooms, nitrogen-filled and hermetically sealed stored inventory. Combined with strict ISO9100 quality systems, our extensive inventory ensures quick delivery without compromise to quality. All dies are visually inspected to MIL-STD-833 methods and 100% probed. Aerospace-grade products are 100% screened and aging-tested.<br/><br/>
                 With the broadest offering of bare die products and packaging solutions in the industry, BI Components became recognized both as a leading bare die add value service provider and a semiconductor solutions provider in Asian and global marketplace.</p>

             </div>
             <!-- <div class="tabContent">
                 <div v-if="activeTabName === 'aboutUs'" class="Career">
                 </div>
                 <div  v-if="activeTabName === 'Contact Us'" class="ContactUs">
                 </div>
             </div> -->
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
                tabList: navNew[3].children
            }
        },
        methods: {
            tabClick(tab){
                if(this.$store.state.activeMenuName !== tab.title){
                    this.$store.commit('setActiveMenuName',tab.title)
                }
                this.activeTabName = this.$store.state.activeMenuName
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
.about-us {
    //color: $light-color;
    min-height: 400px;
}
.hilight {
    color: $btn-bg-dark;
    font-weight: bold;
    text-decoration: none;
}
.content{
    //font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.25em;
    font-weight: normal;
    //letter-spacing: 1px;
    text-align: left;
    padding: 15px 0 20px 20px;
    border-left: 1px solid #e4e7ed;
}
    .tabContent{
        div{
            h2{
                //font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;
                font-size: 2.25em;
                font-weight: normal;
                letter-spacing: 1px;
                margin: 1em 0;
                text-align: left;
            }
            div{
                display: flex;
                p{
                    margin-bottom: 1rem;
                    font-size: inherit;
                    line-height: 1.6;
                    text-rendering: optimizeLegibility;
                    width: 270px;
                }
                img{width: 500px;height: 180px}
            }
        }

    }
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
</style>
