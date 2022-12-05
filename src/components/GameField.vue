<template>
    {{level_data}}
<div class="pribor_panel">
    
    <div class="left_side">
        <div class="pribor_item_place">
            <div class="pribor_item" 
            
                v-for="(devises_id, key) in level_data.devises_id" :key="key"
                @drop="drop"
                @dragover="allowDrop"
                :id="'wrapper_'+devises_id"
            >

                    <img :src="'imgs/pribor/'+devises_id+'.png'" :id="devises_id"
                        draggable="true"
                        @dragstart="dragStart"
                    >
                
                
            </div>
        </div> 
    </div>
    <div class="right_side">
        <div :class="('answer_blok ' + level_class)" data-id="0"
            @drop="drop"
            @dragover="allowDrop"
        ></div>
        <div :class="('answer_blok ' + level_class)" data-id="1"
            @drop="drop"
            @dragover="allowDrop"
        ></div>
    </div>
</div>
</template>

<script>
export default{
    name: 'game_field',
    data(){
        return{
            level_data: this.$store.state.level1,
            devise_ids:[],
            level_class: 'slable'
        }
    },
    methods:{
        dragStart(event)  {
                event.dataTransfer.setData("id", event.target.id)
                console.log(event.target.id)
                // console.log('dragStart')
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

                
                var devise_id = event.dataTransfer.getData("id")
                // console.log('devise_id', devise_id)

                this.level_class='stable'
                if(event.target.classList[0]=='answer_blok' 
                 && !event.target.classList.contains('filled')){
                    this.devise_ids.push(devise_id)

                    event.target.classList.add('filled')
                    console.log('addclass', event.target.classList)
                    event.target.appendChild(document.getElementById(devise_id))
                    if(this.devise_ids.length==2){
                        this.check_place()
                    }
                }else if(event.target.classList[0]=='pribor_item' ){
                    event.target.classList.remove('filled')
                    this.devise_ids.splice(this.devise_ids.indexOf(devise_id), 1)
                    event.target.appendChild(document.getElementById(devise_id))
                }

                
                console.log(this.devise_ids)
                
                
                

              },
        check_place(){
            let rules = this.level_data.rule_id
            let check_flag = this.devise_ids.every(function(element, index) {
                console.log(index, element)
                return parseInt(element) === parseInt(rules[index])
            })
            console.log(check_flag)
            if(!check_flag){
                // this.devise_ids.forEach(i=>{
                //     document.getElementById('wrapper_'+i).appendChild(document.getElementById(i))
                // })
                // this.devise_ids=[]
                this.level_class='wrong'

            }else{
                console.log('all_ok')
                this.level_class='win'
            }
            console.log()
            return check_flag
        },
           
    }
    
}
</script>