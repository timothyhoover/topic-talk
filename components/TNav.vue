<script setup>
import { set } from '@vueuse/core'

const navRef = ref(null)
const openNav = ref(false)

onClickOutside(navRef, () => {
  set(openNav, !openNav)
})
</script>

<template lang="pug">
button(
  class='md:hidden absolute w-11 h-11 right-0 top-10 appearance-none'
  aria-label='Menu Toggle'
  @click='openNav = !openNav'
  ref='navRef'
)
  span(
    class='md:hidden absolute w-4 h-[3px] transition-all ease-in-out origin-right rounded-full bg-black right-2 top-3'
    :class='{ "scale-x-0 opacity-0": openNav }'
  )
  span(
    class='md:hidden absolute w-6 h-[3px] transition-all ease-in-out -translate-y-1/2 rounded-full bg-black right-2 top-1/2'
    :class='{ "rotate-[135deg]": openNav }'
  )
  span(
    class='md:hidden absolute w-6 h-[3px] transition-all ease-in-out -translate-y-1/2 rounded-full bg-black right-2 top-1/2'
    :class='openNav ? "rotate-[225deg]" : "opacity-0"'
  )
  span(
    class='md:hidden absolute w-4 h-[3px] transition-all ease-in-out origin-left rounded-full bg-black right-2 bottom-3'
    :class='{ "scale-x-0 opacity-0": openNav }'
  )
teleport(to='body')
  transition(
    enter-active-class='duration-150 ease-out'
    enter-from-class='transform opacity-0'
    enter-to-class='opacity-100'
    leave-active-class='duration-150 ease-in'
    leave-from-class='opacity-100'
    leave-to-class='transform opacity-0'
  )
    div(v-if='openNav' class='bg-black/40 fixed left-0 w-full h-full md:hidden')
  //- mobile nav
  nav(
    class='w-full bg-transparent overflow-x-hidden pointer-events-none md:hidden top-40 fixed p-10 z-50 h-[calc(100vh-4.5rem)]'
  )
    ul(
      class='flex flex-col transition-transform bg-white rounded-md transform max-w-3xl pointer-events-auto  overflow-y-scroll shadow-md'
      :class='openNav ? "translate-x-0" : "translate-x-[150%]"'
    )
      a(href='/#comofunciona' class='border-b border-gray-300 font-medium p-5') Cómo Funciona
      a(href='/#precios' class='border-b border-gray-300 font-medium p-5') Precios
      a(href='/#contacto' class='border-b border-gray-300 font-medium p-5') Contacto
//- desktop nav
nav(class='px-5')
  ul(class='md:flex items-center hidden md:space-x-16 font-medium cursor-pointer')
    a(href='/#comofunciona' class='hover:underline') Cómo Funciona
    a(href='/#precios' class='hover:underline') Precios
    a(href='/#contacto' class='hover:underline') Contacto
</template>
