<template>
    <div class="selectSize">
        <p>Size</p>
        <v-btn-toggle
            v-model="toggle_exclusive"
            mandatory
            group
            @change="selectSize"
          >
          <div v-for="size in getSizeList" :key="size">
            <v-btn
              :label="size"
              :value="size"
              class="mx-1"
              depressed
            >
            {{size}}
            </v-btn>
          </div>
        </v-btn-toggle>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'selectSize',
  computed: {
    ...mapState(['size']),
    ...mapGetters(['getSizeList'])
  },
  methods: {
    ...mapActions(['selectSize'])
    // selectSize(value) --> this.$store.dispatch('selectSize', value)
  }
}
</script>
