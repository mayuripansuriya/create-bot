<template>
  <span>
    <Header />
    <IndustrySelection />
  </span>
</template>

<script>
import Header from './components/Header.vue'
import IndustrySelection from './components/IndustrySelection.vue'

export default {
  name: 'App',
  components: {
    Header,
    IndustrySelection,
  },
}
</script>
