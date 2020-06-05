<template>
    <div class="selectColor">
        <p>Color</p>
        <v-btn-toggle
            v-model="toggle_exclusive"
            mandatory
            group
            @change="selectColor"
          >
          <div v-for="color in productColor" :key="color">
            <v-btn
              :label="color"
              :value="color"
              class="mx-1"
              depressed
            >
            {{color}}
            </v-btn>
          </div>
        </v-btn-toggle>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'selectColor',
  computed: {
    ...mapState(['selectedColor', 'productColor'])
  },
  methods: {
    ...mapActions(['selectColor'])
  }
}
</script>
