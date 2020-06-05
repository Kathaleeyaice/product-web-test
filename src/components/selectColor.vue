<template>
    <div class="selectColor">
        <p>Color</p>
        <v-radio-group v-model="selectedColor" @change="selectColor" row>
            <div v-for="color in productColor" :key="color">
                <v-radio :label="color" :value="color" color="deep-purple"></v-radio>
            </div>
        </v-radio-group>
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
