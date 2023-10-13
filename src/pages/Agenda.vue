<template>
    <v-container>
    <div class="w-full d-flex justify-between mt-5">
        <div class="w-full">
            <h1 class="font-extrabold font-sans  text-slate-800 line-clamp-2">Jadwal & Agenda<br>
                Abdidaya Ormawa 2023</h1>
        </div>
    </div>
    <!-- <v-divider
    :thickness="3"
    class="border-opacity-75 border-blue-500 mt-5"
    color="info"
  ></v-divider> -->
    <div class=" mt-10 ">
    <p class="text-h5">
        Minggu, 5 Nov  <v-btn class="ml-3 w-1/3" color="blue" rounded="xl" size="small">day 1</v-btn>
    </p>

    <LineBreak color="blue" fill="#1AA7FF"/>

    <div class="d-flex justify-between h-36  mt-10 " >
        <div class="d-flex justify-start items-center w-1/4 ">
            <div class="text-slate-300 font-bold text-h4">
              12.00
            </div>
          </div>
        <div class="w-2/3">
            <v-card
            min-height="150"
            :width="190" 
            rounded="xl"
            variant="tonal"
            color="warning"
            >   
            <v-card-item class="m-2">
                Health transformation in
                the cognitive era
            </v-card-item>
            </v-card>
        </div>

    </div>

    <LineBreak color="orange" fill="#F6A52B"/>
      
    </div>
    <bottom-navigation></bottom-navigation>
    </v-container>
</template>

<script setup>
import LineBreak from '@/components/Agenda/LineBreak.vue'
 import BottomNavigation from '@/components/BottomNavigation.vue'
</script>