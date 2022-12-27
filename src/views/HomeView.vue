<template>

  <div>
      <div class="main_cloud_wrapper">
          <div class="main_cloud">
              Автоматизация нового года
          </div> 

      </div>

      <div class="main_btn_wrapper">
            <div class="main_btn_field">
                <MainButtons />
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
import MainButtons from '../components/MainButtons.vue'

export default {
  name: 'HomeView',
  components:{
    MainButtons
},


  
}
</script>
