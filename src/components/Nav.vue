<template>
    <div class="nav">
        <el-row :gutter="20">
            <el-col :span="12">
                <img src="../images/logo.png" style="width: 278px; margin-top: 5px;" @click="goHome"/>
            </el-col>
            <el-col :span="3" v-for="(Item, index) in navNew" :key="index" style="margin-top: 80px;">
                <div class="ChildrenMenu" v-if="Item.children && Item.children.length > 0" :class="{activeMenu: activeMenuName === Item.title}">
                    <h3 class="nav-link" @click="jump(Item)">{{Item.title.toUpperCase()}}</h3>
                    <ul>
                        <li v-for="(submenu, i) in Item.children" :key="i" @click="jump(submenu)">
                            {{submenu.title.toUpperCase()}}
                        </li>
                    </ul>
                </div>
                <div v-else class="noChildrenMenu" :class="{activeMenu: activeMenuName === Item.title}">
                    <h3 class="nav-link" @click="jump(Item)">{{Item.title.toUpperCase()}}</h3>
                </div>
            </el-col>
        </el-row>
        <!-- <el-row :gutter="20">
            <div class="searchWrapper">
                <el-input placeholder="Search the world’s largest semiconductor inventory…" v-model="searchInputValue" class="input-with-select customSelect">
                    <el-select v-model="selectValueKey" slot="prepend" placeholder="请选择">
                        <el-option label="selectLabelValue1" value="selectValueKey1"></el-option>
                        <el-option label="selectLabelValue2" value="selectValueKey2"></el-option>
                        <el-option label="selectLabelValue3" value="selectValueKey3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                </el-input>
            </div>
        </el-row> -->
        <!-- <search v-show="isSearchShow" /> -->
        
        <!-- <el-row>
            <div class="navPicture" :class="{DieBank: activeMenuName === 'Die Bank',Products: activeMenuName === 'Products',Services: activeMenuName === 'Services',AboutUs: activeMenuName === 'About Us'}">
                <div v-if="activeMenuName === 'Die Bank'">
                    <h1>Die Bank</h1>
                    <h2>hello,Die Bank</h2>
                </div>
                <div v-if="activeMenuName === 'Products'">
                    <h1>Products</h1>
                   <h2>hello, Products</h2>
                </div>
                <div v-if="activeMenuName === 'Services'">
                    <h1>Services</h1>
                    <h2>hello,Services</h2>
                </div>
                <div v-if="activeMenuName === 'About Us'">
                    <h1>About Us</h1>
                    <h2>hello,About Us</h2>
                </div>
            </div>
        </el-row> -->
    </div>
