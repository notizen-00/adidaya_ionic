<template>
    <div>

      <CarouselFoto/>
        Detailsss

        {{ route.params.placeId }}
    </div>
</template>
<script setup>

import {onMounted,inject} from 'vue'
import { useRoute } from 'vue-router'
import CarouselFoto from '@/components/Hotel/CarouselFoto.vue'
import router from '@/router'
import {App} from '@capacitor/app'

const route = useRoute()
const store = inject('store')
// App.addListener('backButton', ({canGoBack}) => {
//   if(!canGoBack){
//     CapacitorApp.exitApp();
//   } else {
//     window.history.back();
//   }
// });
onMounted( async()=>{
    
    await store.hotelStore.fetchDetail(route.params.placeId)

})

</script>