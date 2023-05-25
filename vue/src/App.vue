<script lang="ts">
import { defineComponent } from 'vue'
import WacthDemo01 from './views/WacthDemo01.vue'

export default defineComponent({
  data() {
    return {
      name: 'Waker',
      info: {
        city: '武汉'
      }
    }
  },
  methods: {
    changeName() {
      this.name = `Waker ${Date.now()}`
    },
    changeCity() {
      this.info.city = '上海'
    }
  },
  watch: {
    // name: {
    //   handler(newValue, oldValue) {
    //     console.log('%c 🍇 oldValue ', 'font-size:16px;color:#ffffff;background:#7ed6df', oldValue)
    //     console.log('%c 🍿 newValue ', 'font-size:16px;color:#ffffff;background:#130f40', newValue)
    //   },
    //   immediate: true
    // },
    info: {
      handler(newValue, oldValue) {
        console.log('%c 🍩 oldValue ', 'font-size:16px;color:#ffffff;background:#f0932b', oldValue)
        console.log('%c 🥃 newValue ', 'font-size:16px;color:#ffffff;background:#686de0', newValue)
      },
      deep: true
    }
  },
  components: { WacthDemo01 }
})
</script>

<template>
  <button @click="changeName">change name</button>
  <button @click="changeCity">change city</button>
  <main>{{ name }}</main>
  <main>{{ info.city }}</main>

  <br />

  <WacthDemo01 />
</template>

<style scoped></style>
