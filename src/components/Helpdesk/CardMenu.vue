<template>

    <v-container>
        <div class="d-flex justify-center relative">

        
        <v-card
        width="100"
        height="100"
        color="blue"
        class="m-2 absolute -top-20 z-999"
        v-for="item in listMenu"
        @click="routeTo(item.path)"
        :key="item">
            
        <div class="d-flex justify-center mt-5">
            <v-icon color="white" size="30">
                {{ item.icon }}
            </v-icon>
        </div>
            <div class="text-xs mt-3 d-flex justify-center ">
                {{ item.menu }}
            </div>
        </v-card>
        </div>
    </v-container>

</template>
<script setup>
import {inject,ref} from 'vue'
import {useRouter} from 'vue-router'
const store  = inject('store')
const router = useRouter();

const routeTo = (value) =>{
    router.push(value)
}

const listMenu = ref([
    {
        id:1,
        menu:'FAQ',
        icon:'fa-duotone fa-comments',
        path:'/faq'    
    },
    {
        id:2,
        menu:'Chat Support',
        icon:'fa-duotone fa-headset',
        path:'/support'
    },
    {
        id:3,
        menu:'Panduan',
        icon:'fa-duotone fa-book-open-cover',
        path:'/panduan'
    }
])
</script>