<template>
    <div class="productPhoto">
        <v-img :src="`${photoURL}`"/>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'productPhoto',
  computed: {
    ...mapState(['photoURL'])
  }
}
</script>
<style scoped>
</style>
