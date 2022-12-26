<template>

<div class="rules_page">

    <div class="rules_field">
   
        <RulesText />
    </div>
    <div class="rules_buttons">
        <MainButtons />
    </div>


</div>
<div class="bottom rules_bottom"></div>
</template>




<script>
import RulesText from '@/components/RulesText.vue'
import MainButtons from '../components/MainButtons.vue'

export default {
  name: 'RulesView',
  components:{
    RulesText,
    MainButtons
}

}
</script>
