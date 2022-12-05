<template>
<div class="game_main_field_wrapper">
        <div  class="game_main_field">
            <img :src="'./imgs/'+level+'/level_fon1.png'">

        </div>

        <img :src="'./imgs/'+level+'/on.png'" class="res_img" 
        :style="onStyle"
        v-if="status">
</div>
</template>

<script>
// import DedMorozSay from './DedMorozSay.vue'
export default {
    name: 'ResultField',
    props:['status', 'level'],
    // components:{
    //     DedMorozSay
    // },
    data(){
        return {

            cords: this.$store.state.levels['level'+this.$store.state.level].onOffPosition,
            onStyle:"",
            words:""
        }
    },
    created(){
       this.onStyle = 'left: '+this.cords.left+'; top: '+this.cords.top
       this.words = this.$store.state.levels['level'+this.$store.state.level].text
    }
    //
    
}
</script>