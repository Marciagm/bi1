<template>
    <div>
		<el-table
				:data="tableData"
				border
				style="width: 100%">
			<el-table-column v-for="(item, index) in tableColumn" :key="index"
					sortable
					:prop="item.prop"
					:label="item.label"
					width="200"
			>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				testData: null
			}
		},
		props:{
			tableData: Array,
			tableColumn: Array
		}
	}
</script>
<style lang="scss">

</style>

