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
            height="300"
            class="d-flex overflow-auto align-start"
          >
            <div @click="test" class="text-sm bg-scroll mt-5 ml-5 indent-4 mr-5 text-slate-500 font-sans">
                
            {{ n.text }}
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
    export default {
      data: () => ({
        length: 4,
        onboarding: 1,
        list:[
            {
              id:1,
              text:'Perjalanan Abdidaya dari tahun ke tahun adalah sebuah inisiatif dari Direktorat Pembelajaran dan Kemahasiswaan, Direktorat Jenderal Pendidikan Tinggi, Riset, dan Teknologi, Kemdikbudristek RI, yang memberikan kesempatan kepada mahasiswa melalui organisasi mahasiswa (Ormawa) untuk melakukan berbagai kegiatan pengabdian dan pemberdayaan masyarakat. Program ini bertujuan untuk meningkatkan kapasitas mahasiswa dan memberikan dampak positif pada lingkungan sekitar. Program ini awalnya disebut Program Penguatan Kapasitas Organisasi Kemahasiswaan (PPK Ormawa) dengan 16 topik pemberdayaan masyarakat. Ini merupakan perubahan dari program-program sebelumnya seperti Program Holistik Pembinaan dan Pemberdayaan Desa (PHP2D), Program Pengembangan Pemberdayaan Desa (P3D), dan Program Wira Desa.'  
            },{
               id:2,
               text:'Untuk menghargai para pelaksana dan pendukung kegiatan PPK Ormawa, Direktorat Jenderal Pendidikan Tinggi, Riset, dan Teknologi mengadakan program yang disebut Abdidaya Ormawa 2023. Abdidaya berasal dari kata "Abdi" yang berarti proses pengabdian diri dan "Daya" yang berarti kemampuan untuk mengatasi atau mencapai tujuan. Abdidaya pertama kali dilaksanakan pada tahun 2021 secara daring melalui platform zoom meeting.'
            },{
                id:3,
                text:'Pada tahun 2022, Abdidaya dilaksanakan secara luring di Kampus IPB Bogor dengan berbagai kegiatan, termasuk penilaian presentasi oleh berbagai kategori peserta. Abdidaya 2022 melibatkan Tim Pelaksana PPK, Ormawa Pendukung, Dosen Pendamping, dan Perguruan Tinggi sebagai support System.'
            },{
                id:4,
                text:'Pada tahun 2023, Abdidaya Ormawa memberikan wajah baru dengan rangkaian kegiatan yang berbeda, di Universitas Jember. Kegiatan ini adalah bentuk apresiasi untuk pelaksana PPK Ormawa yang melibatkan berbagai elemen seperti tim pelaksana, sistem pendukung organisasi kemahasiswaan, dosen pendamping, sistem pendukung perguruan tinggi, dan mitra. Abdidaya Ormawa 2023 diharapkan menjadi alternatif untuk menghargai kinerja yang baik dalam pengabdian masyarakat dan pemberdayaan, serta mendorong semangat mahasiswa dan Ormawa untuk berkontribusi positif dalam membangun desa dan meningkatkan kapasitas mahasiswa melalui organisasi kemahasiswaan.'
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