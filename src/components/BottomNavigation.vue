<template>

   
      <v-bottom-navigation
      class=" w-3/4"
        v-model="value"
        height="60"
        bg-color="#F3FCFF"
        horizontal
        rounded="lg"
        app
      >
        <v-btn class="my-btn " variant="text" to="/beranda">
            <v-icon>
                <svg color="white" id="home"  xmlns="http://www.w3.org/2000/svg" width="26.995" height="26.995" viewBox="0 0 26.995 26.995">
                <path id="Path_3" data-name="Path 3" d="M25.842,9.78l-7.97-7.97a6.194,6.194,0,0,0-8.749,0L1.153,9.78A3.911,3.911,0,0,0,0,12.564V24.237A2.764,2.764,0,0,0,2.761,27H24.234A2.764,2.764,0,0,0,27,24.237V12.564A3.911,3.911,0,0,0,25.842,9.78ZM23.621,23.622H18V20.043A4.3,4.3,0,0,0,13.7,15.748h-.409A4.3,4.3,0,0,0,9,20.043H9v3.579H3.374V12.564a.568.568,0,0,1,.164-.4l7.97-7.97a2.812,2.812,0,0,1,3.977,0h0l7.97,7.97a.568.568,0,0,1,.164.4V23.622Z" transform="translate(0 -0.001)" :fill="isActive('beranda') ? '#1aa7ff':'#c0dee8'"/>
              </svg>
            </v-icon>
        </v-btn>
  
        <v-btn class="my-btn" to="/video">
   
        <v-icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="21.978" height="26.995" viewBox="0 0 21.978 26.995">
          <path id="play" d="M22.681,8.965,11.949,1.1A5.626,5.626,0,0,0,3,5.63V21.377a5.619,5.619,0,0,0,8.949,4.534l10.732-7.869a5.626,5.626,0,0,0,0-9.071Z" transform="translate(-3 -0.009)" :fill="isActive('video') ? '#1aa7ff':'#c0dee8'"/>
        </svg>
        </v-icon>
  
        </v-btn >
  
        <v-btn class="my-btn" to="/panduan">
          <v-icon><svg xmlns="http://www.w3.org/2000/svg" width="24.745" height="26.995" viewBox="0 0 24.745 26.995">
            <path id="search-alt" d="M12.123,19.684A7.311,7.311,0,0,1,24.5,14.416V3.374A3.374,3.374,0,0,0,21.122,0H7.624A5.631,5.631,0,0,0,2,5.624V21.371A5.631,5.631,0,0,0,7.624,27h11.81A7.311,7.311,0,0,1,12.123,19.684Zm-4.5-11.81A1.125,1.125,0,0,1,8.749,6.749h9a1.125,1.125,0,1,1,0,2.25h-9A1.125,1.125,0,0,1,7.624,7.874ZM26.416,26.666a1.125,1.125,0,0,1-1.59,0l-2.707-2.707a5.1,5.1,0,1,1,1.59-1.59l2.707,2.707A1.125,1.125,0,0,1,26.416,26.666Z" transform="translate(-2)" :fill="isActive('panduan') ? '#1aa7ff':'#c0dee8'"/>
          </svg>
          </v-icon>
        </v-btn>
  
        <v-btn class="my-btn" to="/agenda">
          <v-icon><svg xmlns="http://www.w3.org/2000/svg" width="26.995" height="26.995" viewBox="0 0 26.995 26.995">
            <path id="calendar-lines" d="M0,9V7.874A5.63,5.63,0,0,1,5.624,2.25H6.749V1.125a1.125,1.125,0,0,1,2.25,0V2.25h9V1.125a1.125,1.125,0,0,1,2.25,0V2.25h1.125A5.63,5.63,0,0,1,27,7.874V9Zm27,2.25V21.371A5.63,5.63,0,0,1,21.371,27H5.624A5.63,5.63,0,0,1,0,21.371V11.248ZM13.5,21.371a1.124,1.124,0,0,0-1.125-1.125H6.749a1.125,1.125,0,1,0,0,2.25h5.624A1.124,1.124,0,0,0,13.5,21.371Zm7.874-4.5a1.124,1.124,0,0,0-1.125-1.125H6.749a1.125,1.125,0,0,0,0,2.25h13.5A1.124,1.124,0,0,0,21.371,16.872Z" :fill="isActive('agenda') ? '#1aa7ff':'#c0dee8'"/>
          </svg>
          </v-icon>
        </v-btn>

        <v-btn class="my-btn" to="/pengumuman">
            <v-icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="26.995" height="26.993" viewBox="0 0 26.995 26.993">
                    <path id="megaphone" d="M25.868,18a1.125,1.125,0,0,1-.5-.118l-2.249-1.125a1.125,1.125,0,1,1,1.005-2.013l2.249,1.125a1.125,1.125,0,0,1-.5,2.131ZM24.122,7.761l2.249-1.125a1.125,1.125,0,0,0-1.005-2.013L23.116,5.747a1.125,1.125,0,0,0,1.005,2.013Zm2.871,3.487a1.125,1.125,0,0,0-1.125-1.125H23.619a1.125,1.125,0,1,0,0,2.249h2.249A1.125,1.125,0,0,0,26.993,11.247ZM20.245,21.37V1.125a1.125,1.125,0,0,0-2.249,0c0,3.317-2.905,4.5-5.624,4.5H4.5a4.5,4.5,0,0,0-4.5,4.5v2.249a4.5,4.5,0,0,0,4.5,4.5h7.873c2.718,0,5.624,1.182,5.624,4.5a1.125,1.125,0,0,0,2.249,0ZM9.207,19.12H4.5a6.748,6.748,0,0,1-1.554-.188L5.756,25.21A3,3,0,0,0,8.5,26.993a2.769,2.769,0,0,0,2.522-3.905Z" :fill="isActive('pengumuman') ? '#1aa7ff':'#c0dee8'"/>
                  </svg>
                  
            </v-icon>
        </v-btn>
      </v-bottom-navigation>
  
  </template>

  <script>
  export default {
    data: () => ({ value: 1 }),
    methods: {
    isActive(routeName) {
      
      if(this.$route.name === routeName){
        return true
      }else{
        return false
      }
    },
  },
   
  }
</script>

<style scoped>
.v-btn.my-btn {
    min-width: 10px !important;
    padding:25px !important;
  }
</style>