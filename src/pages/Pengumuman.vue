<template>

    <v-layout class="rounded">
        <v-app-bar color="#004F89">
            <div class="w-full m-2">
                <h1 class="font-extrabold font-sans  text-white line-clamp-2">Pusat Informasi dan <br>
                    Pengumuman</h1>
            </div>

            <v-btn class="text-none" stacked>
                <v-badge :content="getTotalConnections" color="error">
                  <v-icon class="mr-1">fa-duotone fa-user</v-icon>
                </v-badge>
              </v-btn>
        </v-app-bar>
    <v-container>
    
    <div class="mt-20 overflow-auto">

        <list-pengumuman></list-pengumuman>
        
    </div>
    <bottom-navigation></bottom-navigation>
    </v-container>
    </v-layout>
</template>

<script setup>
 import BottomNavigation from '@/components/BottomNavigation.vue'
 import ListPengumuman from '@/components/Pengumuman/ListPengumuman.vue'
import { storeToRefs } from 'pinia';
 import {inject} from 'vue'
 const store = inject('store')
 const{ getMessage,getTotalConnections } = storeToRefs(store.deviceStore)
 const { getNotifications} = storeToRefs(store.notificationStore)
</script>