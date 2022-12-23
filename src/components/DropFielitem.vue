<template>

    <div class="middle_side" v-if="id==0">
                &#10140;
    </div>

    <div v-else
    :class="('strow ' + level_class)" 
    :style="(l == 3 ?'font-size:8px':'false')">
        &#8213;
    </div>

    <div :class="('answer_blok ' + level_class)" :data-id="id"
        @drop="local_drop"
        @dragover="allowDrop"
        @click="local_touch_setDevice"

    >
        <img v-if="user_state[id]"
            :src="'imgs/'+level+'/pribor/'+user_state[id]+'.png'" :id="user_state[id]"
            draggable="true"
            @dragstart="local_dragStart"

        >
    </div>

</template>

<script>

// @touchend="local_drop"
// @touchcancel="allowDrop"
// @touchstart="local_dragStart"
export default{
    name: 'DropFielditem',
    props:[
        'level_class', 'l', 'id', 'level', 'user_state'
    ],
    // emits: ["drop-emit", "dropEmit", "dragStartEmit", 'dragStart_emit'],
    methods:{
        allowDrop(event){
            event.preventDefault()
        },
        local_drop(event){
            event.preventDefault()
            this.$emit('drop_emit', event)
        },
        local_dragStart(event){
            this.$emit('dragStart_emit', event)
        },
        local_touch_setDevice(event){
            this.$emit('touch_setDevice_emit', event)
        }
        
    }

}
</script>