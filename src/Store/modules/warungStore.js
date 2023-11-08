import { defineStore } from 'pinia'
import axios from 'axios';
import router from '@/router'
import { Preferences } from '@capacitor/preferences';
import { CapacitorHttp } from '@capacitor/core';
export const useWarungStores = defineStore('warungStore', {
  state: () => ({
    login: false,
    MountedFirst:false,
    token:'',
    lokasi:{
        lat:'',
        lng:''
    },
    warung:[],
    foto_warung:[],
    tipe:"Hotel",
    jarak:1,
    slide:0,
    detail_warung:[]
 
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
    async fetchWarung(param){

        const jarak = param.jarak;
        const type = param.type;
        const keyword = param.keyword;
        const options = {
          
            url: 'https://ao.apps.unej.ac.id/warung/api/'+keyword+'/'+type+'/'+jarak,
          };
        
          const response = await CapacitorHttp.get(options);
          
          this.warung = response.data[0].item;

    },
    async fetchHotelCache(param){

      const jarak = param.jarak;
      const type = param.type;
      const keyword = param.keyword;
      const options = {
        
          url: 'https://ao.apps.unej.ac.id/warung/api/'+keyword+'/'+type+'/'+jarak,
        };
      
        const response = await CapacitorHttp.get(options);
        
        this.warung = response.data[0].item;

    },
    SetMountedFirst()
    {
      this.MountedFirst = true
    },
    async fetchDetail(placeId) {
      const url = 'https://ao.apps.unej.ac.id/warung/api/foto'; // URL tanpa photo_reference
    
      try {
        const response = await axios.post(url, { placeId: placeId });
    
        console.log(placeId);
        console.log(response.data.result); // Data yang diterima dari server

        this.foto_warung = response.data.result.photos;
        this.detail_warung = response.data.result;
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
    getWarung(){
        return this.warung
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
    getFotoWarung(){
      return this.foto_warung
    },
    getDetailWarung(){
      return this.detail_warung
    }

  },
  persist:true
})