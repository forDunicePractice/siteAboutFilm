<script setup lang="ts">

const props = defineProps(['data']);

</script>
<template>
 <div class="elem">
        <img :src="props.data.url" alt="imageFilm">
        <p> {{props.data?.name}}</p>
    </div>
</template>