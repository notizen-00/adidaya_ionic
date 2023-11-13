import { defineStore } from 'pinia'
import { LocalNotifications } from '@capacitor/local-notifications';
export const useDeviceStores = defineStore('deviceStore', {
  state: () => ({
    totalConnections: 0,
    deviceId: '',
    urlWebsocket: 'wss://app.ikromi.codes',
    websocket: null,
    message:[]
  }),
  actions: {
    Connect() {
      this.websocket = new WebSocket(`${this.urlWebsocket}?deviceId=${this.deviceId}`);

      this.websocket.onopen = () => {
        console.log('WebSocket connection opened.');
    
        this.getTotalConnections(); // Panggil fungsi untuk mendapatkan totalConnections
      };

      this.websocket.onclose = () => {
        console.log('WebSocket connection closed.');
      };
      
      this.websocket.onmessage = (e) =>{
                const payload = JSON.parse(e.data);
                
              if (payload.totalConnections !== undefined) {
                this.totalConnections = payload.totalConnections;
              } else if (payload.type == 'message') {
                // Tambahkan pesan ke array pesan
                // alert('test')
                this.showNotification('test',payload.data.message)
                this.message.push({
                  id: new Date().toISOString(),
                  content: payload.data.message,
                  sender: payload.data.deviceId
                });
              }
      }

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
        const response = await fetch('http://localhost:8080/total-connections');
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
    getDeviceId(){
        return this.deviceId
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
