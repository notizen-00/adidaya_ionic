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
            <!-- <v-img
              min-width="30"
              :src="item.path"
              class="svg-image"
            ></v-img> -->

            <svg v-if="item.name == 'Hotel'" xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40">
              <path id="hotel" d="M25.564.013h-15a7.508,7.508,0,0,0-7.5,7.5v25a7.509,7.509,0,0,0,7.5,7.5H13.9a.834.834,0,0,0,.833-.833V28.325H21.4V39.18a.834.834,0,0,0,.833.833h3.333a7.509,7.509,0,0,0,7.5-7.5v-25A7.508,7.508,0,0,0,25.564.013Zm5.833,32.5a5.84,5.84,0,0,1-5.833,5.833h-2.5V28.325h2.393a.833.833,0,0,0,0-1.667h-15a.833.833,0,1,0,0,1.667h2.607V38.346h-2.5a5.84,5.84,0,0,1-5.833-5.833v-25A5.84,5.84,0,0,1,10.564,1.68h15A5.84,5.84,0,0,1,31.4,7.513ZM12.957,20.825a.834.834,0,0,1-.833.833H10.457a.833.833,0,1,1,0-1.667h1.667A.834.834,0,0,1,12.957,20.825Zm13.333,0a.834.834,0,0,1-.833.833H23.791a.833.833,0,0,1,0-1.667h1.667A.834.834,0,0,1,26.291,20.825ZM12.957,7.491a.834.834,0,0,1-.833.833H10.457a.833.833,0,1,1,0-1.667h1.667A.834.834,0,0,1,12.957,7.491Zm13.333,0a.834.834,0,0,1-.833.833H23.791a.833.833,0,0,1,0-1.667h1.667A.834.834,0,0,1,26.291,7.491ZM12.957,14.158a.834.834,0,0,1-.833.833H10.457a.833.833,0,1,1,0-1.667h1.667A.834.834,0,0,1,12.957,14.158Zm13.333,0a.834.834,0,0,1-.833.833H23.791a.833.833,0,0,1,0-1.667h1.667A.834.834,0,0,1,26.291,14.158Zm-6.667,6.667a.834.834,0,0,1-.833.833H17.124a.833.833,0,1,1,0-1.667h1.667A.834.834,0,0,1,19.624,20.825Zm0-13.333a.834.834,0,0,1-.833.833H17.124a.833.833,0,1,1,0-1.667h1.667A.834.834,0,0,1,19.624,7.491Zm0,6.667a.834.834,0,0,1-.833.833H17.124a.833.833,0,1,1,0-1.667h1.667A.834.834,0,0,1,19.624,14.158Z" transform="translate(-3.064 -0.013)" :fill="isSelected ? '#fff' : '#a9a9a9'"/>
            </svg>

            <svg v-if="item.name == 'Warung'" xmlns="http://www.w3.org/2000/svg" width="30" height="25.011" viewBox="0 0 30 25.011">
              <path id="room-service" d="M28.75,23.5V21A13.762,13.762,0,0,0,16.25,7.316V5.656a2.5,2.5,0,1,0-2.5,0v1.66A13.763,13.763,0,0,0,1.25,21v2.5a1.25,1.25,0,0,0,0,2.5h27.5a1.25,1.25,0,0,0,0-2.5ZM3.75,21C4.341,6.085,25.664,6.1,26.25,21v2.5H3.75Z" transform="translate(0 -0.991)" :fill="isSelected ? '#fff' : '#a9a9a9'"/>
            </svg>

            <svg v-if="item.name == 'Oleh-oleh'" xmlns="http://www.w3.org/2000/svg" width="30" height="29.952" viewBox="0 0 30 29.952">
              <path id="basket-shopping-simple" d="M29.06,11.274a3.737,3.737,0,0,0-2.834-1.286h-.112a11.238,11.238,0,0,0-22.336,0H3.715a3.731,3.731,0,0,0-3.708,4.27l1.323,9.264a7.52,7.52,0,0,0,7.416,6.43H21.194a7.52,7.52,0,0,0,7.416-6.43l1.323-9.264A3.761,3.761,0,0,0,29.06,11.274ZM14.952,2.5A8.756,8.756,0,0,1,23.6,9.988H6.3A8.756,8.756,0,0,1,14.952,2.5Zm12.51,11.411-1.323,9.264a5.01,5.01,0,0,1-4.944,4.282H8.747A5.021,5.021,0,0,1,3.8,23.172L2.479,13.908a1.269,1.269,0,0,1,.287-1,1.243,1.243,0,0,1,.949-.437h22.51a1.224,1.224,0,0,1,.936.424,1.212,1.212,0,0,1,.287,1Z" transform="translate(0.029)" :fill="isSelected ? '#fff' : '#a9a9a9'"/>
            </svg>
            
            <svg v-if="item.name == 'Fasum'" xmlns="http://www.w3.org/2000/svg" width="30" height="27.486" viewBox="0 0 30 27.486">
              <path id="archway" d="M28.738,25.988H27.488V7.764l1.623-1.622A3.012,3.012,0,0,0,26.98,1H3.007A3.012,3.012,0,0,0,.877,6.142L2.5,7.764V25.988H1.251a1.249,1.249,0,1,0,0,2.5h5A3.753,3.753,0,0,0,10,24.739V18.492a5,5,0,1,1,10,0v6.247a3.753,3.753,0,0,0,3.748,3.748h5a1.249,1.249,0,1,0,0-2.5ZM2.533,3.816A.489.489,0,0,1,3.007,3.5H26.981a.514.514,0,0,1,.364.877L25.722,6H4.267L2.644,4.376a.49.49,0,0,1-.111-.56ZM22.491,24.739V18.492a7.5,7.5,0,0,0-14.993,0v6.247a1.251,1.251,0,0,1-1.249,1.249H5V8.5H24.99V25.988H23.74A1.251,1.251,0,0,1,22.491,24.739Z" transform="translate(0.006 -1.001)" :fill="isSelected ? '#fff' : '#a9a9a9'"/>
            </svg>
            
            
            
          </div>
          <div class="d-flex inline-block justify-center bottom-4 absolute">
            <span :class="isSelected ? 'text-white':'text-slate-300'">{{ item.name }}</span>
          </div>
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>

  <component v-if="model === 0" :is="ListHotel" />
  <component v-if="model === 0" :is="ListHotelRekomendasi" />
  <component v-if="model === 1" :is="ListWarung" />
  <component v-if="model === 2" :is="ListOleh" />
  <component v-if="model === 3" :is="ListFasum" />
 
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
import ListFasum from '@/components/beranda/ListFasum.vue';
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


