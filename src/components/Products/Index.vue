<template>
    <div class="products">
        <search :searchHandler="searchHandler" v-show="isSearchShow"/>
        <img-nav type="products" />
        <el-row class="tac">
            <el-col :span="6">
                <div class="tabWrapper">
                    <ul class="tab">
                        <li v-for="(item, index) in tabList" :label="item.title" :key="index" :class="{activeTab: $store.state.activeMenuName === item.title}">
                            <div  @click="jump(item)">
                                <i v-if="item.children && item.children.length > 0 && activeTabName !== item.title" class="el-icon-caret-right"></i>
                                <i v-if="item.children && item.children.length > 0 && activeTabName === item.title" class="el-icon-caret-bottom"></i>
                                {{item.title.toUpperCase()}}
                            </div>
                            <ul class="tabSub" v-if="item.children && item.children.length > 0">
                                <li v-for="(itemSub, i) in item.children" :key="i" @click="jump(itemSub)" :class="{activeSubTab: activeSubTabName === itemSub.title}">
                                    {{itemSub.title}}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="16" style="padding-left: 10px;">
                <router-view :tableData="tableData"
                    :tableColumn="tableColumn"
                    :type="type"
                    ref="table"/>
            </el-col>
            <el-col :span="2">
            </el-col>
        </el-row>
    </div>
</template>
<script>
 import { navNew, tableInfo } from '@/config'
 import { memory, linear, logic, opto, dt } from '@/data'
 import ImgNav from '@/components/ImgNav'
 import Search from '@/components/Search'

 export default {
     components: {
         ImgNav,
         Search,
     },
      data() {
       return {
           type: 'memory',
           activeTabName: '',
           activeSubTabName: '',
           tabList: navNew[1].children,
           tableColumn: tableInfo.tableColumn,
           tableData: memory,
           content: '',
           isSearchShow: false,
       }
      },
    methods: {
        jump (item) {
            console.log(item);
            this.activeTabName = item.title;
            this.activeMenuName =  item.title || item.parent

            this.$store.commit('setActiveMenuName', this.activeMenuName)
            if (this.$router.currentRoute.path !== item.routePath) {
                this.$router.push(item.routePath)
            }
            //this.$router.push(item.routePath)
            const data = {
                memory,
                linear,
                logic,
                opto,
                dt
            }
            this.type = item.label;
            this.tableData = data[this.type]
            this.$store.commit('setSearchValue', '');
        },
        searchHandler (hRPartNumber) {
            console.log(this.$refs.table);
        },
      handleClick (type) {
          const data = {
              memory,
              linear,
              logic,
              opto,
              dt
          }

          this.tableData = data[type]
          //this.content = content[type]
      },
      tabSubClick(tabSub){
          this.activeSubTabName = tabSub.title
          /// 获取请求获取数据

          let tableData = []
          for(let i = 0; i < 20; i++){ //测试数据
              tableData.push({
                  date: '2016-05-04',
                  name: `${i}姓名${tabSub.title}`,
                  address: `地址${i}`
              })
          }

          this.tableColumn = tableColumn
          this.tableData = tableData
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped lang="scss">
    .products {
        //min-height: 800px;
    }
    h2 {
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
    .content{
        font-size: 21px;
        text-align: left;
        font-weight: bold;
        margin: 15px auto;
    }
    .contentUl li{
        list-style: none;
        color: #8e8a8a;
        line-height: 30px;
        position: relative;
        padding-left: 10px;
        box-sizing: border-box;
        text-align:left;
        &:before{
            content: '';
            height: 5px;
            width: 5px;
            background: #4e2d66;
            position: absolute;
            left: 0;
            top:12px
        }
    }
</style>
