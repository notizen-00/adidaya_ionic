import { defineStore } from 'pinia'
import { LocalNotifications } from '@capacitor/local-notifications';
import axios from 'axios';
export const useNotificationStores = defineStore('notificationStore', {
  state: () => ({
    totalConnections: 0,
    deviceId: '',
    notifications:[],
    url:'https://app.ikromi.codes/'
  }),
  actions: {
    async fetchNotifications(){
        const response = await axios.get(this.url+'get-pengumuman');
        this.notifications = response.data;

    },
    async sendMessage(message) {
      if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
        // Pastikan koneksi WebSocket terbuka
        const payload = message;
  
        this.websocket.send(payload);
      } else {
        console.error('WebSocket connection is not open.');
      }
    },
    async showNotification (title, body) {
  try {
    // Membuat notifikasi
    const notifResp = await LocalNotifications.schedule({
      notifications: [
        {
          title: title,
          body: body,
          id: 1, // ID unik untuk notifikasi
          schedule: { at: new Date(Date.now() + 100) }, // Menjadwalkan notifikasi satu detik dari sekarang
          sound: null, // Opsional: Nama file suara
          attachments: null, // Opsional: Lampiran
          actionTypeId: '', // Opsional: ID tindakan yang ditetapkan di konfigurasi
          extra: null, // Opsional: Data ekstra
        },
      ],
    })

    return notifResp;
  }catch(error) {

    }
  },
    async getTotalConnectionss() {
      // Kirim permintaan ke server untuk mendapatkan total koneksi
      try {
        const response = await fetch('https://app.ikromi.codes/total-connections');
        const data = await response.json();

        this.totalConnections = data.totalConnections;
      } catch (error) {
        console.error('Error fetching totalConnections:', error);
      }
    },
    
  setDevice(value){
    this.deviceId = value
  },
    // ... actions lainnya ...
  },
  getters: {
    isLogin() {
      return this.login
    },
    getNotifications(){
        return this.notifications
    },
    getTotalConnections(){
      return this.totalConnections
    },
    getMessage(){
      return this.message
    },
    getPokemon()
    {
        return this.listPokemon
    }

  },
  persist:true
  // ... state, getters, dan persist lainnya ...
});
