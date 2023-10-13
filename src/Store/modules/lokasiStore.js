import { defineStore } from 'pinia'
import axios from 'axios';
import router from '@/router'
import { Preferences } from '@capacitor/preferences';
export const useLokasiStores = defineStore('lokasiStore', {
  state: () => ({
    login: false,
    token:'',
    lokasi:{
        lat:'',
        lng:''
    }
 
  }),
  actions: {
    async setLokasi (coords) {

         this.lokasi.lat = coords.latitude;
         this.lokasi.lng = coords.longitude;

        await Preferences.set({
          key: 'latitude',
          value: coords.latitude,
        });
      
        
        await Preferences.set({
            key: 'latitude',
            value: coords.longitude,
          });
    }


  

  },
  getters: {
    isLogin() {
      return this.login
    },
    getToken(){
        return this.token
    },
    getLokasi()
    {
        return this.lokasi
    }

  },
  persist:true
})