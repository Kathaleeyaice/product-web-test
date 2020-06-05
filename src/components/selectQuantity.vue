<template>
    <div class="selectQuantity">
      <p>Quantity</p>
      <v-btn text=true @click="decrement">-</v-btn>
        {{quantity}}
      <v-btn text=true @click="increment">+</v-btn>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'selectQuantity',
  computed: {
    ...mapState(['quantity'])
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
}
</script>
