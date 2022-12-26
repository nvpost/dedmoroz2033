<template>

            <div class="main_btn_field">
                <router-link to="/game" v-if="level_win_count>0">
                <div class="btn">
                    Продолжить ({{level_win_count}} из {{level_count}})
                </div> 
            </router-link>

            <router-link :to="{
                name:'StartNewGame'
                }">                
            <div class="btn">
                Начать новую игру
            </div> 
            
            </router-link> 

            <router-link v-if="!rules"
            :to="{
                name:'RulesView'
                }">                
            <div class="btn">
                Правила
            </div> 
            
            </router-link> 

            <router-link v-else
            :to="{name:'home'}">                
            <div class="btn">
                Главная
            </div> 
            
            </router-link> 

            <router-link
            :to="{name:'sNovymGodomView'}">                
            <div class="btn">
                Поздравление
            </div> 
            
            </router-link> 
            </div>

</template>

<script>
    export default {
        name: 'MainButtons',
        data(){
        return{
            level_count: 9,
            level_win_count: 0,
            rules:false
        }
        },
        created(){
                this.level_win_count = JSON.parse(localStorage.getItem('owenNG2033'))?
                    Object.keys(JSON.parse(localStorage.getItem('owenNG2033'))).length:0
                
                    
                    this.rules =  document.location.href.indexOf('rules')>-1
                    console.log(this.rules)
                }
            
        }

</script>