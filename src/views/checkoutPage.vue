<template>
    <div class="checkout">
        <v-card
            outlined
            width="50%"
            class="mx-auto"
        >
            <v-app-bar color="deep-purple">
                <v-toolbar-title class="white--text">Check Out</v-toolbar-title>
            </v-app-bar>
            <v-card
                class="px-6"
                flat
            >
                <v-img :src="`${photoURL}`" width="40%" class="mx-auto"/>
                <v-card-title>
                    สรุปรายการสั่งซื้อ
                </v-card-title>
                <v-card-text>
                    {{name}}<br>
                    Color: {{selectedColor}} <br>
                    Size: {{size}}<br>
                    Quantity: {{quantity}}<br>
                    Price: {{showPrice || 0}} ฿
                </v-card-text>
                Phone Number
                <v-text-field
                    placeholder="081-234-5678"
                    outlined
                ></v-text-field>
                Email
                <v-text-field
                    placeholder="abc@email.com"
                    outlined
                ></v-text-field>
                <v-container>
                <v-row>
                    <v-col>
                        <router-link to="/order" >
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
  name: 'checkout',
  computed: {
    ...mapState(['photoURL', 'name', 'selectedColor', 'size', 'quantity']),
    ...mapGetters(['showPrice'])
  }
}
</script>
