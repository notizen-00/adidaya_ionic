
<template>
  <v-timeline side="end" align="start">
    <v-timeline-item
      :dot-color="n.id == 1 ? 'info':'black'"
      size="small"
      v-for="n in jadwalKegiatan"
      :key="n"
      @click="test(n.id)"
    >

    <template v-slot:opposite>
      <div class="d-flex justify-center">
        <div class="w-full d-flex justify-start">
         
          <div class="text-caption w-full">
            <strong class="text-xs text-start w-full"><v-icon class="fas fa-location-dot" size="15" color="green"></v-icon> {{ n.lokasi }}</strong>
              {{ n.kegiatan }}
              <br>
              <v-icon color="grey" size="sm" class="mr-2">fas fa-clock</v-icon><span class="text-slate-500">{{ n.waktu }}</span>
          </div>
        </div>
      </div>
     
    </template>
    <RouterLink to="/detail-agenda">
    <v-btn variant="tonal" color="blue">Detail</v-btn>
    </RouterLink>
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