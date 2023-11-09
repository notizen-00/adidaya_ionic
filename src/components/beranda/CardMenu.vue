<template>
  <v-slide-group
    v-model="model"
    class="mt-10"
    selected-class="bg-info"
    mandatory
    hide-arrows
  >
    <v-slide-group-item
      v-for="(item, index) in menuItems"
      :key="index"
      v-slot="{ isSelected, toggle, selectedClass }"
    >
      <v-card
        color="white border border-grey"
        rounded="xl"
        :class="['ma-2 custom-shadow-card', selectedClass]"
        :elevation="selectedClass ? '3' : '0'"
        height="108"
        width="90"
        @click="toggle"
      >
        <div class="d-flex flex-column align-center justify-center p-3 mt-3">
          <div class="d-flex inline-block justify-center">
            <v-img
              min-width="30"
              :src="item.path"
              class=""
            ></v-img>
          </div>
          <div class="d-flex inline-block justify-center bottom-4 absolute">
            <span class="text-slate-300">{{ item.name }}</span>
          </div>
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>

  <component v-if="model === 0" :is="ListHotel" />
  <component v-if="model === 0" :is="ListHotelRekomendasi" />
  <component v-if="model === 1" :is="ListWarung" />
  <component v-if="model === 2" :is="ListOleh" />


  
 
</template>

<script setup>
import HotelSvg from "@/assets/img/hotel.svg";
import WarungSvg from "@/assets/img/room-service.svg";
import OlehSvg from "@/assets/img/basket-shopping-simple.svg";
import FasumSvg from "@/assets/img/archway.svg";
import ListHotel from "@/components/beranda/ListHotel.vue";
import ListHotelRekomendasi from "@/components/beranda/ListHotelRekomendasi.vue";
import ListWarung from "@/components/beranda/ListWarung.vue";
import ListOleh from '@/components/beranda/ListOleh.vue';
import {ref} from 'vue'
const model = ref(0);
const menuItems = [
  {
    name: 'Hotel',
    path: HotelSvg,
  },
  {
    name: 'Warung',
    path: WarungSvg,
  },
  {
    name: 'Oleh-oleh',
    path: OlehSvg,
  },
  {
    name: 'Fasum',
    path: FasumSvg,
  },
];


</script>

