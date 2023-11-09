<template>
    <div>

      <CarouselFoto/>

      <div class="sticky-nav d-flex justify-between">
        <router-link to="/beranda">
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
        class="sticky w-3/4 mr-2"
        @click="openNavigation"
        >
        Navigasi 
        </v-btn>
    
      </div>
    </div>
</template>
<script setup>

import {onMounted,inject} from 'vue'
import { useRoute } from 'vue-router'
import CarouselFoto from '@/components/Hotel/CarouselFoto.vue'
import router from '@/router'
import {App} from '@capacitor/app'
import { AppLauncher } from '@capacitor/app-launcher';
import { Browser } from '@capacitor/browser';
import { storeToRefs } from 'pinia'
const route = useRoute()
const store = inject('store')

const {getNavigation} = storeToRefs(store.hotelStore)

const openNavigation = async () => {
  await Browser.open({ url: getNavigation.value });
};


onMounted( async()=>{
    
    await store.hotelStore.fetchDetail(route.params.placeId)

})

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