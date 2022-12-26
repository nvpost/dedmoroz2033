<template>
    <div class="MobileDedMoroz">
        <div class="MobileDedMoroz_words" v-html="words"></div>
        
        <div class="MobileDedMoroz_fon">
            <img :src="'imgs/'+current_level+'/dedCloudOn.png'" v-if="(current_level=='level9' && levels[current_level].status=='win')">
            <img :src="'imgs/'+current_level+'/dedmoroz.png'" v-else>
        </div>
    </div>
</template>

<script>
export default{
    name: 'MobileDedMoroz',
    props: [
        'words',
        'current_level'
    ]
}
</script>