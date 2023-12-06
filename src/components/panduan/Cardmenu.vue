<template>
    <!-- <v-slide-group
      v-model="model"
      class="mt-3 pa-4"
      selected-class="bg-info"
      mandatory
      center-active
      hide-arrows
    >
      <v-slide-group-item
        v-for="(item, index) in menuItems"
        :key="index"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          color="blue border border-grey"
          rounded="xl"
          variant="tonal"
          :class="['ma-2 custom-shadow-card bg-slate-100', selectedClass]"
          :elevation="selectedClass ? '3' : '0'"
          height="148"
          width="290"
          @click="toggle"
        >
          <div class="d-flex flex-column align-center mt-10 justify-center">
            <div class="d-flex align-center justify-center">

               <span :class="isSelected ? 'text-white font-extrabold text-2xl':'text-slate-400 text-2xl font-extrabold'"> {{ item.name }}</span>            
            
            </div>
            <div class="d-flex mt-2 justify-center">
                <span :class="isSelected ? 'text-white font-sans':'text-slate-400 font-sans'">{{ item.path }}</span>
              </div>           
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
    <component v-if="model === 0" :is="BAB1" />
    <component v-if="model === 1" :is="BAB2" />
    <component v-if="model === 2" :is="BAB3" />
    <component v-if="model === 3" :is="BAB1" /> -->

    <v-card
    class="mx-auto my-8 mt-48"
    max-width="344"
    variant="tonal"
    color="blue"
    title="Buku Juknis"
    href="https://unej.ac.id/wp-content/uploads/2023/10/Panduan-Abdidaya-Ormawa-2023.pdf"
    target="_blank"
    rel="noopener"
  >
  <template #prepend>
    <v-icon color="blue">fa-duotone fa-book-open-reader</v-icon>
  </template>
  <template #append>
    <i class="fa-duotone fa-arrow-up-right-from-square"></i>
  </template>
</v-card>

  <v-card
    class="mx-auto my-8"
    max-width="344"
    variant="tonal"
    color="blue"
    title="Buku Saku"
 
    append-icon="fas fa-link"
    href="https://abdidaya.unej.ac.id/images/Buku-Saku-Abdidaya-211123.pdf"
    target="_blank"
    rel="noopener"
  >
  <template #prepend>
    <v-icon color="blue">fa-duotone fa-book-open-reader</v-icon>
  </template>
  <template #append>
    <i class="fa-duotone fa-arrow-up-right-from-square"></i>
  </template>
</v-card>

 
   
  </template>
  
  <script setup>

import BAB1 from '@/components/panduan/BAB1/view.vue'
import BAB2 from '@/components/panduan/BAB2/view.vue'
import BAB3 from '@/components/panduan/BAB3/view.vue'
import StepperMenu from '@/components/panduan/StepperMenu.vue';
  import {ref} from 'vue'
  const model = ref(0);
  const menuItems = [
    {
      name: 'BAB 1',
      path: 'PROFIL UNIVERSITAS JEMBER',
    },
    {
      name: 'BAB 2',
      path: 'ABDIDAYA ORMAWA 2023 ',
    },
    {
      name: 'BAB 3',
      path: 'TEMA ABDIDAYA 2023',
    },
    {
      name: 'BAB 4',
      path: 'RANGKAIAN KEGIATAN',
    },
  ];
  
  
  </script>
  
  
  