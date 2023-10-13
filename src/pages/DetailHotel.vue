<template>
    <div>
        Detail

      
    </div>
</template>
<script setup>
import {onMounted} from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
onMounted(()=>{
    console.log(route.params.placeId)
})
</script>