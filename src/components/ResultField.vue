<template>
<div>
<img :src="'./imgs/'+level+'/on.png'" class="res_img" 
:style="onStyle"

v-if="status">
</div>
</template>

<script>
export default {
    name: 'ResultField',
    props:['status', 'level'],
    data(){
        return {

            cords: this.$store.state.levels['level'+this.$store.state.level].onOffPosition,
            onStyle:""
        }
    },
    created(){
       this.onStyle = 'left: '+this.cords.left+'; top: '+this.cords.top
    }
    //
    
}
</script>