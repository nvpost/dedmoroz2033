<template>
    <div class="checklist">
        <h2>Список дел</h2>
        <ul>
            <li v-for="(level, key) in levels" :key="key">{{level.title}}</li>
        </ul>
    </div>
    
</template>

<script>
export default{
    name: 'CheckList',
    props: [
        'level'
    ],
    data(){
        return{
            levels: this.$store.state.levels
        }
    }
}
</script>