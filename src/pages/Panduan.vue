
<template>
    <v-layout class="rounded">
        <v-app-bar color="#004F89">
            <div class="w-full m-2">
                <h1 class="font-extrabold font-sans  text-white line-clamp-2">Panduan<br>
                    Abdidaya Ormawa 2023</h1>
            </div>
        </v-app-bar>
        
    <v-container class="mt-20">
 
    <!-- <StepperMenu></StepperMenu> -->
        <CardMenu class="mt-40"></CardMenu>
        
    
    <bottom-navigation></bottom-navigation>
    </v-container>
</v-layout>
</template>

<script setup>
 import BottomNavigation from '@/components/BottomNavigation.vue'
 import Accordion from '@/components/panduan/accordion.vue'
import StepperMenu from '../components/panduan/StepperMenu.vue';
import CardMenu from '@/components/panduan/Cardmenu.vue';

</script>