<template>
  <v-skeleton-loader
      v-if="isLoading"
      class="w-full"
      height="200"
      type="card,"
    >
  </v-skeleton-loader>


  <v-skeleton-loader
  v-if="isLoading"
  class=" mt-10 mx-auto"
  max-height="900"
  type="list-item-avatar-two-line,list-item-two-line"
  >
  </v-skeleton-loader>
  <v-skeleton-loader
  v-if="isLoading"
  class="w-3/4 mx-auto"
  max-height="900"
  type="text"
  >
  </v-skeleton-loader>

  
    <v-carousel
    v-if="isLoading == false" class="w-full"
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
  v-if="isLoading == false" 
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
      <v-icon color="yellow" size="15" class="ml-2" v-for="i in Math.round(getDetailHotel.rating ? getDetailHotel.rating : 0)" :key="i">
        fas fa-star
      </v-icon>

      <div class="text-grey ms-4">
        {{ getDetailHotel.rating ? getDetailHotel.rating : '-' }} ({{ getDetailHotel.user_ratings_total ? getDetailHotel.user_ratings_total : '-' }})
      </div>
    </v-row>

    <div class="my-4 text-subtitle-1">
      <v-icon size="17" color="green"> fa-thin fa-location-dot</v-icon> • {{ getDetailHotel.vicinity ? getDetailHotel.vicinity : '-' }}
    </div>
    <!-- formatted_phone_number -->
    <div class="-mt-6 mb-5 text-subtitle-1">
      <v-icon size="14" color="red"> fa-thin fa-mobile</v-icon>  <span class="text-sm text-slate-600">{{ getDetailHotel.formatted_phone_number ? getDetailHotel.formatted_phone_number : '-' }}</span>
    </div>

    
    <span class="text-xs">
     Status : <v-chip size="x-small" color="info">{{ getDetailHotel.current_opening_hours ? 'Buka':'Tutup' }}</v-chip>
    </span>
    <br>
    <h2 class="text-xs ml-3 mt-4 mr-3 text-center">
        <blockquote>{{ getDetailHotel.editorial_summary ? getDetailHotel.editorial_summary.overview : 'Tidak ada deskripsi pada tempat ini' }}</blockquote>
    </h2>


  </v-card-text>

  <v-expansion-panels>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <span class="text-slate-500">Jam Operasional</span> 
      <template v-slot:actions="{ expanded }">
        <v-icon :color="!expanded ? 'teal' : ''" :icon="expanded ? 'fas fa-minus' : 'fas fa-plus'"></v-icon>
      </template>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-list lines="one" density="compact" >
        <v-list-item
        class="-py-30"
          v-for="n in getDetailHotel.current_opening_hours ? getDetailHotel.current_opening_hours.weekday_text : 7"
          :key="n"
        >
        <div class="text-sm -py-20">{{ Number.isInteger(n) ? '-' : n  }}</div>
      </v-list-item>
      </v-list>
    </v-expansion-panel-text>
  </v-expansion-panel>
  </v-expansion-panels>

  <v-container>
    <div class=" text-h6">
     <v-icon color="info" class="mr-3" size="18" >fas fa-message </v-icon> <u>Ulasan</u>
      
    </div>
    <Ulasan></Ulasan>
    
  </v-container>

</v-card>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import {inject,ref,onMounted} from 'vue'
import Ulasan from '@/components/ulasan/Ulasan.vue';
const store = inject('store')
const isLoading = ref(true)
const expanded = ref(false)
const { getFotoHotel,getDetailHotel } = storeToRefs(store.hotelStore)

const test = () =>{
    isLoading.value = !isLoading.value;
}
const getPhotoUrl = (photoReference) => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=900&photoreference=${photoReference}&key=AIzaSyBeeo9yBypCnU7vRHINzcgKfFhS-huXAgo`;
};

onMounted(() => {
  setTimeout(() => {
    store.hotelStore.setNavigation(getDetailHotel.value.url)

    isLoading.value = false
  }, 1000)
})


</script>