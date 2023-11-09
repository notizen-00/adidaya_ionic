<template>
  <v-layout class="rounded">
    <v-app-bar color="#004F89">
      <div class="w-1/2 m-2 text-white">
        <h1 class="font-bold font-sans text-white line-clamp-2">Mulai tentukan<br> pilihan Anda disini </h1>
    </div>
    <div class="w-1/2 text-end">
      <v-btn
      icon
      color="white"
      variant="tonal"
      class="mr-3"
      >
      <v-icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <g id="_01_align_center" data-name="01 align center" transform="translate(0.032 0.032)">
                <path id="Path_2" data-name="Path 2" d="M31.968,30.085,23.63,21.747a13.337,13.337,0,1,0-1.883,1.883l8.338,8.338ZM13.326,23.979A10.652,10.652,0,1,1,23.979,13.326,10.652,10.652,0,0,1,13.326,23.979Z" transform="translate(0 0)" fill="#fff"/>
              </g>
            </svg>
      </v-icon>
    </v-btn>
    </div>
    </v-app-bar>
    <v-container>
        <div class="w-full d-flex justify-between mt-5">

        </div>
      
        <CardMenu/>
        
        <bottom-navigation></bottom-navigation>
    </v-container>
  </v-layout>
</template>
<script setup>
    import CardMenu from '@/components/beranda/CardMenu.vue'
    import GetLocation from '@/components/beranda/GetLocation.vue';
    import ListHotel from '@/components/beranda/ListHotel.vue';
    import BottomNavigation from '@/components/BottomNavigation.vue'
    import { onMounted,ref,inject } from 'vue';
    import { PushNotifications } from '@capacitor/push-notifications';
    const store = inject('store');

    const tokens = ref('')
    const notificationss = ref([])
const addListeners = async () => {
  await PushNotifications.addListener('registration', token => {
    console.info('Registration token: ', token.value);

    tokens.value = token.value;


  });

  await PushNotifications.addListener('registrationError', err => {
    console.error('Registration error: ', err.error);
  });

  await PushNotifications.addListener('pushNotificationReceived', notification => {
    console.log('Push notification received: ', notification);
  });

  await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
    console.log('Push notification action performed', notification.actionId, notification.inputValue);
  });
}

const registerNotifications = async () => {
  let permStatus = await PushNotifications.checkPermissions();

  if (permStatus.receive === 'prompt') {
    permStatus = await PushNotifications.requestPermissions();
  }

  if (permStatus.receive !== 'granted') {
    throw new Error('User denied permissions!');
  }

  await PushNotifications.register();
}

const getDeliveredNotifications = async () => {
  const notificationList = await PushNotifications.getDeliveredNotifications();
  console.log('delivered notifications', notificationList);
  notificationss.value = notificationList
}



onMounted(()=>{
    addListeners();
registerNotifications();
getDeliveredNotifications();

store.hotelStore.fetchHotelRekomendasi();

})

</script>