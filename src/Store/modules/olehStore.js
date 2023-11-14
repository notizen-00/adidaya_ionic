import { defineStore } from 'pinia'
import axios from 'axios';
import router from '@/router'
import { Preferences } from '@capacitor/preferences';
import { CapacitorHttp } from '@capacitor/core';
export const useOlehStores = defineStore('olehStore', {
  state: () => ({
    login: false,
    MountedFirst:false,
    token:'',
    lokasi:{
        lat:'',
        lng:''
    },
    oleh:[],
    foto_oleh:[],
    tipe:"Oleh-oleh",
    jarak:1,
    slide:0,
    detail_oleh:[],
    navigation:'',
    oleh_rekomendasi:[],
 
  }),
  actions: {
    async fetchOlehRekomendasi(){

      const url = 'https://ao.apps.unej.ac.id/oleh/rekomendasi'; // URL tanpa photo_reference
    
      try {
        const response = await axios.get(url);
  
        console.log(response.data); 

        this.oleh_rekomendasi = response.data;

      } catch (error) {
        console.error(error);
      }

    },
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
    async fetchOleh(param){

        const jarak = param.jarak;
        const type = param.type;
        const keyword = param.keyword;
        const options = {
          
            url: 'https://ao.apps.unej.ac.id/oleh/api/'+keyword+'/'+type+'/'+jarak,
          };
        
          const response = await CapacitorHttp.get(options);
          
          this.oleh = response.data[0].item;

    },
    async fetchOlehCache(param){

      const jarak = param.jarak;
      const type = param.type;
      const keyword = param.keyword;
      const options = {
        
          url: 'https://ao.apps.unej.ac.id/oleh/api/'+keyword+'/'+type+'/'+jarak,
        };
      
        const response = await CapacitorHttp.get(options);
        
        this.oleh = response.data[0].item;

    },
    setNavigation(value){

        this.navigation = value;
    },
    SetMountedFirst()
    {
      this.MountedFirst = true
    },
    async fetchDetail(placeId) {
      const url = 'https://ao.apps.unej.ac.id/oleh/api/foto'; // URL tanpa photo_reference
    
      try {
        const response = await axios.post(url, { placeId: placeId });
    
        console.log(placeId);
        console.log(response.data.result); // Data yang diterima dari server

        this.foto_oleh = response.data.result.photos;
        this.detail_oleh = response.data.result;
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
    getOleh(){
        return this.oleh
    },
    getolehRekomendasi()
    {
      return this.oleh_rekomendasi
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
    getFotooleh(){
      return this.foto_oleh
    },
    getDetailoleh(){
      return this.detail_oleh
    },
    getNavigation(){
      return this.navigation
    }

  },
  persist:true
})