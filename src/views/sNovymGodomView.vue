<template>

<div> 
    <div class="sNG">
        <div class="sNG_text">
            <h2>Поздравляем с новы годом зайчика!</h2>
        </div>
        <div class="logo" @click="stopBlink()">
              <img src="imgs/logo.png">
        </div>
    </div>
    
    <div class="logo">
              <img src="/imgs/logo.png">
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
         this.blink()
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
    height: 1520px;
}
.deer img{
    width: 100%
}
.deer.blink_field{
    position: absolute;
}
.sNG{
    margin-top: 50px;
    height: 70vh;
    width: 50vw;
    background-color: #008f86;
    margin-left: 100px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    color:#fff;

}
.sNG h2{
    font-size: 54px;
}
.sNG .logo{
    margin-top:auto;

}
</style>