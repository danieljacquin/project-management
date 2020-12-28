<template>
  <div id="nav">
    <Nav/>
  </div>
  <router-view/>
</template>
<script>
import Nav from './Nav.vue'
export default {
  components:{Nav}
}
</script>
<style>
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
</style>
