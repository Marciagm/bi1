<template>
    <div class="nav">
        <el-row :gutter="20">
            <el-col :span="8">
                <img src="../images/logo.png" style="width: 278px; margin-top: 5px;" @click="goHome"/>
            </el-col>
            <el-col :span="3" v-for="(Item, index) in navNew" :key="index" style="margin-top: 65px;">
                <div class="ChildrenMenu" v-if="Item.children && Item.children.length > 0" :class="{activeMenu: activeMenuName === Item.title}">
                    <div class="nav-link" @click="jump(Item)">{{Item.title}}</div>
                    <ul>
                        <li v-for="(submenu, i) in Item.children" :key="i" @click="jump(submenu)">
                            {{submenu.title}}
                        </li>
                    </ul>
                </div>
                <div v-else class="noChildrenMenu" :class="{activeMenu: activeMenuName === Item.title}">
                    <div class="nav-link" @click="jump(Item)">{{Item.title}}</div>
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
            //this.hideMenue();
        },
        goHome () {
            this.activeMenuName = ''
            console.log(this.$router.currentRoute);
            if (this.$router.currentRoute.name !== 'index') {
                this.$router.push('/')
            }
        }
    },
}
</script>
<style lang="scss" scoped>
    .nav {
        //margin-bottom: 20px;
        vertical-align: bottom;
        .nav-link {
            color: #0a0a0a;
            cursor: pointer;
            padding: 0.7rem 0;
            line-height: 1;
            text-align: center;
            border-top: 2px solid transparent;
            font-size: 1.125em;
            text-transform: uppercase;
            font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 900;
        };
        .activeMenu{
            div{
                box-sizing: border-box;
                font-weight: 900;
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
            text-align: left;
            padding-left: 1em;
            li{
                display: block;
                padding: 0.7rem 2rem;
                line-height: 1;
                cursor: pointer;
                font-weight: 900;
                margin-left: -1em;
                font-size: 0.9375em;
                &:hover{
                    background: rgba(0, 0, 0, 0.07);
                }
            }
        };
        .noChildrenMenu:hover{
            .nav-link{
                border-top: 3px solid $p3;
                background: #f3f3f3;
                -webkit-box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
                box-shadow: 0.25em 0.25em 0.25em rgba(171, 170, 170, 0);
            };
        };
        .ChildrenMenu{
            position: relative;
        };
        .ChildrenMenu:hover {
            ul{
                display: block;
                background: #f3f3f3;
                top: 40px;
                right: 0;
                left: auto;
                box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
                z-index: 1000;
            };
            .nav-link{
                border-top: 3px solid $p3;
                background: #f3f3f3;
                -webkit-box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
                box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
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
            border-color: #f3f3f3;
        }
        /deep/ .customSelect .el-input--medium .el-input__icon {
            line-height: 100%;
        }
        /deep/ .el-input-group__append{
            font-size: 1.25em;
            border-left: 0;
        }
        /deep/ .el-input-group__prepend{
            font-size: 1em;
            border-color: #f3f3f3;
        }
        /deep/ .el-select-dropdown__item.selected {
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

