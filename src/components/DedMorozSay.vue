<template>
    <div class="ded_moroz_cloud" v-html="words">

    </div>
    
</template>

<script>
export default{
    name: 'DedMorozSay',
    props:[
        'words'
    ]
}
</script>