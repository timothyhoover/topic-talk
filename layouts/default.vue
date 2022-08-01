<script setup>
import '@/assets/css/tailwind.css'
</script>

<template lang="pug">
div(class='flex flex-col justify-between w-full h-screen')
  t-header
  div(class='flex flex-col items-center')
    div(class='flex-1 flex flex-col w-full items-center overflow-y-auto max-w-screen-xl h-full')
      slot
  t-footer(id='contacto')
</template>
