import { defineStore } from 'pinia'
import axios from 'axios';
import router from '@/router'

export const useAuthStores = defineStore('authStore', {
  state: () => ({
    login: false,
    token:'',
    listPokemon:[]
 
  }),
  actions: {

    async AuthLogin(data) {
     
        try {
          // Mengirim permintaan ke endpoint absensi.test dengan parameter email dan password
          const response = await axios.post('https://demo.ikromi.codes/api/login', data);
          
          // Memeriksa apakah permintaan berhasil
          if (response.status === 200) {
            // Lakukan tindakan sesuai dengan hasil autentikasi di sini
            // Misalnya, mengatur status login menjadi true
            this.login = true;
            this.token = response.data.data.token;
            
            return 'success';
            
       
            // Mengembalikan hasil autentikasi atau data lain jika perlu
            
          } else {
            // Jika permintaan tidak berhasil, tangani error sesuai kebutuhan
            
            throw new Error('Gagal login');
            alert('test')
            router.go('/')
           
          }
        } catch (error) {
          // Tangani error jika terjadi kesalahan pada permintaan atau autentikasi
            
          console.log(error.response.data.message);
        }
      },
      async Pokemon(){
        try {
            // Mengirim permintaan ke endpoint absensi.test dengan parameter email dan password
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
            
            // Memeriksa apakah permintaan berhasil
            if (response.status === 200) {
                
                this.listPokemon = response.data.results;
              
         
              // Mengembalikan hasil autentikasi atau data lain jika perlu
              
            } else {
              // Jika permintaan tidak berhasil, tangani error sesuai kebutuhan
              
              throw new Error('Gagal login');
              alert('test')
              router.go('/')
             
            }
          } catch (error) {
            // Tangani error jika terjadi kesalahan pada permintaan atau autentikasi
              
            console.log(error.response.data.message);
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
    getPokemon()
    {
        return this.listPokemon
    }

  },
  persist:true
})
