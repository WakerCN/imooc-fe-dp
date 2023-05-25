<template>
  <div>watch</div>
  <button @click="changeName">change name</button>
  <button @click="changeCity">change city</button>
  <div>{{ name }}</div>
  <div>{{ state.info.city }}</div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from 'vue'

const name = ref('Waker')
const state = reactive({ info: { city: '广州' } })

const changeName = () => {
  name.value = `Waker ${Date.now()}`
}

const changeCity = () => {
  state.info.city = '北京'
}

watch([name], (newValue, oldValue) => {
  console.log('%c 🥝 oldValue ', 'font-size:16px;color:#ffffff;background:#95afc0', oldValue)
  console.log('%c 🍡 newValue ', 'font-size:16px;color:#ffffff;background:#686de0', newValue)
})

watchEffect(() => {
  console.log('%c 🍭 name.value ', 'font-size:16px;color:#ffffff;background:#7ed6df', name.value)
})

watch(
  () => state,
  () => {
    console.log(
      '%c 🍅 state.info.city ',
      'font-size:16px;color:#ffffff;background:#f9ca24',
      state.info.city
    )
  },
  { deep: true }
)
</script>

<style scoped></style>
