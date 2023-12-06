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

      <v-btn variant="tonal" @click="openNavigation(n.url)" append-icon="fas fa-location-dot"  color="blue"> Detail</v-btn>

      </v-timeline-item>
  
      
    </v-timeline>
  </template>

  <script setup>
    import {ref} from 'vue'
    import { Browser } from '@capacitor/browser';

    const openNavigation = async (value) => {
  await Browser.open({ url: value });
};
    const jadwalKegiatan = ref([
      {
        id: 1,
        waktu: "09.00 - 14.00 WIB",
        kegiatan: "Registrasi Peserta",
        lokasi: "Gedung Keluarga Alumni ",
        url:"https://maps.google.com/?cid=3821154017735390019"
      },
      {
        id: 2,
        waktu: "14.30 - 16.00 WIB",
        kegiatan: "Technical Meeting",
        lokasi: "Gedung Soejarwo, Lantai V",
        url:"https://maps.google.com/?cid=4259824441275624270"
      },
      {
        id: 3,
        waktu: "14.00 - 18.30 WIB",
        kegiatan: "Penyiaran Pameran Poster, Video, dan Produk (Expo)",
        lokasi: "Gedung Soetardjo UNEJ",
        url:"https://maps.google.com/?cid=1493714162615523958"
      },
      {
        id: 4,
        waktu: "19.00 - 22.00 WIB",
        kegiatan: "Pembukaan ABDIDAYA ORMAWA 2023",
        lokasi: "Gedung Auditorium UNEJ",
        url:"https://maps.google.com/?cid=3473882070966639052"
      }
    ]);

   
  </script>