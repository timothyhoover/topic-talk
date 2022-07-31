<script setup></script>

<template lang="pug">
div(class="flex items-center justify-between py-8")
  div(class="flex flex-col items-center md:items-start w-full px-5 justify-between space-y-5")
    img(class="w-full xs:w-4/6" src='@/assets/img/tt-hero-title.png', alt)
    p(class="text-base xs:text-lg px-5") Comienza la mayor aventura de tu vida: Abre las puertas de tu futuro, viaja, haz nuevos amigos, estudia y trabaja donde quieras.
    //- mobile img
    img(class='w-full xs:w-4/6 max-w-md md:hidden' src='@/assets/img/ari_vector.png', alt)
  //- desktop img
  div(class='md:flex justify-end hidden xs:w-4/6')
    img( src='@/assets/img/ari_vector.png', alt)
</template>
