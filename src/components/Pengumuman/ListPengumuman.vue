<template>
    <v-card
      v-for="item in getNotifications"
      :key="item"
      class="mx-auto mt-3"
      color="info"
      theme="dark"
      variant="elevated"
      max-width="400"
      @click="detailNotification(item.id)"
       
    >
      <v-card-text class="text-xs py-2">
        <v-icon class="mb-4" color="yellow">fas fa-bullhorn</v-icon>
        <v-chip class="ml-2 -mt-2" color="yellow">{{ item.kategori }}</v-chip>
        <br>" {{ item.judul }} "
      </v-card-text>
  
      <v-card-actions>
        <v-list-item class="w-100">
          <template v-slot:prepend>
            <v-avatar
              color="grey-yellow-3"
             icon="fa-duotone fa-user-tie"
             size="small"
             class="-mr-3 -mb-2"
            ></v-avatar>
          </template>
  
          <div class="text-sm mt-5">{{ item.author }}</div>
  
          <template v-slot:append>
            <div class="justify-self-end">
              
              <v-icon class="me-2" icon="fas fa-comment" size="small"></v-icon>
              <span class="subheading">0</span>
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