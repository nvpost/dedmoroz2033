<template>
    <div class="left_nodebook_panel">
        <div class="checklist">
            <h2>Список дел</h2>
            <ul>
                <li v-for="(level, key, idx) in levels" :key="key"
                @click="setLevel(idx)" 
                :style="key==current_level? 'font-weight: 600':false" 
                :class="$store.state.userData['level'+(idx+1)]? 'win': false"  
                >
                   {{level.title}}
                </li>
            </ul>
        </div>

        <div class="dedmoroz_fon">
            
            <img :src="'imgs/'+current_level+'/dedCloudOn.png'" v-if="(current_level=='level9' && levels[current_level].status=='win')">
            <img :src="'imgs/'+current_level+'/dedmoroz.png'" v-else>
        </div>


</div>
    
</template>

<script>
// :class="level.status=='win'? 'win': false" 
export default{
    name: 'CheckList',
    props: [
        'current_level'
    ],
    data(){
        return{
            levels: this.$store.state.levels
        }
    },
    methods:{
        setLevel(idx){
            let level=idx+1
            this.$store.state.level=level
            this.$emit('level_emit')
        }
    }
}
</script>