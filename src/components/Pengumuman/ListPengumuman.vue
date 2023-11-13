<template>
    <v-card
      v-for="item in getNotifications"
      :key="item"
      class="mx-auto mt-3"
      color="info"
      theme="dark"
      max-width="400"
      @click="detailNotification(item.id)"
       
    >
      <v-card-text class="text-xs py-2">
        <v-icon class="mb-4">fas fa-bullhorn</v-icon>
        <v-chip class="ml-2" variannt="tonal" color="">{{ item.kategori }}</v-chip>
        <br>" {{ item.judul }} "
      </v-card-text>
  
      <v-card-actions>
        <v-list-item class="w-100">
          <template v-slot:prepend>
            <v-avatar
              color="grey-darken-3"
              image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-avatar>
          </template>
  
          <span class="text-sm">{{ item.author }}</span>
  
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
    const store = inject('store')

    const {getNotifications} = storeToRefs(store.notificationStore)

    const detailNotification = (value) =>{
        alert(value)

    }
  </script>