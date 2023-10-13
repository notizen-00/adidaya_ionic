import { defineStore } from 'pinia'
import axios from 'axios';
import router from '@/router'
import { Preferences } from '@capacitor/preferences';
import { CapacitorHttp } from '@capacitor/core';
export const useHotelStores = defineStore('hotelStore', {
  state: () => ({
    login: false,
    MountedFirst:false,
    token:'',
    lokasi:{
        lat:'',
        lng:''
    },
    hotel:[],
    foto_hotel:[],
    tipe:"Hotel",
    jarak:1,
    slide:0,
    detail_hotel:[]
 
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

    },
    async fetchHotelCache(param){

      const jarak = param.jarak;
      const type = param.type;
      const keyword = param.keyword;
      const options = {
        
          url: 'https://ao.apps.unej.ac.id/hotel/api/'+keyword+'/'+type+'/'+jarak,
        };
      
        const response = await CapacitorHttp.get(options);
        
        this.hotel = response.data[0].item;

    },
    SetMountedFirst()
    {
      this.MountedFirst = true
    },
    async fetchDetail(placeId) {
      const url = 'https://ao.apps.unej.ac.id/hotel/api/foto'; // URL tanpa photo_reference
    
      try {
        const response = await axios.post(url, { placeId: placeId });
    
        console.log(placeId);
        console.log(response.data.result); // Data yang diterima dari server

        this.foto_hotel = response.data.result.photos;
        this.detail_hotel = response.data.result;
      } catch (error) {
        console.error(error);
      }
    },
    setJarak(value){
        this.jarak = value

    },
    setTipe(value){
      this.tipe = value
    },
    setSlide(value){
      this.slide = value
      console.log(value)
    }
  },
  getters: {
    isLogin() {
      return this.login
    },
    isMountedFirst(){
      return this.MountedFirst
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
    getSlide() {
      return this.slide
    },
    getTipe()
    {
      return this.tipe
    },
    getJarak()
    {
      return this.jarak
    },
    getFotoHotel(){
      return this.foto_hotel
    },
    getDetailHotel(){
      return this.detail_hotel
    }

  },
  persist:true
})