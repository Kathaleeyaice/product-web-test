<template>
  <v-app class="mb-5">
        <v-card
            outlined
            width="50%"
            class="mx-auto"
        >
            <v-app-bar
              color="deep-purple"
              dark
            >
              <v-toolbar-title>
                {{storeName}}
              </v-toolbar-title>
            </v-app-bar>
            <productPhoto/>
            <detail/>
            <v-card
                class="mx-6"
                flat="true"
            >
              <selectColor/>
              <selectSize/>
              <selectQuantity/>
              <buyButton/>
            </v-card>
        </v-card>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import productPhoto from '../components/productPhoto'
import detail from '../components/showDetail'
import selectColor from '../components/selectColor'
import selectSize from '../components/selectSize'
import selectQuantity from '../components/selectQuantity'
import buyButton from '../components/buyButton'

export default {
  name: 'home',
  components: {
    productPhoto,
    detail,
    selectColor,
    selectSize,
    selectQuantity,
    buyButton
  },
  computed: {
    ...mapState(['storeName'])
  }
}
</script>

<style scoped>

</style>
