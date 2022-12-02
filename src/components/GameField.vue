<template>
    {{level_data}}
<div class="pribor_panel">
    
    <div class="left_side">
        <div class="pribor_item_place">
            <div class="pribor_item" 
                v-for="(devises_id, key) in level_data.devises_id" :key="key"
                @drop="drop"
                @dragover="allowDrop"
            >

                    <img :src="'imgs/pribor/'+devises_id+'.png'" :id="devises_id"
                        draggable="true"
                        @dragstart="dragStart"
                    >
                
                
            </div>
        </div> 
    </div>
    <div class="right_side">
        <div class="answer_blok droptarget" data-id="0"
            @drop="drop"
            @dragover="allowDrop"
        ></div>
        <div class="answer_blok" data-id="1"></div>
    </div>
</div>
</template>

<script>
export default{
    name: 'game_field',
    data(){
        return{
            level_data: this.$store.state.level1
        }
    },
    methods:{
        dragStart(event)  {
                event.dataTransfer.setData("id", event.target.id)
                console.log(event.target.id)
                console.log('dragStart')
              },
        dragging(event) {
                document.getElementById("demo").innerHTML =
                  "The p element is being dragged"+event;
              },
        allowDrop(event) {
                event.preventDefault();
              },
        drop(event) {
                event.preventDefault();
                console.log('dropped')
                var devise_id = event.dataTransfer.getData("id")
                console.log('devise_id', devise_id)
                event.target.appendChild(document.getElementById(devise_id));
              },       
    }
    
}
</script>