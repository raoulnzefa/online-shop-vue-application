<template>
    <div class="training">
    <a v-bind:href="link">Googles</a>
    <div v-if="onSale">On Sale!</div>
    </div>
</template>

<script>
export default {
    name:"Training",
    data(){
    return {
        link:"www.google.com",
        onSale:false,
    }
    }
    
}
</script>
