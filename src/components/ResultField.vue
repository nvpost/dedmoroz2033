<template>
<div class="game_main_field_wrapper">
        <div  class="game_main_field">
            <img :src="'./imgs/'+level+'/fon.png'">

        </div>

        <img :src="'./imgs/'+level+'/on.png'" class="res_img" 
        :style="onStyle"
        v-if="(status=='win' && rule)">

        <img :src="'./imgs/'+level+'/off.png'" class="res_img" 
        :style="onStyle"
        v-if="(status=='lose' && rule)">
</div>
</template>

<script>
// import DedMorozSay from './DedMorozSay.vue'
export default {
    name: 'ResultField',
    props:['status', 'level', 'rules'],
    // components:{
    //     DedMorozSay
    // },
    data(){
        return {

            cords: this.$store.state.levels['level'+this.$store.state.level].onOffPosition,
            onStyle:"",
            rule: true,
            blink_interval: ''
        }
    },
    created(){
       this.onStyle = 'left: '+this.cords.left+'; top: '+this.cords.top
       this.rule = true

    },
    watch: {
        status: 'statusChange' // 1
    },
    methods:{
        statusChange(){
            clearInterval(this.blink_interval)
            this.rule=true
            console.log('statusChange', this.rules, this.rule)
            if (this.rules == 'blink'){
                this.blink()
            }
            
        },
        blink(){
            let i = 0
            this.blink_interval = setInterval(()=>{
                this.rule = !this.rule 
                i++
                if(i>10){
                    clearInterval(this.blink_interval)
                    this.rule=true
                }
            }, 200)
        }
    }

    //
    
}
</script>