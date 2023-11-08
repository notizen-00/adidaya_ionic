<template>
    <div>
      <v-expansion-panels
        v-model="panel"
        multiple
      >
        <v-expansion-panel>
          <v-expansion-panel-title>BAB 1</v-expansion-panel-title>
          <v-expansion-panel-text>
            Some content
          </v-expansion-panel-text>
        </v-expansion-panel>
  
        <v-expansion-panel>
          <v-expansion-panel-title>BAB 2</v-expansion-panel-title>
          <v-expansion-panel-text>
            Some content
          </v-expansion-panel-text>
        </v-expansion-panel>
  
        <v-expansion-panel>
          <v-expansion-panel-title>BAB 3</v-expansion-panel-title>
          <v-expansion-panel-text>
            Some content
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </template>
  <script>
  export default {
    data: () => ({
      panel: [0, 1],
      disabled: false,
    }),
  }
</script>