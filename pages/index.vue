<script setup>
const details = {
  card1: ['Refuerzo escolar', 'Preparación de exámenes', 'Business English'],
  card2: [
    'Gramática',
    'Speaking',
    'Grupos reducidos (10 max)',
    '2 Clases a la semana'
  ],
  card3: [
    '8 sesiones de 1 hora',
    'SIN FECHA de caducidad',
    'Elige tus temas de conversación'
  ]
}

const isInstagramWidgetLoaded = ref(false)

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  script: [
    {
      type: 'text/javascript',
      src: 'https://cdn2.woxo.tech/a.js#61ff204e4f2d5a0028e082e6',
      'data-usrc': true,
      defer: true,
      // Changed after script load
      callback: () => {
        isInstagramWidgetLoaded.value = true
      }
    }
  ]
})
</script>

<template lang="pug">
hero-banner
div(class='flex flex-col items-center')
  h2(id='comofunciona' class='text-xl xs:text-3xl font-extrabold text-center p-10') Déjate de excusas y aprende inglés en 4 simples pasos ;)
  pasos
div(class='w-full flex flex-col items-center')
  h2(id='precios' class='text-xl xs:text-3xl font-extrabold text-center mt-20 mb-10') Elige tu plan de clases por videoconferencia:
  div(class='grid grid-cols-1 lg:grid-cols-3 place-items-center gap-14')
    price-card(
      title='Particulares'
      :details='details.card1'
      :price='75'
      currencySymbol='€'
    )
    price-card(
      title='Grupales'
      :details='details.card2'
      :price='50'
      currencySymbol='€'
    )
    price-card(
      title='Bono Speaking'
      :details='details.card3'
      :price='130'
      currencySymbol='€'
    )
  div(class='flex flex-col justify-center items-start p-10')
    a(
      href="/#contacto"
      class='px-4 py-3 border-2 border-black rounded-md hover:bg-zinc-100 transition-all duration-200'
    ) Pide Información
  div(class='border-2 border-dashed border-tt-light w-4/6')
  h2(class='font-bangers text-6xl text-tt-dark w-4/6 mt-24 mb-8') Además
    span(class='text-tt-light') ...
    p(class='text-2xl font-medium mt-5') Puedes aprender gratis a través de nuestras redes sociales.
  div(
    class='w-full p-5'
    ref='instagramWidget'
    data-mc-src='ea25d29e-e2e2-44d7-bd9a-9557ccfb0063#instagram'
  )
</template>
