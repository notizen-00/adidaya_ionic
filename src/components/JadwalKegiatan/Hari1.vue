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
        waktu: "09.00 - 14.00 WIB",
        kegiatan: "Registrasi Peserta",
        lokasi: "Gedung Keluarga Alumni UNEJ"
      },
      {
        id: 2,
        waktu: "14.00 - 16.00 WIB",
        kegiatan: "Technical Meeting",
        lokasi: "Gedung Soejarwo, Lantai V"
      },
      {
        id: 3,
        waktu: "14.00 - 18.30 WIB",
        kegiatan: "Penyiaran Pameran Poster, Video, dan Produk (Expo)",
        lokasi: "Gedung Soetardjo"
      },
      {
        id: 4,
        waktu: "19.00 - 22.00 WIB",
        kegiatan: "Pembukaan ABDIDAYA ORMAWA 2023",
        lokasi: "Gedung Auditorium UNEJ"
      }
    ]);
  </script>