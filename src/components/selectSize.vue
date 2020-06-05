<template>
    <div class="selectSize">
        <p>Size</p>
        <v-radio-group v-model="size" @change="selectSize" row>
            <div v-for="size in getSizeList" :key="size">
                <v-radio :label="size" :value="size" color="deep-purple"></v-radio>
            </div>
        </v-radio-group>
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
