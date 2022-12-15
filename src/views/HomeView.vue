<template>

  <div>
      <div class="main_cloud_wrapper">
          <div class="main_cloud">
              Автоматизация новго года
          </div> 

      </div>

      <div class="main_btn_wrapper">
          <div class="main_btn_field">
              <router-link to="/game">
              <div class="btn">
                  Старт
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
  
}
</script>
