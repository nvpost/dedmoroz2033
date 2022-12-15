<template>
<div class="game_field">
    {{$store.state.userData[this.level]}}
   <div class="game_wrapper">
        <ResultField :status="status" :level="level" :rules="level_data.onOffRules"/>
        
        <div class="pribor_panel">
            
            <div class="left_side">
                <div class="pribor_item_place" :style="'width: '+level_data.devise_range*61+'px'">
                    <div class="pribor_item" 

                        v-for="(devises_id, key) in level_data.devise_range" :key="key"
                        @drop="drop"
                        @dragover="allowDrop"
                        :id="'wrapper_'+devises_id"
                    >
                            <img 
                                v-if="user_state.indexOf(String(devises_id)) == -1"
                                :src="'imgs/'+level+'/pribor/'+devises_id+'.png'" :id="devises_id"
                                draggable="true"
                                @dragstart="dragStart"
                            >
                        
                        
                    </div>
                </div> 
            </div>
            <!-- <div class="middle_side">
                &#10140;
            </div> -->
            <div class="right_side">
                <!-- <div :class="('answer_blok ' + level_class)" data-id="0"
                    @drop="drop"
                    @dragover="allowDrop"
                ></div>
                <template v-if="(this.level_data.rule_id.length>1)">
                    <div :class="('strow ' + level_class)" :style="(this.level_data.rule_id.length == 3 ?'font-size:8px':'false')">&#8213;</div>
                    <div :class="('answer_blok ' + level_class)" data-id="1"
                        @drop="drop"
                        @dragover="allowDrop"
                    ></div>
                </template>
                <template v-if="(this.level_data.rule_id.length==3)">
                    <div :class="('strow ' + level_class)" :style="(this.level_data.rule_id.length == 3 ?'font-size:8px':'false')">&#8213;</div>
                    <div :class="('answer_blok ' + level_class)" data-id="2"
                        @drop="drop"
                        @dragover="allowDrop"
                    ></div>
                </template>  -->
                    <DropFielitem 
                        v-for="id in this.level_data.rule_id.length"
                        :l = "this.level_data.rule_id.length"
                        :level_class =  "level_class"
                        :id = "id-1"
                        :key = "id"
                        :level = "level"
                        :user_state = "user_state"
                        @drop_emit="drop"
                        @dragStart_emit="dragStart"
                    />   
            </div>
        </div>
    </div>
    <CheckList @level_emit="change_level" :current_level="level"/>
    <DedMorozSay :words="words"/>
</div>
</template>

<script>
import ResultField from './ResultField.vue'
import CheckList from './CheckList.vue'
import DedMorozSay from './DedMorozSay.vue'
import DropFielitem from './DropFielitem.vue'


export default{
    name: 'game_field',
    components:{
        ResultField,
        CheckList,
        DedMorozSay,
        DropFielitem
    },
    // emits: ["drop-emit", "dropEmit", "dragStartEmit", 'dragStart_emit'],
    data(){
        return{
            level: "",
            level_data: {},
            devise_ids:[],
            level_class: 'slable',
            status: false,
            user_state: [],
            words: "",
            blink_interval: null
        }
    },
    created(){
        this.setValues()
    
    },

    methods:{
        change_level(){
            // Добавить возможность перехода без перетаскивания
            this.devise_ids.forEach(i=>{
                i>0 ? document.getElementById('wrapper_'+i).appendChild(document.getElementById(i)): false
            })
            this.devise_ids=[]
            clearInterval(this.blink_interval)

            this.setValues()
            
        },

        setValues(){
            this.level= 'level'+this.$store.state.level,
            this.level_data = this.$store.state.levels[this.level]
            this.status = this.$store.state.levels[this.level].status
            this.words = this.level_data.status ? this.level_data.win_text : this.level_data.text

            this.level_class= this.level_data.status ? 'win' : 'slable'
            this.status = false

            if(this.$store.state.userData[this.level]){
                this.user_state = this.$store.state.userData[this.level]
            }
            

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
                // console.log(position)
                // console.log('devise_id', devise_id, '/position', position)
                console.log('event.target', event.target)

                this.level_class='stable'
                this.words=this.level_data.text

                this.$store.state.levels[this.level].status = false
                this.status = this.$store.state.levels[this.level].status



                if(event.target.classList[0]=='answer_blok' 
                 && !event.target.querySelector('img')){

                    this.devise_ids[position] = devise_id
                    event.target.appendChild(document.getElementById(devise_id))
                 
                    // Добавить проверку на перетаскивание из существуещего блока
                    let tmpArr = this.devise_ids.slice()
                    tmpArr = tmpArr.sort()

                    if(tmpArr[0]!=0){
                        this.check_place()
                    }
                }
                else if(event.target.classList[0]=='pribor_item' )
                {

                    // this.devise_ids.splice(this.devise_ids.indexOf(devise_id), 1)
                    position = this.devise_ids.indexOf(devise_id)
                    this.devise_ids[position] = 0
                    event.target.appendChild(document.getElementById(devise_id))
                }

                
                // console.log(this.devise_ids)
                

              },
        check_place(){
            let rules = this.level_data.rule_id
            let alt_rules = this.level_data.alt_rule_id

            let check_flag = this.devise_ids.every(function(element, index) {
                return parseInt(element) === parseInt(rules[index])
            })
            let alt_check_flag = false
            if(alt_rules){

                alt_check_flag = this.devise_ids.every(function(element, index) {
                    return parseInt(element) === parseInt(alt_rules[index])
                })
            }
            console.log(alt_check_flag)

            check_flag || alt_check_flag ? this.youWin() : this.youLose()

            return check_flag
        },
        youWin(){
            this.$store.state.levels[this.level].status = 'win'
            this.status = this.$store.state.levels[this.level].status

            this.level_class='win'

            this.words=this.level_data.win_text

            this.status = this.$store.state.userData[this.level] = this.devise_ids
        },
        youLose(){
            this.$store.state.levels[this.level].status = 'lose'
            this.status = this.$store.state.levels[this.level].status

            this.level_class='wrong'
            this.words=this.level_data.wrong_texts[Math.floor(Math.random() * this.level_data.wrong_texts.length)]

            this.status = this.$store.state.userData[this.level] = null
        }
           
    }
}
</script>