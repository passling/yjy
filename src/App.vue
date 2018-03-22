<template>
  <div id="app">
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
  import Tab from './components/tab/tab.vue'
  export default {
    components: {
      Tab
    }
  }
</script>

<style>

</style>
