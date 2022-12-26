

  <template>
    <div class="nav_header">
        <div class="nav_nemu">
        <nav>
            <router-link to="/">Главная</router-link>
        </nav>
        </div>
        <div class="nav_levels">
        <span @click="showMobileMunu">Уровни</span>
        </div>
    </div>
  </template>

<script>
export default{
    name: 'NavHeader',
    methods:{
        showMobileMunu(){
            document.querySelector('.left_nodebook_panel').style.display='block'
        }
    }
}
</script>