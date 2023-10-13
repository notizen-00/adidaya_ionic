<template>
    <div>

        <div class="font-extrabold text-base mt-5 ">
            Hotel Terdekat
        </div>
        <div class="mt-2 d-flex w-full">
        <v-select
        v-model="tipe_select"
        variant="outlined"
        label="Tipe"
        density="compact"
        class="w-1/2"
        :items="tipe_items"
        item-title="title"
        item-value="isi"
        @update:modelValue="changeTipe"
        >
        <template v-slot:prepend>
          <v-icon color="blue">fas fa-filter</v-icon>
        </template>
        </v-select>

        <v-select
        v-model="jarak_select"
        class="w-1/2 ml-2"
        variant="outlined"
        label="jarak"
        :items="jarak_items"
        item-title="title"
        item-value="isi"
        density="compact"
        @update:modelValue="changeJarak"
        >

        </v-select>

        </div>
        <v-slide-group
        v-model="model"
        class="mt-2"
        selected-class="bg-white"
        mandatory
        hide-arrows
      >
        <v-slide-group-item
          v-for="(n, index) in getHotel"
          :key="n"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
        <router-link
        :to="isSelected ? `/detail_hotel/${n.placeId}` : `/detail_hotel/${n.placeId}`" 
        @click.prevent="updateSelectedSlideIndex(index)"
        >
          <v-card
            color="white border border-grey"
            rounded="xl"
            :class="['ma-2', selectedClass]"
            :elevation="selectedClass ? '3':'0'"
            height="250"
            width="200"
            @click="toggle"
          >
          <div class="d-flex flex-column align-center justify-center p-3 mt-3">
            
            <div class="absolute right-2">
              <v-icon color="yellow" size="15">fas fa-star</v-icon>
               <span class="text-xs text-white ml-2">{{ n.rating }}</span>
            </div>
            <div class="absolute -z-10 " >
              <v-img
                cover
                :width="500"
                :height="500"
                :src="getPhotoUrl(n.foto)"
              ></v-img>
             

            </div>
            <div class="d-flex inline-block justify-center bottom-4 absolute"> 
              <span class="text-white line-clamp-1 text-center">{{ n.nama_hotel }}</span>
              <!-- <v-btn
              @click.prevent="getDetail(n.placeId)"
              >
              Get Foto
              </v-btn> -->
            </div>
           
          </div>
          </v-card>
        </router-link>
        </v-slide-group-item>
      </v-slide-group>
          
      <!-- <v-carousel
    cycle
    hide-delimiters
    height="300"
    show-arrows
   
  >
    <v-carousel-item
      v-for="(item, index) in getFotoHotel"
      :key="index"
    >
      <v-sheet
        color="item.color"
        height="300"
        class="d-flex flex-column align-center justify-center"
      >
        <v-img
          :src="getPhotoUrl(item.photo_reference)"
          cover
          min-height="200"
          min-width="200"
        ></v-img>
     
      </v-sheet>
    </v-carousel-item>
  </v-carousel> -->
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { inject,onMounted,ref, watch } from 'vue'
import { Preferences } from '@capacitor/preferences';
const store = inject('store')

const { getHotel,getFotoHotel,getTipe,getJarak,isMountedFirst,getSlide } = storeToRefs(store.hotelStore)
const model = getSlide.value;


const tipe_select = ref({ title: getTipe.value, isi: getTipe.value });
const tipe_items = ref([
  { title: 'Hotel', isi: 'Hotel' },
  { title: 'Semua', isi: 'Semua' },
]);

const jarak_select = ref({ title: getJarak.value+' Km', isi: getJarak.value })
const jarak_items = ref([
  { title: '1 km', isi: 1 },
  { title: '3 km', isi: 3 },
]);

const changeJarak = async() => {

  store.hotelStore.setJarak(jarak_select.value)

  const param = {
      jarak: getJarak.value,
      keyword: getTipe.value,
      type: "lodging"
    };
   await store.hotelStore.fetchHotel(param);

}

const updateSelectedSlideIndex = (index) => {
  store.hotelStore.setSlide(index);

  console.log(getSlide.value)
};


const changeTipe = async() => {

  store.hotelStore.setTipe(tipe_select.value)

  const param = {
      jarak: getJarak.value,
      keyword: getTipe.value,
      type: "lodging"
    };
   await store.hotelStore.fetchHotel(param);

}

const getPhotoUrl = (photoReference) => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=900&photoreference=${photoReference}&key=AIzaSyBeeo9yBypCnU7vRHINzcgKfFhS-huXAgo`;
};

const getDetail = async(placeId) => {
    await store.hotelStore.fetchDetail(placeId)

}
onMounted( async () => {
  
  if (!isMountedFirst) {

    store.hotelStore.setMountedFirst()
    // Lakukan inisialisasi atau permintaan API hanya pada saat first mount
    const param = {
      jarak: getJarak.value,
      keyword: getTipe.value,
      type: "lodging"
    };
    await store.hotelStore.fetchHotel(param);
  }else{
    console.log('sudah termount')
  }
});

</script>
