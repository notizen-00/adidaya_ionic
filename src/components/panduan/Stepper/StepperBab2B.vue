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
              text:'ABDIDAYA ORMAWA 2023 adalah sebuah inisiatif dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemdikbudristek) melalui Direktorat Pembelajaran dan Kemahasiswaan, Direktorat Jenderal Pendidikan Tinggi, Riset, dan Teknologi, untuk terus meningkatkan kualitas organisasi kemahasiswaan (Ormawa) di Perguruan Tinggi. Tujuan dari program ini adalah untuk meningkatkan soft skills mahasiswa dan menghasilkan mahasiswa yang memiliki karakter pelajar Pancasila dan kompetensi abad 21.'  
            },{
               id:2,
               text:'Program Penguatan Kapasitas (PPK) Ormawa menjadi salah satu wadah penting dalam peningkatan kapasitas dan kompetensi Ormawa dalam menjalankan kegiatan pemberdayaan masyarakat di berbagai desa dan kelurahan di seluruh Indonesia. Terdapat 16 topik pemberdayaan masyarakat yang diselenggarakan pada tahun 2023, yang mencakup berbagai aspek seperti wirausaha, pertanian cerdas, pendidikan perempuan, digitalisasi desa/kelurahan, konservasi lingkungan, manajemen sampah, kesehatan desa/kelurahan, dan banyak lagi.'
            },{
                id:3,
                text:'ABDIDAYA ORMAWA 2023 merupakan bentuk apresiasi tertinggi untuk para pelaksana Ormawa dan semua unsur pendukung yang telah memberikan dampak positif dalam pembangunan masyarakat. Kegiatan ini memberikan penghargaan kepada tim pelaksana, sistem pendukung Ormawa, sistem pendukung perguruan tinggi, dosen pendamping, dan sistem pendukung mitra keberlanjutan (Desa Mitra dan/atau Mitra Kelembagaan Eksternal). Universitas Jember menjadi tuan rumah penyelenggaraan ABDIDAYA ORMAWA 2023.'
            },{
                id:4,
                text:'Rangkaian kegiatan ABDIDAYA ORMAWA 2023 berlangsung dari tanggal 7 hingga 9 Desember 2023 di Universitas Jember dan mencakup pembukaan, kegiatan utama, kegiatan penunjang, dan penutupan. Kegiatan utama meliputi penilaian output, pameran poster, video, dan produk. Kegiatan penunjang melibatkan Sarasehan Ormawa, Forum Pengabdian Tingkat Nasional, serta Seminar dan Lokakarya (Semiloka) Nasional. Penghargaan akan diumumkan pada acara penutupan dan Malam Penganugerahan ABDIDAYA ORMAWA 2023. Selain penghargaan, kegiatan ini juga menentukan nominator kegiatan PPK Ormawa untuk Anugerah Diktiristek tahun 2023.'
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