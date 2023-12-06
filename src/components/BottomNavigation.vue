<template>

   
      <v-bottom-navigation
      class=" w-3/4"
        v-model="value"
        height="60"
        bg-color="#F3FCFF"
        horizontal
        rounded="lg"
        app
      >
        <v-btn class="my-btn " variant="text" to="/beranda">
            <v-icon>
                <svg color="white" id="home"  xmlns="http://www.w3.org/2000/svg" width="26.995" height="26.995" viewBox="0 0 26.995 26.995">
                <path id="Path_3" data-name="Path 3" d="M25.842,9.78l-7.97-7.97a6.194,6.194,0,0,0-8.749,0L1.153,9.78A3.911,3.911,0,0,0,0,12.564V24.237A2.764,2.764,0,0,0,2.761,27H24.234A2.764,2.764,0,0,0,27,24.237V12.564A3.911,3.911,0,0,0,25.842,9.78ZM23.621,23.622H18V20.043A4.3,4.3,0,0,0,13.7,15.748h-.409A4.3,4.3,0,0,0,9,20.043H9v3.579H3.374V12.564a.568.568,0,0,1,.164-.4l7.97-7.97a2.812,2.812,0,0,1,3.977,0h0l7.97,7.97a.568.568,0,0,1,.164.4V23.622Z" transform="translate(0 -0.001)" :fill="isActive('beranda') ? '#1aa7ff':'#c0dee8'"/>
              </svg>
            </v-icon>
        </v-btn>
  
        <v-btn class="my-btn" to="/video">
   
        <v-icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="21.978" height="26.995" viewBox="0 0 21.978 26.995">
          <path id="play" d="M22.681,8.965,11.949,1.1A5.626,5.626,0,0,0,3,5.63V21.377a5.619,5.619,0,0,0,8.949,4.534l10.732-7.869a5.626,5.626,0,0,0,0-9.071Z" transform="translate(-3 -0.009)" :fill="isActive('video') ? '#1aa7ff':'#c0dee8'"/>
        </svg>
        </v-icon>
  
        </v-btn >
  
        <v-btn class="my-btn" to="/panduan">
          <v-icon><svg xmlns="http://www.w3.org/2000/svg" width="24.745" height="26.995" viewBox="0 0 24.745 26.995">
            <path id="search-alt" d="M12.123,19.684A7.311,7.311,0,0,1,24.5,14.416V3.374A3.374,3.374,0,0,0,21.122,0H7.624A5.631,5.631,0,0,0,2,5.624V21.371A5.631,5.631,0,0,0,7.624,27h11.81A7.311,7.311,0,0,1,12.123,19.684Zm-4.5-11.81A1.125,1.125,0,0,1,8.749,6.749h9a1.125,1.125,0,1,1,0,2.25h-9A1.125,1.125,0,0,1,7.624,7.874ZM26.416,26.666a1.125,1.125,0,0,1-1.59,0l-2.707-2.707a5.1,5.1,0,1,1,1.59-1.59l2.707,2.707A1.125,1.125,0,0,1,26.416,26.666Z" transform="translate(-2)" :fill="isActive('panduan') ? '#1aa7ff':'#c0dee8'"/>
          </svg>
          </v-icon>
        </v-btn>
  
        <v-btn class="my-btn" to="/agenda">
          <v-icon><svg xmlns="http://www.w3.org/2000/svg" width="26.995" height="26.995" viewBox="0 0 26.995 26.995">
            <path id="calendar-lines" d="M0,9V7.874A5.63,5.63,0,0,1,5.624,2.25H6.749V1.125a1.125,1.125,0,0,1,2.25,0V2.25h9V1.125a1.125,1.125,0,0,1,2.25,0V2.25h1.125A5.63,5.63,0,0,1,27,7.874V9Zm27,2.25V21.371A5.63,5.63,0,0,1,21.371,27H5.624A5.63,5.63,0,0,1,0,21.371V11.248ZM13.5,21.371a1.124,1.124,0,0,0-1.125-1.125H6.749a1.125,1.125,0,1,0,0,2.25h5.624A1.124,1.124,0,0,0,13.5,21.371Zm7.874-4.5a1.124,1.124,0,0,0-1.125-1.125H6.749a1.125,1.125,0,0,0,0,2.25h13.5A1.124,1.124,0,0,0,21.371,16.872Z" :fill="isActive('agenda') ? '#1aa7ff':'#c0dee8'"/>
          </svg>
          </v-icon>
        </v-btn>

        <v-btn class="my-btn" @click="checkCanOpenUrl">
          
          <v-icon :color="isActive('slot') ? '#1aa7ff':'#c0dee8'">
            fas fa-check-to-slot
          </v-icon>
        </v-btn>

    
      </v-bottom-navigation>
  
  </template>

  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { AppLauncher } from '@capacitor/app-launcher';
  import { Browser } from '@capacitor/browser';

const openNavigation = async () => {
await Browser.open({ url: 'https://drive.google.com/drive/folders/1wAotHz4LgjVAg_pbhTRXBmgm24wme1cw?usp=sharing' });
};
const checkCanOpenUrl = async () => {
  const { value } = await AppLauncher.canOpenUrl({ url: 'com.evoteabdidaya.app' });

  console.log('Can open url: ', value);
  if(value){
    openPage()
  }else{
    alert('Silahkan unduh dan install aplikasi Vote Abdidaya')
    openNavigation()
    
  }
};

const openPage = async () => {
  await AppLauncher.openUrl({ url: 'com.evoteabdidaya.app' });
};
  const router = useRoute()
  const value = ref(1);
  
  const isActive = (routeName) => {
    return router.name === routeName;
  };
  </script>
  

<style scoped>
.v-btn.my-btn {
    min-width: 10px !important;
    padding:25px !important;
  }
</style>