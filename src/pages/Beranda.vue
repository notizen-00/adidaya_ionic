<template>
    <v-container>
        <div class="w-full d-flex justify-between mt-5">
            <div class="w-1/2">
                <h1 class="font-bold font-sans text-slate-800 line-clamp-2">Mulai tentukan<br> pilihan Anda disini</h1>
            </div>
            <div class="w-1/2 text-end">
                <v-btn
                icon
                color="blue"
                variant="tonal"
                class="mr-3"
                >
                <v-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g id="_01_align_center" data-name="01 align center" transform="translate(0.032 0.032)">
                          <path id="Path_2" data-name="Path 2" d="M31.968,30.085,23.63,21.747a13.337,13.337,0,1,0-1.883,1.883l8.338,8.338ZM13.326,23.979A10.652,10.652,0,1,1,23.979,13.326,10.652,10.652,0,0,1,13.326,23.979Z" transform="translate(0 0)" fill="#232323"/>
                        </g>
                      </svg>
                      
                </v-icon>
            </v-btn>
            </div>
        </div>

        <CardMenu/>
        
        <ListHotel></ListHotel>
        <bottom-navigation></bottom-navigation>
    </v-container>
</template>
<script setup>
    import CardMenu from '@/components/beranda/CardMenu.vue'
    import GetLocation from '@/components/beranda/GetLocation.vue';
    import ListHotel from '@/components/beranda/ListHotel.vue';
    import BottomNavigation from '@/components/BottomNavigation.vue'
</script>