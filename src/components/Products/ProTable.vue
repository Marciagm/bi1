<template>
    <div>
		<el-table
				:data="tableData"
				border
				:fit="true"
				:header-row-style="getHeaderStyle"
				>
			<el-table-column v-for="(item, index) in tableColumn" :key="index"
					sortable
					:prop="item.prop"
					:label="item.label"
					:width="item.width"
					:data-tag="item.prop"
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
		},
		
		mounted () {
		},
		methods: {
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
			getHeaderStyle (row, rowIndex) {
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

