<template>
    <div class="w-full d-flex inline-block relative mt-5">
        <i class="absolute -left-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="49.409" height="47.579" viewBox="0 0 49.409 47.579">
            <path id="Polygon_2" data-name="Polygon 2" d="M19,0,38,33H0Z" transform="translate(0 19) rotate(-30)" :fill="fill"/>
        </svg>
        </i>
        <v-divider
        :thickness="9"
        :class="`border-opacity-100 border-${color}-400 mt-6`"
        color="warning"
        ></v-divider>
        </div>
        
</template>
<script setup>

    defineProps({
        color:String,
        fill:String

    })

</script>