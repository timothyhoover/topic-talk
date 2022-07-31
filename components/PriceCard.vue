<script setup>
const props = defineProps({
  details: Array || Object,
  price: Number || String,
  currencySymbol: String,
  discountedPrice: Number || String,
  title: String
})
</script>

<template lang="pug">
div(class='shadow-lg rounded-2xl w-64 xs:w-80 p-7 border-4 text-gray-600 border-tt bg-white')
  div(class='flex flex-col justify-between text-3xl')
    p(class='font-medium mb-4') {{ props.title }}
    p(class='font-bold flex items-end') {{ props.price }} {{ props.currencySymbol }}
      span(class='text-sm pl-1') / mes
    p(
      v-if='props.discountedPrice',
      class='text-6xl text-purple-600'
    ) {{ props.currencySymbol }} {{ props.price }}
      span(class='text-sm pl-1') mes
  p(class='text-md mt-4') Incluido :
  ul(
    v-for='detail in props.details',
    class='text-sm w-full mt-6 mb-6 text-gray-600',
  )
    li(class='mb-3 flex items-center')
      svg(
        class='h-6 w-6 mr-2 fill-tt',
        xmlns='http://www.w3.org/2000/svg',
        stroke='currentColor',
        fill='currentColor',
        viewBox='0 0 1792 1792'
      )
        path(
          d='M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
        )
      | {{ detail }}
  slot
</template>
