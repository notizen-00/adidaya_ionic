<template>
    <v-banner>
        {{ getLokasi.lat }}
        {{ getLokasi.lng }}
    </v-banner>
</template>
<script setup>
import { Geolocation } from '@capacitor/geolocation';
import { storeToRefs } from 'pinia';
import { onMounted,ref,inject } from 'vue'

const store = inject('store')
const { getLokasi } = storeToRefs(store.lokasiStore)


const printCurrentPosition = async () => {
  const coordinates = await Geolocation.getCurrentPosition();

  console.log('Current position:', coordinates.coords);

    store.lokasiStore.setLokasi(coordinates.coords)


};

onMounted(()=>{
    printCurrentPosition()
})

</script>