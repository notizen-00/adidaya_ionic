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
        length: 5,
        onboarding: 1,
        list:[
            {
              id:1,
              text:'Cikal bakal Universitas Jember bermula dari gagasan Dr. R. Achmad,  bersama R. Th. Soengedi dan R. M. Soerachman, yang ingin mendirikan  perguruan tinggi di Jember. Untuk mewujudkan cita-cita mereka, pada  tanggal 1 April 1957, ketiganya membentuk Panitia Triumviraat dengan Dr.  R. Achmad sebagai Ketua, R. Th. Soengedi sebagai Penulis, dan R. M.  Soerachman sebagai Bendahara. Pada tanggal 5 Oktober 1957, Panitia  Triumviraat ini mendirikan Yayasan Universitas Tawang Alun, yang  kemudian mendirikan universitas swasta di Jember dengan nama Universitas  Tawang Alun, disingkat UNITA.'  
            },{
               id:2,
               text:'Bupati Jember saat itu, R. Soedjarwo, yang juga seorang nasionalis,  memberikan dukungan penuh kepada ketiga tokoh nasional tersebut. Usaha  mereka yang dimulai sejak tahun 1957 akhirnya berhasil, dan Universitas  Negeri Djember didirikan berdasarkan Surat Keputusan Menteri PTIP No.  151 Tahun 1964 tanggal 9 Nopember 1964.'
            },{
                id:3,
                text:'Pada awal berdirinya pada tahun 1964, Universitas Negeri Djember,  disingkat UNEJ, memiliki lima fakultas, yaitu Fakultas Hukum di Jember  dengan cabang di Banyuwangi, Fakultas Sosial dan Politik, Fakultas  Pertanian di Jember, Fakultas Ekonomi, dan Fakultas Sastra di  Banyuwangi. Dr. R. Achmad menjabat sebagai rektor pertama.'
            },{
                id:4,
                text:'Kepemimpinan rektor Universitas Jember dilanjutkan oleh beberapa tokoh,  antara lain Letkol. R. Winoto, Letkol Soedi Harjohoedojo, Letkol.  Soetardjo, dan Kol. Drs. H. R. Warsito, hingga tahun 1986. Mulai tahun  1986, rektor Universitas Jember dijabat oleh sivitas akademikanya  sendiri.'
            },{
                id:5,
                text:'Para pendahulu Universitas Jember telah memberikan landasan filosofi  dalam pengembangan lembaga dengan sesanti "KARYA RINARAS AMBUKA BUDHI,  GAPURA MANGESTI ARUMING BAWANA." Sesanti tersebut menggambarkan tekad  universitas untuk terus bekerja dengan iman dan taqwa, selaras, serasi,  dan seimbang dalam menerima perkembangan IPTEKS, serta menciptakan  sarjana yang berpengabdian kepada masyarakat dan membawa kehormatan bagi  bangsa dan negara.'
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