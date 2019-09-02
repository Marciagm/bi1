<template>
    <div>
		<el-table
				:data="tableData"
				border
				:fit="true"
				:header-row-style="getHeaderStyle"
				:header-click="headerClick"
				>
			<el-table-column v-for="(item, index) in tableColumn" :key="index"
					:prop="item.prop"
					:label="item.label"
					:width="item.width"
					:data-tag="item.prop"
					:filters="filterData[item.prop]"
      				:filter-method="filterHandler"
			>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				testData: null,
				filterData: {}
			}
		},
		props:{
			tableData: Array,
			tableColumn: Array
		},
		
		mounted () {
			const keys = Object.keys(this.tableData[0]);
			for (let key of keys) {
				const set = new Set();
				for (let i = 0; i < this.tableData.length; i++) {
					const item = this.tableData[i];
					if (item[key]) {
						set.add(item[key].toLowerCase());
					}
				}
				const array = [...set]
				array.sort();
				
				this.filterData[key] = []
				for (let j = 0; j < array.length; j++) {
					this.filterData[key].push({text: array[j], value: array[j]});
				}
			}
			
			
		},
		methods: {
			headerClick () {
				alert(1)
			},
			filterHandler (value, row , column) {
				const property = column['property'];
				//return row[property] == value;
				console.log(row[property], value)
				console.log(row[property] == value)
				console.log(this.filterData)
				const filterPart = document.getElementsByClassName('el-table-filter__bottom')
				console.log(filterPart)
				return row[property].toLowerCase() == value.toLowerCase()
			},
			search (v) {
				
				var trs = document.getElementsByTagName('tr');
				for (let i = 0, len = trs.length ; i < len; i++) {
					const tr = trs[i];
					const value = tr.children[0].innerText;
					let scroll = false;
					if (!v) {
						tr.style.background=""; 
					} else {
						if (value.indexOf(v) > -1) {
							tr.style.background="yellow"; 
							if (!scroll) {
								tr.scrollIntoView();
								scroll = true;
							}
						} else {
							tr.style.background=""; 
						}
					}
					
				}
				this.$store.commit('setSearchValue', '')
			},
			getHeaderStyle (row) {
				return {
					'font-weight': 900,
					color: '#0a0a0a'
				}
			},
		},
		computed: {
			searchValue () {
				return this.$store.state.searchValue
			}
		},
		watch: {
			searchValue (old, newV) {
				
				this.search(newV);
				
			}
		}
	}
</script>
<style lang="scss">

</style>

