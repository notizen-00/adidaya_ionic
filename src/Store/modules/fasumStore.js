import { defineStore } from 'pinia'
import axios from 'axios';
import router from '@/router'
import { Preferences } from '@capacitor/preferences';
import { CapacitorHttp } from '@capacitor/core';
export const useFasumStores = defineStore('fasumStore', {
  state: () => ({
    login: false,
    MountedFirst:false,
    token:'',
    lokasi:{
        lat:'',
        lng:''
    },
    fasum:[],
    foto_fasum:[],
    tipe:"Tempat Ibadah",
    jarak:3,
    slide:0,
    detail_fasum:[],
    navigation:'',
    fasum_rekomendasi:[],
 
  }),
  actions: {
    async fetchFasumRekomendasi(){

      const url = 'https://ao.apps.unej.ac.id/fasum/rekomendasi'; // URL tanpa photo_reference
    
      try {
        const response = await axios.get(url);
  
        console.log(response.data); 

        this.fasum_rekomendasi = response.data;

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
    async fetchFasum(param){

        const jarak = param.jarak;
        const type = param.type;
        const keyword = param.keyword;
        const options = {
          
            url: 'https://ao.apps.unej.ac.id/fasum/api/'+keyword+'/'+type+'/'+jarak,
          };
        
          const response = await CapacitorHttp.get(options);
          
          this.fasum = response.data[0].item;

    },
    async fetchfasumCache(param){

      const jarak = param.jarak;
      const type = param.type;
      const keyword = param.keyword;
      const options = {
        
          url: 'https://ao.apps.unej.ac.id/fasum/api/'+keyword+'/'+type+'/'+jarak,
        };
      
        const response = await CapacitorHttp.get(options);
        
        this.fasum = response.data[0].item;

    },
    setNavigation(value){

        this.navigation = value;
    },
    SetMountedFirst()
    {
      this.MountedFirst = true
    },
    async fetchDetail(placeId) {
      const url = 'https://ao.apps.unej.ac.id/fasum/api/foto'; // URL tanpa photo_reference
    
      try {
        const response = await axios.post(url, { placeId: placeId });
    
        console.log(placeId);
        console.log(response.data.result); // Data yang diterima dari server

        this.foto_fasum = response.data.result.photos;
        this.detail_fasum = response.data.result;
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
    getFasum(){
        return this.fasum
    },
    getFasumRekomendasi()
    {
      return this.fasum_rekomendasi
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
    getFotofasum(){
      return this.foto_fasum
    },
    getDetailFasum(){
      return this.detail_fasum
    },
    getNavigation(){
      return this.navigation
    }

  },
  persist:true
})