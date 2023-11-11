<template>
    <v-timeline side="end" align="start">
      <v-timeline-item
        dot-color="black"
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
        waktu: "08.00 - 09.30 WIB",
        kegiatan: "Penyiapan Pameran Poster, Video, dan Produk (Expo)",
        lokasi: "Gedung Soetardjo"
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