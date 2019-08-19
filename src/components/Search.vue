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
        }
        /deep/ .el-select-dropdown__item.selected {
            font-weight: 700;
        }
    }
</style>
