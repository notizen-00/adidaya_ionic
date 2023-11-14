<template>
    <v-container>
        <v-expansion-panels
        v-model="panel"
        :readonly="readonly"
        multiple
       
        
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
            <component v-if="item.id == 1" :is="StepperMenu2A" />
            <component v-if="item.id == 2" :is="StepperMenu2B" />
            
          </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>

    </v-container>
</template>
<script setup>
    import {ref} from 'vue'
    import StepperMenu2A from '@/components/panduan/Stepper/StepperBab2A.vue';
    import StepperMenu2B from '@/components/panduan/Stepper/StepperBab2B.vue';
    const panel = ref(false)
    const expandeds = ref(true)
   const SubPage = ref([
      {
        id: 1,
        waktu: "09.00 - 14.00 WIB",
        kegiatan: "Sejarah Perjalanan Abdidaya",
        lokasi: "Gedung Keluarga Alumni UNEJ"
      },
      {
        id: 2,
        waktu: "14.00 - 16.00 WIB",
        kegiatan: "Abdidaya 2023",
        lokasi: "Gedung Soejarwo, Lantai V"
      }
    ]);
</script>