<template>
    <v-container>
        <v-expansion-panels
        v-model="panel"
      >
        <v-expansion-panel v-for="item in SubPage" class="m-5" >
          <v-expansion-panel-title @click="expandeds = !expandeds" :color="expandeds ? 'white':'info'">
            <div class="h-10 d-flex align-center"> 
            {{ item.kegiatan }}
            </div>
            <template v-slot:actions="{ expanded }">
                <v-icon size="15" :color="!expanded ? 'info' : 'red'" :icon="expanded ? 'fa-solid fa-close' : 'fa-solid fa-arrow-down'"></v-icon>
              </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <StepperMenu></StepperMenu>
            
            
          </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>

    </v-container>
</template>
<script setup>
    import {ref} from 'vue'
    import StepperMenu from '@/components/panduan/Stepper/StepperBab3.vue';
  
    const panel = ref(0)
    const expandeds = ref(false)
   const SubPage = ref([
      {
        id: 1,
        waktu: "09.00 - 14.00 WIB",
        kegiatan: "Filosofi Abdidaya Ormawa 2023",
        lokasi: "Gedung Keluarga Alumni UNEJ"
      }
     
    ]);
</script>