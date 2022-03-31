<script setup lang="ts">

const props = defineProps(['data']);
//console.log(props.data);
</script>
<template>
    <div class="actorCard"> 
        <!-- <img class="actorPhoto" :src="props.data.urlA" alt=""> -->
       <p>Актеры: {{props.data.Actors}}</p>
    </div>
    
</template>