</template>
<script>
import { navNew } from '../config';
import Search from './Search'
import { constants } from 'crypto';
export default {
    components: {
        Search,
    },
    data () {
        return {
            isSearchShow: false,
            navPictureBg: '',
            activeMenuName: '',
            searchInputValue: '',
            selectValueKey: 'selectValueKey1',
            navNew: navNew,
            show: true,
        }
    },
    mounted() {
        const routerName = this.$router.currentRoute.name;
        console.log(`routerName: ${routerName}`);
        this.isSearchShow = (routerName !== 'index') ? true : false;
    },
    methods: {
        showMenue () {
            this.show = true;
        },
        hideMenue () {
            this.show = false;
        },
        // search(){
        //     let key = this.selectValueKey
        //     let value = this.searchInputValue
        //     let queryParam = {}
        //     queryParam[key] = value
        //     this.activeMenuName = ''
        //     this.$router.push({name: 'searchResult', params: queryParam})
        // },
        jump (value) {
            // 判断哪一个父菜单被选中
            this.activeMenuName =  value.title || value.parent
            this.$store.commit('setActiveMenuName', this.activeMenuName)
            // 路由跳转
            if (this.$router.currentRoute.path !== value.routePath) {
                this.$router.push(value.routePath)
            } 
            this.hideMenue();
        },
        goHome () {
            this.activeMenuName = ''
            console.log(this.$router.currentRoute);
            if (this.$router.currentRoute.name !== 'index') {
                this.$router.push('/')
            }
        }
    },
    watch: {
        $route (from, to) {
            if (this.$router.currentRoute.name !== 'index') {
                this.isSearchShow = true
            } else {
                this.isSearchShow = false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .nav {
        margin-bottom: 20px;
        vertical-align: bottom;
        border-top: 6px solid $p1;
        .nav-link {
            font-size: 1.125em;
            color: #0a0a0a;
            font-weight: 900;
            cursor: pointer;
            padding: 0.7rem 0;
            line-height: 1;
            text-align: center;
        };
        .activeMenu{
            h3{
                box-sizing: border-box;
            }
        }
        ul{
            position: absolute;
            top: 0;
            left: 100%;
            z-index: 1;
            display: none;
            min-width: 13.625em;
            border: none;
            background: #4e2d66;
            //background: #bdbdbb;
            text-align: left;
            padding-left: 1em;
            color: white;
            border-radius: 5px 0 5px 5px;
            li{
                display: block;
                padding: 0.7rem 2rem;
                line-height: 1;
                cursor: pointer;
                font-weight: 900;
                color: white;
                margin-left: -1em;
                &:hover{
                    color: #ececec;
                    background: rgba(255, 255, 255, 0.1);
                }
            }
        };
        .noChildrenMenu:hover{
            .nav-link{
                background: #4e2d66;
                border-top-color: #4e2d66;
                -webkit-box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
                box-shadow: 0.25em 0.25em 0.25em rgba(171, 170, 170, 0);
                color: white;
                //color: #000;
                border-radius: 5px 5px 0 0;
            };
        };
        .ChildrenMenu{
            position: relative;
        };
        .ChildrenMenu:hover {
            ul{
                display: block;
                top: 40px;
                right: 0;
                left: auto;
                box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
            };
            .nav-link{
                background: #4e2d66;
                border-top-color: #4e2d66;
                -webkit-box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
                box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
                color: white;
                border-radius: 5px 5px 0 0;
            };
        }
    }
    .searchWrapper{
        margin:30px 30px 30px 20%;
        .customSelect{
            height: 50px;
        }
        /deep/ .el-select .el-input {
            width: 200px;
        }
        
        /deep/ .customSelect .el-input__inner{
            height: 100%;
            font-size: 1.25em;
            border-color: $light-color;
        }
        /deep/ .customSelect .el-input--medium .el-input__icon {
            line-height: 100%;
        }
        /deep/ .el-input-group__append{
            font-size: 1.25em;
            border-left: 0;
            background: $light-color!important;
            color: white;
            border-color: $light-color;
        }
        /deep/ .el-input-group__prepend{
            font-size: 1em;
            background: white !important;
            border-color: $light-color;
            background: $light-color!important;
            color: white;
        }
        /deep/ .el-select-dropdown__item.selected {
            color: $light-color;
            font-weight: 700;
        }
    }
    
    .navPicture{
        height: 300px;
        margin: auto -20px;
        padding: 4em 0;
        box-sizing: border-box;
        color: #fefefe;
        text-align: center;
        display: none;
        h1{
            font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 2.375em;
        };
        h2{
            font-size: 1.6em;
            line-height: 2em;
            margin-bottom: 0;
            margin-top: 1em;
            text-shadow: 0px 3px 6px #17222d, 0px 2px 20px #17222d;
        }
    }
    .DieBank{
        background: #314351;
        background-size: cover;
        display: block;
    }
    .Products{
        background: url(../assets/products_suppliers_banner_REV2.jpg) center center no-repeat;
        background-size: cover;
        display: block;
    }
    .Services{
        background: #314351;
        display: block;
    }
    .AboutUs{
        background: url(../assets/About-Us_Hero-Banner-REV3.jpg) center center no-repeat;
        background-size: cover;
        display: block;
    }
</style>

