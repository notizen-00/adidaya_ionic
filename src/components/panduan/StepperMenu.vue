<template>
    <div>
      <v-card class="mb-4">
        <v-card-text>
          <v-select
            v-model="steps"
            :items="[0, 1, 2, 3, 4]"
            label="-- Pilih Bab --"
          ></v-select>
        </v-card-text>
      </v-card>
  
      <v-stepper v-model="e1" class=" mb-20">
        <template v-slot:default="{ prev, next }">
          <v-stepper-header>
            <template v-for="n in steps" :key="`${n}-step`">
              <v-stepper-item
                :complete="e1 > n"
                :step="`Step {{ n }}`"
                :value="n"
                editable
              ></v-stepper-item>
  
              <v-divider
                v-if="n !== steps"
                :key="n"
              ></v-divider>
            </template>
          </v-stepper-header>
  
          <v-stepper-window>
            <v-stepper-window-item
           
              v-for="n in steps"
              :key="`${n}-content`"
              :value="n"
            >
              <v-card
                color="grey-lighten-1"
                height="400"
                class="relative"
              >
                <v-sheet
                height="200"
                class="-z-999 absolute"
                >
                sdf
                </v-sheet>
              </v-card>
            </v-stepper-window-item>
          </v-stepper-window>
  
          <v-stepper-actions
          
            :disable="disable"
            @click:prev="prev"
            @click:next="next"
          ></v-stepper-actions>
        </template>
      </v-stepper>
    </div>
  </template>
  <script>
  export default {
    data () {
      return {
        e1: 1,
        steps: 4,
      }
    },

    computed: {
      disable () {
        return this.e1 === 1 ? 'prev' : this.e1 === this.steps ? 'next' : undefined
      },
    },
  }
</script>