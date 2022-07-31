<script setup>
import '@/assets/css/tailwind.css'
</script>

<template lang="pug">
t-header
div(class='flex flex-col items-center')
  div(class='flex-1 flex flex-col items-center overflow-y-auto max-w-screen-xl')
    slot
t-footer(id='contacto')
</template>
