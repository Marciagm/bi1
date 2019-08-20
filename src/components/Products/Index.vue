<template>
    <div>
        <search :searchHandler="searchHandler"/>
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
            <el-col :span="16">
                <p class="content">
                HiRel products (HR) in all package types to temperature range of -40°C/-55°C to +125°C and special specifications to +175°C. Manufactured under MIL-PRF-53835 and tested in accordance with MIL-STD-883, M5004 with optional B, C, D, group testing. 
                </p>
                <h1>这里要改！！！</h1>
                <el-row>
                    <el-col :span=12>
                        <ul>
                            <li>Memory(SRAM, EEPROM, FLASH and UVEPROM)</li>
                        
                            <li>Linear(Op-Amps, Comparators, Amplifiers, Comparators, References and more)</li>
                        </ul>
                    </el-col>
                    <el-col :span=12>
                       Logic(HC, HCT, FCT and more)
OPTO(photo diodes, photo transistors, optocouplers and more)
Diodes & Transistor
                    </el-col>
                </el-row>

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
    
</style>
