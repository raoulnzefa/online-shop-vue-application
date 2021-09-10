<template>
<div>
 <h1>{{message}}</h1>
 <p>{{count}}</p>

 <p v-if="count > 5">This is greater than 5</p>
 <p v-else>This is less than 5</p>
 
 <button v-on:click="increment">Increment</button>
 <button v-on:click="decrement">Decrement</button>

<ul v-for="(animal,index) in animals" :key="index">
  <li>{{animal}}</li>
</ul>

 </div>
 
</template>

<script>
 export default {
   name:"HellowWold",
   data(){
     return{
       message:"Welcome to this project",
       count:0,
       animals:['cat','dog','rabbit']
     }
   },
   methods:{
     increment(){
       this.count++
     },
     decrement(){
       this.count--
     }
   }
 }
</script>

<style scoped>
h1{
  color:red;
}
</style>
