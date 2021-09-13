<template>
  <div class="nav-bar" >
    <h2>
      <router-link class="nav-item" to="/home">Home</router-link>
      <router-link class="nav-item" to="/about">About</router-link>
    </h2>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NavBar",
  tabs:['Home','About Us']
};
</script>

<style scoped>
.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 15px;
 
}

.nav-item{
    padding: 20px;
    text-decoration: none;
    color: white;
}

</style>