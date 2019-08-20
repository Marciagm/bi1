<template>
    <div>
        <el-row :gutter="20">
            <div class="searchWrapper">
                <el-input placeholder="Search the largest semiconductor inventory in Asia…" v-model="searchInputValue" class="input-with-select customSelect">
                    <template slot="prepend">Part Number</template>
                    <!-- <el-select v-model="selectValueKey" slot="prepend" placeholder="Products">
                        <el-option label="selectLabelValue1" value="selectValueKey1"></el-option>
                        <el-option label="selectLabelValue2" value="selectValueKey2"></el-option>
                        <el-option label="selectLabelValue3" value="selectValueKey3"></el-option>
                    </el-select> -->

                    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                </el-input>
            </div>
        </el-row>
    </div>
</template>
<script>
import { memory, linear, logic, opto, dt } from '@/data'

export default {
    props: ['searchHandler'],
    data () {
        return {
            searchInputValue: ''
        }
    },
    methods: {
        search () {
            this.$store.commit('setSearchValue', this.searchInputValue);
        }
    }
}
</script>
<style lang="scss" scoped>
     .searchWrapper{
        margin: 0 30px 0 20%;
        .customSelect{
            height: 65px;
        }
        /deep/ .el-select .el-input {
            width: 200px;
        }

        /deep/ .customSelect .el-input__inner{
            height: 100%;
            font-size: 1.25em;
        }
        /deep/ .customSelect .el-input--medium .el-input__icon {
            line-height: 100%;
        }
        /deep/ .el-input-group__append{
            vertical-align: middle;
            display: table-cell;
            position: relative;
            border: 1px solid #1485cc;
            padding: 0 20px;
            width: 1px;
            white-space: nowrap;
            background-color: #1485cc;
            color: #fefefe;
        }
        /deep/ .el-input-group__prepend{
            vertical-align: middle;
            display: table-cell;
            position: relative;
            border: 1px solid #DCDFE6;
            border-radius: 4px;
            padding: 0 20px;
            width: 1px;
            white-space: nowrap;
            background-color: #ececec;
            border-right: none;
            color: #8d949d;
            height: 100%;
            margin: 0;
        }
        /deep/ .el-select-dropdown__item.selected {
            font-weight: 700;
        }
         /deep/ .el-input__inner:focus {
             border-color: #DCDFE6;
             outline: 0;
         }
    }
</style>
