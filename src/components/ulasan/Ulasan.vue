<template>

    <v-sheet
    class="mx-auto mt-4"
    elevation="8"
    max-width="800"
    height="500"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-slate-300"
      :show-arrows="false"
    >
      <v-slide-group-item
        v-for="n in getDetailHotel.reviews"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          color="white"
          :class="['ma-1', selectedClass]"
          height="350"
          rounded="xl"
          width="250"
          @click="toggle"
        >
          <v-card-title>
            <v-avatar :image="n.profile_photo_url"></v-avatar> <span class="text-xs">{{ n.author_name }}</span> 
          </v-card-title>
          <v-card-subtitle>
            <v-icon icon="fas fa-star" class="ml-2" color="yellow" size="xs" v-for="i in n.rating"></v-icon> <small>({{ n.rating }})</small>
            <br>
            <v-icon icon="fas fa-history" size="sm"></v-icon> <span class="text-xs">{{ n.relative_time_description }}</span> 
          </v-card-subtitle>
          <div class="d-flex mt-10 ml-3 mr-3 justify-center">
            <p class="text-xs text-start">{{ n.text }}</p>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet
        v-if="model != null"
        height="200"
      >
        <div class="d-flex fill-height align-center justify-center">
          <h3 class="text-h6">
            Selected {{ model }}

            
          </h3>
         
        </div>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import {ref,inject} from 'vue'

const store = inject('store')
const model = ref(null)
const {getDetailHotel} = storeToRefs(store.hotelStore)




</script>