<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  created () {
    this.$store.dispatch('getProduct')
  }
}
</script>
<style scoped>

</style>
