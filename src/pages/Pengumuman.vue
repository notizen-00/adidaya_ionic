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
    <div class="mt-20  overflow-auto z-10">
        <v-card
        color="blue"
        variant="tonal"
        height="200"
        class="w-full relative z-99"
        >
        <p class="text-center text-md  font-serif pt-10">
            Cari informasi yang anda perlukan !
        </p>
        </v-card>
        <card-menu></card-menu>
        <div class="text-slate-500 -mt-20"> <v-icon class="mr-3">fas fa-bell</v-icon>Pengumuman</div>
        <list-pengumuman></list-pengumuman>
    </div>
    <bottom-navigation></bottom-navigation>
    </v-container>
    </v-layout>
</template>

<script setup>
    import CardMenu from '@/components/Helpdesk/CardMenu.vue';
 import BottomNavigation from '@/components/BottomNavigation.vue'
 import ListPengumuman from '@/components/Pengumuman/ListPengumuman.vue'
import { storeToRefs } from 'pinia';
 import {inject} from 'vue'
 const store = inject('store')
 const{ getMessage,getTotalConnections } = storeToRefs(store.deviceStore)
 const { getNotifications} = storeToRefs(store.notificationStore)
</script>