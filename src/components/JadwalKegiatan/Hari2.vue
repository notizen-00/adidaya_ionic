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
        waktu: "08.00 - 09.30 WIB",
        kegiatan: "Penyiapan Pameran Poster, Video, dan Produk (Expo)",
        lokasi: "Gedung Soetardjo UNEJ",
        url:"https://maps.google.com/?cid=1493714162615523958"
      },
      {
        id: 2,
        waktu: "10.00 - 17.00 WIB",
        kegiatan: "Expo ABDIDAYA ORMAWA 2023 ( Hari 1)",
        lokasi: "Gedung Soetardjo dan Aula PSTF",
        url:"https://maps.google.com/?cid=14947528077697532496"
      },
      {
        id: 3,
        waktu: "10.00 - 17.00 WIB",
        kegiatan: "Bazar UMKM Unggulan Kabupaten Jember",
        lokasi: "Area Parkir Gedung Soetardjo",
        url:"https://maps.google.com/?cid=1493714162615523958"
      },
      {
        id: 4,
        waktu: "16.00 - 22.00 WIB",
        kegiatan: "Panggung Kreativitas Ormawa Indonesia (mahasiswa) ",
        lokasi: "Lapangan Parkir Utara Gd Soetarjo",
        url:"https://maps.google.com/?cid=1493714162615523958"
      },
      {
        id:5,
        waktu:'18.30 - 21.00 WIB',
        kegiatan:'Gala Dinner (PT, Dosen pembina, dan Mitra)',
        lokasi:'Halaman Rektorat Universitas Jember',
        url:"https://maps.google.com/?cid=12226106197481831557"
      }
    ]);
  </script>