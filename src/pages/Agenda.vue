<template>

    <v-layout class="rounded">
        <v-app-bar color="#004F89">
            <div class="w-full m-2">
                <h1 class="font-extrabold font-sans  text-white line-clamp-2">Jadwal & Agenda<br>
                    Abdidaya Ormawa 2023</h1>
            </div>
        </v-app-bar>
    <v-container>

    <div class=" mt-20 mb-20">
      
    <p class="text-large font-bold pt-5 -mb-5">
       <v-icon color="red" size="small">fas fa-calendar-alt</v-icon> Kamis, 7 Desember 2023  <v-btn class="ml-3 w-1/4" color="blue" rounded="xl" size="small">Hari 1</v-btn>
    </p>

    <LineBreak color="blue" fill="#1AA7FF"/>
    <Hari1></Hari1>
    <p class="text-large font-bold mt-10 -mb-5">
        <v-icon color="red" size="small">fas fa-calendar-alt</v-icon> Jumat, 8 Desember 2023  <v-btn class="ml-3 w-1/3" color="blue" rounded="xl" size="small">Hari 2</v-btn>
    </p>
    <LineBreak color="blue" fill="#1AA7FF"/>
    <Hari2></Hari2>
    <p class="text-large font-bold mt-10 -mb-5">
        <v-icon color="red" size="small">fas fa-calendar-alt</v-icon> Sabtu, 9 Desember 2023  <v-btn class="ml-3 w-1/3" color="blue" rounded="xl" size="small">Hari 3</v-btn>
    </p>
    <LineBreak color="blue" fill="#1AA7FF"/>
    <Hari3></Hari3>
    <p class="text-large font-bold mt-10 -mb-5">
        <v-icon color="red" size="small">fas fa-calendar-alt</v-icon> Minggu, 10 Desember 2023  <v-btn class="ml-3 w-1/4" color="blue" rounded="xl" size="small">Hari 4</v-btn>
    </p>
    <LineBreak color="blue" fill="#1AA7FF"/>
    <Hari4></Hari4>
    </div>
    <bottom-navigation></bottom-navigation>
    </v-container>
    </v-layout>
</template>

<script setup>
import LineBreak from '@/components/Agenda/LineBreak.vue'
 import BottomNavigation from '@/components/BottomNavigation.vue'
import Hari1 from '../components/JadwalKegiatan/Hari1.vue'
import Hari2 from '../components/JadwalKegiatan/Hari2.vue'
import Hari3 from '../components/JadwalKegiatan/Hari3.vue'
import Hari4 from '../components/JadwalKegiatan/Hari4.vue'

</script>