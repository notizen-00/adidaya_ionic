import { defineStore } from 'pinia'
import axios from 'axios';
import router from '@/router'
import { Preferences } from '@capacitor/preferences';
import { CapacitorHttp } from '@capacitor/core';
export const useHotelStores = defineStore('hotelStore', {
  state: () => ({
    login: false,
    token:'',
    lokasi:{
        lat:'',
        lng:''
    },
    hotel:[],
    foto_hotel:[]
 
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
    },
    async fetchHotel(param){

        const jarak = param.jarak;
        const type = param.type;
        const keyword = param.keyword;
        const options = {
          
            url: 'https://ao.apps.unej.ac.id/hotel/api/'+keyword+'/'+type+'/'+jarak,
          };
        
          const response = await CapacitorHttp.get(options);
          
          this.hotel = response.data[0].item;

          // await Preferences.set({
          //   key: 'hotel_param',
          //   value: JSON.stringify(param),
          // });
    },
    async fetchDetail(placeId) {
      const url = 'https://ao.apps.unej.ac.id/hotel/api/foto'; // URL tanpa photo_reference
    
      try {
        const response = await axios.post(url, { placeId: placeId });
    
        console.log(placeId);
        console.log(response.data.result.photos); // Data yang diterima dari server

        this.foto_hotel = response.data.result.photos;
      } catch (error) {
        console.error(error);
      }
    }
  },
  getters: {
    isLogin() {
      return this.login
    },
    getToken(){
        return this.token
    },
    getHotel(){
        return this.hotel
    },
    getLokasi()
    {
        return this.lokasi
    },
    getFotoHotel(){
      return this.foto_hotel
    }

  },
  persist:true
})