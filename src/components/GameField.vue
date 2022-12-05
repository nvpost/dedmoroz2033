<template>
    
  <ResultField :status="status" :level="level"/>
  <CheckList />
  <DedMorozSay :words="words"/>
<div class="pribor_panel">
    
    <div class="left_side">
        <div class="pribor_item_place">
            <div class="pribor_item" 
            
                v-for="(devises_id, key) in level_data.devises_id" :key="key"
                @drop="drop"
                @dragover="allowDrop"
                :id="'wrapper_'+devises_id"
            >

                    <img :src="'imgs/'+level+'/pribor/'+devises_id+'.png'" :id="devises_id"
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
import ResultField from './ResultField.vue'
import CheckList from './CheckList.vue'
import DedMorozSay from './DedMorozSay.vue'

export default{
    name: 'game_field',
    components:{
        ResultField,
        CheckList,
        DedMorozSay
    },
    data(){
        return{
            level: 'level'+this.$store.state.level,
            level_data: {},
            devise_ids:[0, 0],
            level_class: 'slable',
            status: false,
            words: ""
        }
    },
    created(){
        this.level_data = this.$store.state.levels[this.level]
        this.status = this.$store.state.levels[this.level].status
        this.words = this.level_data.text
        // document.querySelector('#app').style.backgroundImage = "url(./imgs/" + this.level + ".png)"
    },
    methods:{
        dragStart(event)  {
                event.dataTransfer.setData("id", event.target.id)
                console.log(event.target.id)
                // console.log('dragStart')
              },

        allowDrop(event) {
                event.preventDefault();
              },
        drop(event) {
                event.preventDefault();

                
                var devise_id = event.dataTransfer.getData("id")
                let position = event.target.getAttribute('data-id')
                console.log(position)
                // console.log('devise_id', devise_id)

                this.level_class='stable'
                if(event.target.classList[0]=='answer_blok' 
                 && !event.target.classList.contains('filled')){
                    this.devise_ids[position] = devise_id

                    event.target.classList.add('filled')
                    
                    event.target.appendChild(document.getElementById(devise_id))
                    if(this.devise_ids[0]!=0 && this.devise_ids[1]!=0){
                        this.check_place()
                    }
                }else if(event.target.classList[0]=='pribor_item' ){
                    event.target.classList.remove('filled')
                    // this.devise_ids.splice(this.devise_ids.indexOf(devise_id), 1)
                    position = this.devise_ids.indexOf(devise_id)
                    this.devise_ids[position] = 0
                    event.target.appendChild(document.getElementById(devise_id))
                }

                
                console.log(this.devise_ids)
                

              },
        check_place(){
            let rules = this.level_data.rule_id
            let check_flag = this.devise_ids.every(function(element, index) {

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
                this.youWin()
            }
            return check_flag
        },
        youWin(){
            this.$store.state.levels[this.level].status = true

            this.status = this.$store.state.levels[this.level].status

            this.words="Молодец!!!"
        }
        
           
    }
    
}
</script>