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
        waktu: "08.00 - 09.30 WIB",
        kegiatan: "Penyiapan Pameran Poster, Video, dan Produk (Expo)",
        lokasi: "Gedung Soetardjo UNEJ"
      },
      {
        id: 2,
        waktu: "10.00 - 17.00 WIB",
        kegiatan: "Expo ABDIDAYA ORMAWA 2023",
        lokasi: "Gedung Soetardjo dan Aula PSTF"
      },
      {
        id: 3,
        waktu: "10.00 - 17.00 WIB",
        kegiatan: "Bazar UMKM Unggulan Kabupaten Jember",
        lokasi: "Area Parkir Gedung Soetardjo"
      },
      {
        id: 4,
        waktu: "12.00 - 14.00 WIB",
        kegiatan: "Makan Siang Bersama UMKM Unggulan Kabupaten Jember",
        lokasi: "Halaman Gedung Soetardjo"
      }
    ]);
  </script>