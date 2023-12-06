<template>
    <div class="sticky-nav d-flex justify-between">
        <router-link to="/agenda">
        <v-btn
        size="large"
        color=""
        class="mb-1 ml-2"
        icon="fas fa-arrow-left"
        >

        </v-btn>
        </router-link>
 
        <v-btn 
        size="x-large"
        color="info"
        prepend-icon="fas fa-location-dot"
        class="sticky w-3/4 mr-2"
        @click="openNavigation"
        >
        Lokasi
        </v-btn>
    
      </div>
</template>
<script setup>
    import {inject} from 'vue'
    import { Browser } from '@capacitor/browser';
    import { storeToRefs } from 'pinia'

const store = inject('store')

const {getNavigation} = storeToRefs(store.hotelStore)

const openNavigation = async () => {
  await Browser.open({ url: getNavigation.value });
};

</script>

<style scoped>
.sticky-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* Untuk memastikan tombol selalu muncul di atas konten lain */
}
</style>