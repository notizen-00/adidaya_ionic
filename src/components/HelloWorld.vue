<template>
<v-container>
  <div class="grid-container">
    <!-- Top row -->
    <v-sheet class="grid-item mt-10">
      <v-img :width="100" :height="200" :src="Img1"></v-img>
    </v-sheet>
    <v-sheet class="grid-item">
      <v-img :width="100" :height="200" :src="Img2"></v-img>
    </v-sheet>
    <v-sheet class="grid-item mt-10">
      <v-img :width="100" :height="200" :src="Img3"></v-img>
    </v-sheet>

    <v-sheet class="grid-item empat">
      <v-img :width="100"  :src="Img4"></v-img>
    </v-sheet>
    <v-sheet class="grid-item -mt-10">
      <v-img :width="100" :height="200" :src="Img5"></v-img>
    </v-sheet>
    <v-sheet class="grid-item">
      <v-img :width="100" :src="Img6"></v-img>
    </v-sheet>
  </div>

  <p class="mt-10 font-extrabold text-center text-xl leading-1">
    Selamat datang di Kota Jember<br>
      Peserta Abdidaya Ormawa<br>
   2023
  </p>
  <p class="text-slate-400 text-sm text-center mt-2">
    Temukan penginapan, rumah makan,<br>
pusat oleh-oleh dan fasilitas umum disini
  </p>


  

  <div class="fixed inset-x-0 bottom-0 p-4 ">
    <router-link to="/beranda" class="w-full">
    <button class="bg-blue-500 w-full text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-400 transition duration-300">
      Mulai
    </button>
    </router-link>
  </div>

</v-container>
</template>
<script setup>
  import Img1 from '@/assets/img/satu.svg'
  import Img2 from '@/assets/img/dua.svg'
  import Img3 from '@/assets/img/tiga.svg'
  import Img4 from '@/assets/img/empat.svg'
  import Img5 from '@/assets/img/lima.svg'
  import Img6 from '@/assets/img/enam.svg'
</script>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)); 
  gap: 10px; /* Adjust the gap as needed */
  justify-items: center;
  text-align: center;
}

.grid-item {
  position: relative;
  
}
@media (min-width: 400px) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 9fr)); 
    gap: 10px; /* Adjust the gap as needed */
    justify-items: center;
    text-align: center;
  }
  .grid-item{
    position: relative;
  }
}
.grid-item v-img {
  width: 100%;
}
</style>