<template>
  <div id="app">
    <div class="nav">
      <Nav />
    </div>
    <div class="routerView">
      <router-view ></router-view>
    </div>
    <div class="foot">
      <Foot/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Foot from './components/Foot'

export default {
  name: 'app',
  components: {
    Nav,
    Foot,
  },
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
    *{
        padding: 0;
        margin: 0;
        border: 0;
        
    }
    body {
      border-top: 5px solid $p3;
      font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
      background: #fefefe;
      color: #0a0a0a;
    }
    .el-row{
        margin: auto;
    }
  .routerView{
    background: #fefefe;
  }
    .el-carousel__container{
      height: 750px!important;
    }
/*  .routerView>div{
    min-height: calc(100% - 30px);
  }
  .routerView>div>div{
    height: 100%;
  }*/
  .el-row{
    margin: auto!important;
    padding: 0 20px;
  }
#app {
  font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

}
.tabWrapper{
    margin: auto;
}
    .tab{
        padding-right: 15px;
        float: right;
        li{
            list-style: none;
            display: block;
            cursor: pointer;
            div{
                color: #818386;
                font-size: 16px;
                font-weight: 700;
                height: 50px;
                text-decoration: none;
                text-align: left;
                line-height: 55px;
                width: 215px;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                text-indent: 20px;
                /* margin-bottom: 10px; */
                border-bottom: 1px solid #e4e7ed;
                .el-icon-caret-right{
                    margin-left: -25px;
                }
                .el-icon-caret-bottom{
                    margin-left: -25px;
                }
                &:hover{
                    box-shadow: 0 0 0.25em rgba(197, 183, 208, 0.43);
                }
            }

        }
    }

    .tabContent{
        color: #818386;
        border-left: 1px solid #e4e7ed;
        min-height: 500px;
        padding-left: 20px;
    }
    .tabSub{
        display: none;
        padding-left: 20px;
        border-bottom: 1px solid #ececec;
        li{
            list-style: none;
            color: #818386;
            line-height: 40px;
            text-align: left;
            padding: 0 0 0 15px;
            font-size: 14px;
            font-weight: normal;
            height: 40px;
        }
        li:hover{
            box-shadow: 0 0 0.25em rgba(197, 183, 208, 0.43);
        }
    }
    .activeTab>div{
        margin-bottom: 0!important;
        color: $light-color !important;
        box-shadow: 0 0 0.25em rgba(197, 183, 208, 0.43);
    }
    .activeTab .tabSub{
        display: block;
    }
    .activeSubTab{
        color: $light-color !important;
        position: relative;
        /* box-shadow: 0 0 0.25em rgba(197, 183, 208, 0.43);*/
    }
    .activeSubTab:before{
        content: '';
        height: 8px;
        width: 3px;
        background: #4e2d66;
        position: absolute;
        top: 50%;
        margin-top: -4px;
        left: 5px;
    }

</style>
