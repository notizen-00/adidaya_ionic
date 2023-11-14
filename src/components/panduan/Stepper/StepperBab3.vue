<template>
    <v-card
      color="#F3FCFF"
      rounded="0"
    >
      <v-window v-model="onboarding">
        <v-window-item
          v-for="n in list"
          :key="`card-${n.id}`"
          :value="n.id"
        >
          <v-card
            height="400"
            class="d-flex overflow-auto align-start "
          >
            <div @click="test" class="text-sm  bg-scroll mt-5 ml-5 indent-4 mr-5 text-slate-500 font-sans">
                <img
                height="200"
                class="mb-10"
                :src="n.image"
                />
            <blockquote> {{ n.text }} </blockquote>

         
            </div>
          </v-card>
        </v-window-item>
      </v-window>
  
      <v-card-actions class="justify-space-between">
        <v-btn
          variant="plain"
          icon="fas fa-arrow-left"
          color="blue"
          @click="prev"
        ></v-btn>
        <v-item-group
          v-model="onboarding"
          class="text-center"
          mandatory
        >
          <v-item
            v-for="n in length"
            :key="`btn-${n}`"
            v-slot="{ isSelected, toggle }"
            :value="n"
          >
            <v-btn
              :variant="isSelected ? 'outlined' : 'tonal'"
              color="blue"
              rounded="xl"
              size="15"
              @click="toggle"
            ></v-btn>
          </v-item>
        </v-item-group>
        <v-btn
          variant="plain"
          icon="fas fa-arrow-right"
          color="blue"
          @click="next"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>

  import LogoAbdi from '@/assets/img/logo-abdidaya.png'
  import Maskot from '@/assets/img/maskot-abdidaya.png'
    export default {
      data: () => ({
        length: 4,
        onboarding: 1,
        list:[
            {
              id:1,
              text:'Tema kegiatan ABDIDAYA ORMAWA 2023 yang diusung adalah “Penguatan Kapasitas  Organisasi Kemahasiswaan dalam Menumbuhkan Semangat Kepemimpinan  Berlandaskan Pancasila Demi Mewujudkan Ormawa kuat, Desa Unggul, dan Indonesia  Maju”',
              image:''
            },{
               id:2,
               text:'Logo kegiatan ABDIDAYA ORMAWA 2023 menjadi ikon utama yang bersifat tetap dan  menjadi acuan pada kegiatan ABDIDAYA ORMAWA 2023 selanjutnya, sedangkan penulisan  kata ABDIDAYA ORMAWA 2023 dan tahun penyelenggaraan dapat dikreasikan sesuai  dengan penyelenggara pada tahun tersebut. Berikut logo ABDIDAYA ORMAWA 2023 tahun  2023 beserta filosofinya:',
               image:LogoAbdi  
            },{
                id:3,
                text:'Maskot ABDIDAYA ORMAWA 2023 dengan Sebutan ”JEMBARA” yang menggambarkan  kekuatan dan keanggunan Macan Raung dengan sentuhan elemen Jember Fashion Carnival  dan ikoniknya tembakau.',
                image:Maskot
            },{
                id:4,
                image:'',  
                text:'Lagu Mars ABDIDAYA ORMAWA 2023 dengan Judul ”ABDIDAYA UNTUK NEGERI” yang  menggambarkan generasi bangsa yang memiliki integritas, dedikasi, dan kepemimpinan yang  tinggi pada negara Indonesia Jaya'
            }
        ]
      }),
  
      methods: {
        next () {
          this.onboarding = this.onboarding + 1 > this.length
            ? 1
            : this.onboarding + 1
        },
        prev () {
          this.onboarding = this.onboarding - 1 <= 0
            ? this.length
            : this.onboarding - 1
        },
        test(){
            // alert('test')
        }
      },
    }
  </script>