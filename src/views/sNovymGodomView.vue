<template>

<div> 
    <div class="sNG">
        <div class="sNG_text">
            <p>Зимний снег искрится и сверкает –</p>
            <p>Чудная, прекрасная пора!</p>
            <p>С Новым годом ОВЕН поздравляет,</p>
            <p>Всем желая счастья и добра!</p>
        </div>
        <div class="finish_buttons finish_buttons_mobile">
            <router-link
            :to="{name:'home'}">                
            <div class="btn">
                В начало!
            </div> 
            
            </router-link> 
        </div>
        <div class="logo" @click="stopBlink()">
              <img src="imgs/logo.png">
        </div>
    </div>
    
          <div class="bottom">
          <div class="deer">
              <img src="imgs/deer.png">

          </div>

          <div class="deer blink_field" v-if="blink_flag">
              <img src="imgs/blink.png">
          </div>
          

      </div>



    </div>
</template>

<script>
export default{
    name: 'sNovymGodomView',
    data(){
        return{
            blink_flag: false,
            blink_interval: null,
        }
    },
    created(){
        //  this.blink()
    },
    methods:{
        blink(){
            this.blink_interval = setInterval(()=>{this.blink_flag=!this.blink_flag}, 500)
        },
        stopBlink(){
            if(this.blink_interval == null){
                this.blink()
            }else{
                this.blink_interval = null
            }
            
        }
    }

}
</script>

<style>
.deer{
    width: 100%;
    position: fixed;
    bottom: 0px;
}
.deer img{
    width: 100%
}
.deer.blink_field{
    position: absolute;
}
.sNG{
    position: fixed;
    top: 10vh;
    height: auto;
    font-size: 36px;

    padding: 30px;
    height: 60vh;
    width: 50vw;
    background-color: #008f86;
    margin-left: 100px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    color:#fff;
    white-space: nowrap;

}
.sNG h2{
    font-size: 54px;
}
.sNG .logo,
.sNG_text{
    margin-top:auto;

}
</style>