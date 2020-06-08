<template>
    <div>
        <v-card
            outlined
            width="50%"
            class="mx-auto"
        >
            <v-app-bar color="deep-purple">
                <v-toolbar-title class="white--text">Cart</v-toolbar-title>
            </v-app-bar>
            <v-card
                class="px-6"
                flat
            >
            <v-img :src="`${photoURL}`" width="40%" class="mx-auto"/>
            <v-card-title>
                {{name}}
            </v-card-title>
            <v-card-text>
                Color: {{selectedColor}} <br>
                Size: {{size}}<br>
                Quantity: {{quantity}}<br>
                Price: {{showPrice || 0}} ฿
            </v-card-text>
            <v-container>
                <v-row>
                    <v-col>
                        <router-link to="/" >
                            <v-btn color="deep-purple" dark> Back </v-btn>
                        </router-link>
                    </v-col>
                    <v-col>
                        <!-- <v-btn text=true class="float-md-right" v-on:click="buyNow()"> Buy Now </v-btn> -->
                        <router-link to="/checkout">
                            <v-btn class="float-md-right" color="deep-purple" dark> BUY NOW </v-btn>
                        </router-link>
                    </v-col>
                </v-row>
            </v-container>
            </v-card>
        </v-card>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'orderPage',
  computed: {
    ...mapState(['name', 'photoURL', 'selectedColor', 'size', 'price', 'quantity']),
    ...mapGetters(['showPrice'])
  },
  methods: {
    buyNow () {
      alert('Order successful')
    }
  }
}
</script>
