<template>
    <v-card
      v-for="item in getNotifications"
      :key="item"
      class="mx-auto mt-3 overflow-auto"
      color="info"
      theme="dark"
      variant="tonal"
      max-width="400"
      @click="detailNotification(item.id)"
       
    >
      <v-card-text class="text-xs py-2 bg-blue-200 h-36">
        <v-icon class="mb-4" color="blue">fas fa-bullhorn</v-icon>
        <v-chip class="ml-2 -mt-2" color="blue">{{ item.kategori }}</v-chip>
        <br>" <div class="text-slate-500 mt-1 mb-1"> {{ item.judul }} </div> "
      </v-card-text>
  
      <v-card-actions>
        <v-list-item class="w-100">
          <template v-slot:prepend>
            <v-avatar
              color="blue"
             icon="fa-duotone fa-user-tie"
             size="20"
             class="-mr-3"
            ></v-avatar>
          </template>
  
          <div class="text-sm">{{ item.author }}</div>
  
          <template v-slot:append>
            <div class="justify-self-end">
              
              <v-icon class="me-1" icon="fas fa-comment" size="20"></v-icon>
              <span class="subheading text-sm">0</span>
            </div>
          </template>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </template>

  <script setup>
    import { storeToRefs } from 'pinia';
    import {inject} from 'vue'
    import {useRouter} from 'vue-router'
    const store = inject('store')
    const router = useRouter()
    
    const {getNotifications} = storeToRefs(store.notificationStore)

    const detailNotification = (value) =>{
    router.push('/detail_pengumuman/'+value)

    }
  </script>