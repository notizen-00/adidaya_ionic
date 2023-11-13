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
        <div class="w-full mt-20 bg-red-200">
          <p>Total Connections: {{ getTotalConnections ? getTotalConnections : 0 }}</p>
          {{ getDeviceId ? getDeviceId : '-' }}  
        </div>

        <input type="text" class="border border-collapse mt-2 border-red-400" v-model="pesan">

        <v-btn
        @click="sendMessage(pesan)"
        >
          Kirim
        </v-btn>
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


  const { getTotalConnections,getDeviceId } = storeToRefs(store.deviceStore)
 
  const sendMessage = (value) =>{

     store.deviceStore.sendMessage(value)
  }


  
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
  