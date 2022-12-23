<template>

  <div>
      <div class="main_cloud_wrapper">
          <div class="main_cloud">
              Автоматизация нового года
          </div> 

      </div>

      <div class="main_btn_wrapper">
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
                <a class="btn">
                    Правила
                </a>
            </div>
        </div>





      <div class="bottom">
          <div class="dedmoroz">
              <img src="imgs/dedmoroz_left.png">
          </div>
          
          <div class="logo">
              <img src="imgs/logo.png">
          </div>
      </div>
  </div>
</template>




<script>
export default {
  name: 'HomeView',
  data(){
        return{
            level_count: 9,
            level_win_count: 0
        }
    },
    created(){
            this.level_win_count = JSON.parse(localStorage.getItem('owenNG2033'))?
                Object.keys(JSON.parse(localStorage.getItem('owenNG2033'))).length:0
            
        }
  
}
</script>
