<template lang="pug">
footer(class='bg-tt-light py-5 xs:py-12 mt-5 md:mt-10')
  div(class='max-w-screen-xl mx-auto px-4')
    div(class='flex flex-col md:flex-row')
      //-important links
      div(class='md:hidden flex-1 order-1 md:w-3/6 space-y-10')
        h3(class='flex-1 text-2xl xs:text-4xl text-white font-bold py-5') Contáctanos y cuéntanos lo que necesitas
      div(class='md:hidden order-3 md:order-2 py-5 flex-1 space-y-2 text-xl text-tt-dark')
        p(class='mb-5') Puedes hacerlo también a través de:
        p E-mail: info@topictalkingles.com
        p Whatsapp: (+34) 722 297 641
      div(class='hidden md:flex flex-col flex-1')
        div(class='flex-1 order-1 md:w-3/6 space-y-10')
          h3(class='flex-1 text-4xl text-white font-bold py-5') Contáctanos y cuéntanos lo que necesitas
        div(class='order-3 md:order-2 py-5 flex-1 space-y-2 text-xl text-tt-dark')
          p(class='mb-5') Puedes hacerlo también a través de:
          p E-mail: info@topictalkingles.com
          p Whatsapp: (+34) 722 297 641
        social-icons(class='hidden md:flex')
      //-social media icons
      social-icons(class='md:hidden')
      form(
        name="contact" 
        action="/success" 
        method="POST" 
        data-netlify="true"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        class='order-2 md:order-4 shadow rounded-lg p-5 xs:p-10 bg-white w-full md:w-3/6 space-y-4'
      )
        input(type="hidden" name="form-name" value="contact")
        t-input(
          id="name"
          placeholder='Name'
          name='nombre'
          label='Nombre'
        )
        t-input(
          id="apellidos"
          placeholder='Apellidos'
          label='Apellidos'
          name='apellidos'
        )
        t-input(
          id="email"
          type="email"
          placeholder='Correo Electrónico'
          label='Correo Electrónico'
          name='email'
        )
        t-textarea(
          id="mensaje"
          placeholder='Mensaje'
          label='Mensaje'
          name='mensaje'
          type='textarea'
        )
        button(
          type='submit'
          class='px-5 py-3 rounded-md border-2 w-full border-tt text-tt font-medium hover:bg-tt-light hover:bg-opacity-30 transition-all duration-150'
        ) Submit
</template>
