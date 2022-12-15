<template>
  <div class="game_view">
    <GameField/>
  </div>
</template>


<script>
import GameField from '@/components/GameField'
// import ResultField from './components/ResultField.vue'
export default {
  name: 'GameView',
  components: {
    GameField,
    // ResultField
  }
}
</script>