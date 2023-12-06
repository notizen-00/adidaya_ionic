<template>
    <v-layout class="rounded">
      <v-app-bar color="#004F89">
        <div class="w-full m-2">
          <h1 class="font-extrabold font-sans text-white line-clamp-2">
            Kenali Jember<br />
            lebih dekat
          </h1>
        </div>
      </v-app-bar>
      <v-container>
        
        <!-- <div class="w-full relative d-flex justify-"> -->
          <v-skeleton-loader   class="mt-20 rounded-xl" v-if="loading" type="card"></v-skeleton-loader>
          <v-skeleton-loader   class="mt-10 rounded-xl" v-if="loading" type="card"></v-skeleton-loader>
          <v-skeleton-loader   class="mt-10 rounded-xl" v-if="loading" type="card"></v-skeleton-loader>
          <v-skeleton-loader   class="mt-10 rounded-xl" v-if="loading" type="card"></v-skeleton-loader>
        <iframe   @load="onIframeLoad" class="w-full  mt-20 rounded-xl" height="200" src="https://www.youtube.com/embed/8dOkwO2QDPU?si=SXy1STDaKINQkmcR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe    @load="onIframeLoad" class="w-full mt-10 rounded-xl" height="200" src="https://www.youtube.com/embed/E-OxdwDXaGQ?si=9TtnoQbpLXY5zHxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <!-- </div> -->
        <iframe    @load="onIframeLoad" class="w-full mt-10 rounded-xl" height="200" src="https://www.youtube.com/embed/ig3EtnOpIsY?si=HRqJDFGVc3JZT8Y3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe    @load="onIframeLoad" class="w-full mt-10 mb-20 rounded-xl" height="200" src="https://www.youtube.com/embed/uv0ubuVC5ac?si=gvAOwS8MpLKdUAKv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <bottom-navigation></bottom-navigation>
      </v-container>
    </v-layout>
  </template>
  
  <script setup>
  import BottomNavigation from '@/components/BottomNavigation.vue';
  import { onMounted, ref,inject } from 'vue';
  import { LocalNotifications } from '@capacitor/local-notifications';
  import { storeToRefs } from 'pinia';
  const store = inject('store')
  const pesan = ref('')

const loading = ref(true)
  const { getTotalConnections,getDeviceId } = storeToRefs(store.deviceStore)
 
  const sendMessage = (value) =>{

     store.deviceStore.sendMessage(value)
  }

  const onIframeLoad = () => {
    // This function will be called when each iframe is fully loaded
    // Add any logic you want to execute after the iframe is loaded
    checkAllIframesLoaded();
  };

  const checkAllIframesLoaded = () => {
    // Check if all iframes are loaded
    if (document.querySelectorAll('iframe').length === 4) {
      // All iframes are loaded, perform any action you need
      loading.value = false;
    }
  };

//   onMounted(async () => {
  
  
  
//     connection.onerror = function (error) {
//       console.error('WebSocket Error:', error);
//     };
  
//     connection.onmessage = function (e) {
//       const payload = JSON.parse(e.data);
        
//       if (payload.totalConnections !== undefined) {
//         totalConnections.value = payload.totalConnections;
//       } else if (payload.type == 'message') {
//         // Tambahkan pesan ke array pesan
//         showNotification('Pesan baru', payload.data.message);
//         messages.value.push({
//           id: new Date().toISOString(),
//           content: payload.data.message,
//           sender: payload.data.deviceId
//         });
//       }
//     };
  
//     connection.onclose = function () {
//       console.log('WebSocket connection closed.');
//     };
//   });
//   const showNotification = async (title, body) => {
//   try {
//     // Membuat notifikasi
//     const notifResp = await LocalNotifications.schedule({
//       notifications: [
//         {
//           title: title,
//           body: body,
//           id: 1, // ID unik untuk notifikasi
//           schedule: { at: new Date(Date.now() + 100) }, // Menjadwalkan notifikasi satu detik dari sekarang
//           sound: null, // Opsional: Nama file suara
//           attachments: null, // Opsional: Lampiran
//           actionTypeId: '', // Opsional: ID tindakan yang ditetapkan di konfigurasi
//           extra: null, // Opsional: Data ekstra
//         },
//       ],
//     });

//     console.log('Notifications scheduled', notifResp);
   
//   } catch (error) {
//     console.error('Error scheduling notifications', error);
 
//   }
// };
//   const submitForm = () => {
//     connection.send(JSON.stringify({
//       type: 'message',
//       data: {
//         message: form.value.message,
//         deviceId: deviceId.value
//       }
//     }));

//     showNotification('Pemberitahuan', 'Pesan anda terkirim ');
  
//     form.value.message = '';
//   };

 
  </script>
  