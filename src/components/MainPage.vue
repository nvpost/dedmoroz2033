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
                <img src="/imgs/dedmoroz_left.png">
            </div>
            
            <div class="logo">
                <img src="/imgs/logo.png">
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: 'MainPage'
}
</script>

<style>
.bottom{
    background-color: #008f86;
    height: 10vh;
    min-height: 100px;
    position: fixed;
    bottom: 0px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.logo{
    padding:10px;
}
.dedmoroz{
    height: 850px;
}


.main_cloud_wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20vh;
}

.main_cloud{
    bottom: 400px;
    left: 300px;
    width: 600px; 
    padding: 20px;
    text-transform: uppercase;
    background-color: #008f86;
    font-size: 54px;
    color: white;
    text-align: center;
    font-weight: 600;
    border-radius: 20px;
    box-shadow: 6px 5px 10px 0 #858585;

    /* border: 8px solid #666;
	-webkit-border-radius: 30px;
	-moz-border-radius: 30px;
	border-radius: 30px;
	-webkit-box-shadow: 2px 2px 4px #888;
	-moz-box-shadow: 2px 2px 4px #888;
	box-shadow: 2px 2px 4px #888; */
}
.main_btn_field{
    display: flex;
    flex-direction: column;
    margin-left: 52vw;
}
.btn{
    background-color: #008f86;
    font-size: 24px;
    font-weight: 600;
    padding:15px;
    border-radius: 10px; 
    margin: 20px;
    color:#fff;
    width: 200px;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 6px 5px 10px 0 #858585;
    cursor: pointer;
    transition: all 0.3s;

}
.btn:hover{
    box-shadow:none
}



</style>