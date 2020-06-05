<template>
    <div>
      <v-container>
        <v-row>
          <v-col>
           <v-card-title>
              {{name}}
            </v-card-title>
            <v-card-subtitle>
              {{description}}
            </v-card-subtitle>
          </v-col>
          <v-col>
            <v-card-title class="float-md-right">
              {{showPrice || 0 }} ฿
            </v-card-title>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'detail',
  computed: {
    ...mapState(['name', 'description']),
    ...mapGetters(['showPrice'])
  }
}
</script>
<style scoped>

</style>
