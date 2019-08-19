<template>
  <div class="searchResult">
   搜索结果页
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  mounted() {
    const paramsData = this.$route.params
    console.log(paramsData)
  }
}
</script>

<style scoped>

</style>
