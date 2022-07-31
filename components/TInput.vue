<script setup>
const props = defineProps({
  modelValue: null,
  id: String,
  label: { type: String, required: true },
  variant: { type: String, default: 'primary' },
  type: { type: String, default: 'text' },
  error: String
})

const inputTypeData = reactive({
  updatedType: props.type,
  isPasswordVisible: false
})

const { updatedType: newType, isPasswordVisible } = toRefs(inputTypeData)

const updateInputClasses = computed(() => [
  {
    'border-gray-200 focus:ring-1 focus:ring-tt focus:border-tt focus:outline-none hover:border-tt':
      props.variant === 'primary'
  },
  {
    'border-red-500 focus:ring-1 focus:ring-red-500 visited:ring-0 focus-visible:border-red-500 focus:border-red-500 focus:outline-none':
      props.variant === 'danger'
  },
  {
    'pr-12': props.type === 'password'
  }
])

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
  newType.value = isPasswordVisible.value ? 'text' : 'password'
}
</script>

<script>
export default {
  inheritAttrs: false
}
</script>

<template lang="pug">
div(class='relative w-full my-2')
  input(
    v-bind='$attrs'
    :value='modelValue'
    :id='id'
    :type='newType'
    :class='updateInputClasses'
    class='w-full h-12 px-3 py-3 mt-1 transition-all duration-150 placeholder-transparent border rounded bg-neutral peer text-black focus:outline-none focus-visible:border-tt'
    @input='$emit("update:modelValue", $event.target.value)'
  )
  label(
    :class='variant === "danger" ? "peer-focus:text-red-500" : "peer-focus:text-tt"'
    class='p-1 bg-white absolute font-medium left-3 -top-2.5 text-gray-500 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:left-3 text-sm peer-focus:text-sm pointer-events-none'
    :for='id'
  ) {{ label }}
  div(v-if='error' class='mt-2 ml-1 text-sm text-red-500') {{ error }}
    svg(
      v-if='type !== "password"'
      class='absolute text-alert'
      style='top: 15px; right: 12px'
      fill='none'
      stroke='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    )
      path(
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      )
  span(
    v-if='type === "password"'
    class='absolute w-6 h-6 cursor-pointer text-neutral-gray-400 top-4 right-3'
  )
    IconEye(
      v-if='!isPasswordVisible'
      @click.prevent='togglePasswordVisibility'
    )
    IconEyeOff(
      v-if='isPasswordVisible'
      @click.prevent='togglePasswordVisibility'
    )
</template>
