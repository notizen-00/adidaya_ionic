<template>

    <v-layout class="rounded">
        <v-app-bar color="#004F89">
            <div class="w-full m-2">
                <h1 class="font-extrabold font-sans  text-white line-clamp-2">Pusat Informasi dan <br>
                    Pengumuman</h1>
            </div>
        </v-app-bar>
    <v-container>
    

    <bottom-navigation></bottom-navigation>
    </v-container>
    </v-layout>
</template>

<script setup>
 import BottomNavigation from '@/components/BottomNavigation.vue'
</script>