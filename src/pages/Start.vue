<template>
    <div>

       
            <v-sheet
              v-if="model == 0"
              height="600"
            
            >
              <div class="d-flex mt-20 align-center justify-center">
                <v-img
                :src="Section1"
                width="200"
                height="200"
                >
                </v-img>
              </div>
              <div class="d-flext text-center align-center mt-20 justify-center">
                <p class="text-large font-mono font-bold">Penginapan dan Fasilitas Umum </p>
                
              </div>
              <div class="d-flext w-2/3 mx-auto text-center align-center mt-5 justify-center">
                <p class="mt-2 text-xs mx-auto">
                    Temukan penginapan dan fasilitas umum
                    terdekat selama Anda di Jember
                </p>
              </div>
            </v-sheet>
            <v-sheet
            v-if="model == 1"
            height="600"
          
          >
            <div class="d-flex mt-20 align-center justify-center">
              <v-img
              :src="Section2"
              width="200"
              height="200"
              >
              </v-img>
            </div>
            <div class="d-flext text-center align-center mt-20 justify-center">
              <p class="text-large font-mono font-bold">Makanan dan Oleh-oleh </p>
              
            </div>
            <div class="d-flext w-2/3 mx-auto text-center align-center mt-5 justify-center">
              <p class="mt-2 text-xs mx-auto">
                Nikmati masakan terlezat di Jember dan temukan pusat oleh-oleh untuk keluarga di rumah
              </p>
            </div>
          </v-sheet>

          <v-sheet
          v-if="model == 2"
          height="600"
        
        >
          <div class="d-flex mt-20 align-center justify-center">
            <v-img
            :src="Section3"
            width="200"
            height="200"
            >
            </v-img>
          </div>
          <div class="d-flext text-center align-center mt-20 justify-center">
            <p class="text-large font-mono font-bold">Abdidaya Ormawa 2023</p>
            
          </div>
          <div class="d-flext w-2/3 mx-auto text-center align-center mt-5 justify-center">
            <p class="mt-2 text-xs mx-auto">
                Akses informasi lengkap perhelatan
                Abdidaya Ormawa 2023
            </p>
          </div>
        </v-sheet>
       
         

        <v-sheet
        class="d-flex justify-around w-full"
        elevation="0"
        >
        <v-btn
        class=""
        variant="text"
        @click="model = 2"
        :disabled="model == 2"
        >
            <span class="text-xs text-capitalize">Lewati</span>
        </v-btn>
        
        <v-slide-group
          v-model="model"
          class="w-1/2 ml-10"
          mandatory
          selected-class="bg-info"
          show-arrows
          rounded="xl"
        >
        <v-slide-group-item
            v-for="n in 3"
            :key="n"
            v-slot="{ isSelected, toggle, selectedClass }"
          >
            
            <v-card
              color="grey-lighten-1"
              rounded="xl"
              :class="['ma-3', selectedClass]"
              height="10"
              width="15"
              @click="toggle"
            >
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon
                    v-if="isSelected"
                    color="white"
                    size="48"
                    icon="mdi-close-circle-outline"
                  ></v-icon>
                </v-scale-transition>
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>

      
        <v-btn
        class=""
        icon="fas fa-arrow-right"
        size="x-small"
        @click="toggleModel"
        >
            
        </v-btn>
      
       
      </v-sheet>
    </div>
        
</template>
<script setup>
import Section1 from '@/assets/img/section1.png';
import Section2 from '@/assets/img/section2.png';
import Section3 from '@/assets/img/section3.png';


import { ref } from 'vue';
import { useRouter } from 'vue-router';

const model = ref(0);
const router = useRouter();

const toggleModel = () => {
  if (model.value === 2) {
    router.push('/beranda');
  } else {
    model.value++;
  }
};


</script>