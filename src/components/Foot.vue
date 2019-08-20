<template>
    <div class="nav">
        <el-row :gutter="20">
            <el-col :span="8">
                <img src="../images/logo.png" style="width: 278px;" @click="goHome"/>
            </el-col>
            <el-col :span="4" v-for="(Item, index) in navNew" :key="index" style="margin-top: 10px;">
                <div class="ChildrenMenu" v-if="Item.children && Item.children.length > 0">
                    <h3 class="nav-link" @click="jump(Item)">{{Item.title.toUpperCase()}}</h3>
                    <ul>
                        <li v-for="(submenu, i) in Item.children" :key="i" @click="jump(submenu)">
                            {{submenu.title}}
                        </li>
                    </ul>
                </div>
                <div v-else class="noChildrenMenu">
                    <h3 class="nav-link" @click="jump(Item)">{{Item.title.toUpperCase()}}</h3>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import { navNew } from '../config'
    export default {
        data () {
            return {
                navNew: navNew
            }
        },
        methods: {
            jump (value) {
                // 路由跳转
                this.$router.push(value.routePath)
            },
            goHome () {
                this.$router.push('/')
            }
        }
    }
</script>
<style lang="scss" scoped>
    .nav {
        margin-top: 30px;
        margin-bottom: 20px;
        vertical-align: bottom;
        .nav-link {
            font-size: 0.9125em;
            color: #0a0a0a;
            font-weight: 900;
            cursor: pointer;
            padding: 0.7rem 0;
            line-height: 1;
            text-align: left;
        };
        ul{
            border: none;
            text-align: left;
            li{
                display: block;
                cursor: pointer;
                text-align: left;
                font-size: 0.8125em;
                line-height: 20.8px;
            }
        };
    }
</style>

