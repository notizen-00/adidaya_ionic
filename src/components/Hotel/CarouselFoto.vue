<template>

    <v-carousel
    cycle
    height="300"
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(slide, i) in getFotoHotel"
      :key="i"
    >
      <v-sheet
        height="100%"
      >
        <div class="relative">
            <v-img
            class="absolute"

            cover
            :src="getPhotoUrl(slide.photo_reference)"
            >

            </v-img>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <v-card

  class="w-full "
>
  <template v-slot:loader="{ isActive }">
    <v-progress-linear
      :active="isActive"
      color="deep-purple"
      height="4"
      indeterminate
    ></v-progress-linear>
  </template>
  <v-card-item>
    <v-card-title><span class="line-clamp-3">{{ getDetailHotel.name }}</span></v-card-title>

    <v-card-subtitle>
      <v-icon
        color="error"
        icon="fas fa-rating"
        size="small"
      ></v-icon>
    </v-card-subtitle>
  </v-card-item>

  <v-card-text>
    <v-row
      align="center"
      class="mx-0"
    >
    <v-icon color="yellow" class="ml-2" v-for="i in Math.round(getDetailHotel.rating)" :key="i">
        fas fa-star
      </v-icon>

      <div class="text-grey ms-4">
        {{ getDetailHotel.rating ? getDetailHotel.rating : '-' }} ({{ getDetailHotel.user_ratings_total }})
      </div>
    </v-row>

    <div class="my-4 text-subtitle-1">
      <v-icon color="green"> fa-thin fa-location-dot</v-icon> • {{ getDetailHotel.vicinity }}
    </div>
    
    <span class="text-xs">
     Status : <v-chip size="x-small" color="info">{{ getDetailHotel.current_opening_hours ? 'Buka':'Tutup' }}</v-chip>
    </span>
    <br>
    <h2 class="text-xs ml-3 mt-4 mr-3 text-center">
        <blockquote>{{ getDetailHotel.editorial_summary ? getDetailHotel.editorial_summary.overview : 'Tidak ada deskripsi pada tempat ini' }}</blockquote>
    </h2>


  </v-card-text>

  <v-divider class="mx-4 mb-1"></v-divider>

  <v-card-title>Jam Buka </v-card-title>
  


</v-card>



</template>
<script setup>
import { storeToRefs } from 'pinia'
import {inject,ref} from 'vue'

const store = inject('store')

const { getFotoHotel,getDetailHotel } = storeToRefs(store.hotelStore)


const getPhotoUrl = (photoReference) => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=900&photoreference=${photoReference}&key=AIzaSyBeeo9yBypCnU7vRHINzcgKfFhS-huXAgo`;
};


</script>