<template>

  <GameField/>
  <div class="dedmoroz_fon">
    <img src="imgs/dedmoroz.png">
  </div>
</template>

<script>
import GameField from './components/GameField'
// import ResultField from './components/ResultField.vue'

export default {
  name: 'App',
  components: {
    GameField,
    // ResultField
  }
}
</script>

