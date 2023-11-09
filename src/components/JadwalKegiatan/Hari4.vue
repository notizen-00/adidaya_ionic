
<template>
    <v-timeline side="end" align="start">
      <v-timeline-item
        dot-color="pink"
        size="small"
        v-for="n in jadwalKegiatan"
        :key="n"
      >
        <div class="d-flex ">
          <small class="mr-2 w-1/3 text-xs font-bold">{{ n.waktu }}</small>
          <div class="w-3/4">
            <strong class="text-xs"><v-icon class="fas fa-location-dot" size="18" color="green"></v-icon> {{ n.lokasi }}</strong>
            <div class="text-caption">
                {{ n.kegiatan }}
            </div>
          </div>
        </div>
      </v-timeline-item>
  
      
    </v-timeline>
  </template>

  <script setup>
    import {ref} from 'vue'


    const jadwalKegiatan = ref([
  {
    id: 1,
    waktu: "07.00 - 17.00 WIB",
    kegiatan: "Paket	Wisata	(bagi	yang mengikuti/opsional)",
    lokasi: "Puslit Kopi dan Kakao (Kebun Renteng) dan Pantai Papuma"
  },
 
]);

  </script>