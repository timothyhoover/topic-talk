<script setup>
const props = defineProps({
  modelValue: null,
  id: String,
  label: { type: String, required: true },
  variant: { type: String, default: 'primary' }
})

const updateTextAreaClasses = computed(() => [
  {
    'border-gray-300 focus:ring-1 focus:ring-tt focus:border-tt focus:outline-none hover:border-tt':
      props.variant === 'primary'
  }
])
</script>

<script>
export default {
  inheritAttrs: false
}
</script>

<template lang="pug">
div(class='relative')
  textarea(
    v-bind='$attrs'
    :value='modelValue'
    :id='id'
    :class='updateTextAreaClasses'
    class='w-full h-40 px-4 py-3 mt-1 placeholder-transparent transition-all duration-150 border rounded peer text-black focus:outline-none focus-visible:border-tt'
    @input='$emit("update:modelValue", $event.target.value)'
  )
  label(
    class='pointer-events-none p-1 bg-white absolute font-medium left-3 -top-2.5 text-gray-500 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-tt text-sm peer-focus:text-sm'
    :for='id'
  ) {{ label }}
</template>
