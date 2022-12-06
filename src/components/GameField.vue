<template>
<div class="game_field">
   <div class="game_wrapper">
        <ResultField :status="status" :level="level"/>
        
        <div class="pribor_panel">
            
            <div class="left_side">
                <div class="pribor_item_place">
                    <div class="pribor_item" 
                    
                        v-for="(devises_id, key) in level_data.devise_range" :key="key"
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
            <div class="middle_side">
                &#10140;
            </div>
            <div class="right_side">
                <div :class="('answer_blok ' + level_class)" data-id="0"
                    @drop="drop"
                    @dragover="allowDrop"
                ></div>
                <div :class="('strow ' + level_class)">&#8213;</div>
                <div :class="('answer_blok ' + level_class)" data-id="1"
                    @drop="drop"
                    @dragover="allowDrop"
                ></div>
                <template v-if="(this.level_data.rule_id.length==3)">
                    <div :class="('strow ' + level_class)">&#8213;</div>
                    <div :class="('answer_blok ' + level_class)" data-id="3"
                        @drop="drop"
                        @dragover="allowDrop"
                    ></div>
                </template>    
            </div>
        </div>
    </div>
    <CheckList @level_emit="change_level"/>
    <DedMorozSay :words="words"/>
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
            level: "",
            level_data: {},
            devise_ids:[],
            level_class: 'slable',
            status: false,
            words: "",
            blink_interval: null
        }
    },
    created(){
        // this.level= 'level'+this.$store.state.level,
        // this.level_data = this.$store.state.levels[this.level]
        // this.status = this.$store.state.levels[this.level].status
        // this.words = this.level_data.text

        // this.level_data.rule_id.forEach(()=>{
        //     this.devise_ids.push(0)
        // })
        this.setValues()
        


    },

    methods:{
        change_level(){
            
            this.devise_ids.forEach(i=>{
                document.getElementById('wrapper_'+i).appendChild(document.getElementById(i))
            })
            this.devise_ids=[]
            clearInterval(this.blink_interval)

            this.setValues()
            
            // this.level = 'level'+this.$store.state.level,
            // this.level_data = this.$store.state.levels[this.level]
            // this.status = this.$store.state.levels[this.level].status
            // this.words = this.level_data.text

            // this.level_class= 'slable'
            // this.status = false
        },

        setValues(){
            this.level= 'level'+this.$store.state.level,
            this.level_data = this.$store.state.levels[this.level]
            this.status = this.$store.state.levels[this.level].status
            this.words = this.level_data.text

            this.level_class= 'slable'
            this.status = false

            this.level_data.rule_id.forEach(()=>{
                this.devise_ids.push(0)
            })
        },

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
                this.words=this.level_data.text

                if(event.target.classList[0]=='answer_blok' 
                 && !event.target.classList.contains('filled')){
                    this.devise_ids[position] = devise_id

                    event.target.classList.add('filled')
                    
                    event.target.appendChild(document.getElementById(devise_id))

                    // если нет нулевых значений пока не работает
                    // let noZerroFlag = false
                    let tmpArr = this.devise_ids.sort()
                    console.log('tmpArr',tmpArr)
                    console.log('this.devise_ids',this.devise_ids)
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

                this.level_class='wrong'
                this.words=this.level_data.wrong_text

            }else{
                console.log('all_ok')
                this.level_class='win'
                this.youWin()
            }
            return check_flag
        },
        youWin(){
            // this.$store.state.levels[this.level].status = !this.$store.state.levels[this.level].status 
            // this.status = this.$store.state.levels[this.level].status
            let i = 0
            this.blink_interval = setInterval(()=>{
                this.$store.state.levels[this.level].status = !this.$store.state.levels[this.level].status 
                this.status = this.$store.state.levels[this.level].status
                i++
                if(i>10){
                    clearInterval(this.blink_interval)
                }
            }, 300)



            this.words=this.level_data.win_text
        }
        
           
    }
    
}
</script>