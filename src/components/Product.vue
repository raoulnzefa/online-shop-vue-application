<template>
    <div id="Product">
  <div class="product">
   
    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p 
      v-else
      :style="{color:'red'}">
      Out of Stock</p>
      <div>
      <ul v-for="(detail,index) in details" :key="index">{{ detail }}</ul>
    </div>

      <div v-for="(variant,index) in variants" 
      :key="variant.variantId"
      class="color-box"
      :style="{backgroundColor:variant.variantColor}"
      @mouseover="updateProduct(index)">
       </div>

      <button 
      v-on:click="addToCart"
      :disabled="!inStock"
      :class="{disabledButton:!inStock }"
      >Add to cart</button>

      <button 
      v-on:click="removeFromCard"
      :disabled="!inStock"
      :class="{disabledButton:!inStock}"
      :style="{width:'auto' }">
      Remove From Card</button>
    </div>
   
    <div class="form-style">
  <Tabs :reviews = "reviews" @update-review ="updateReview"/>
  </div>

  </div>
</div> 
</template>

<script>
import Tabs from './Tabs.vue'

export default{
  components:{
    Tabs
  },
    name:"Product",
   data() {
    return {
    product: 'Socks',
    brand:"Vue Mastory",
    selectedVarient:0,
    details: ['80% cotton', '20% polyester'],
    variants: [
      {
        variantId: 2234,
        variantQuantity:40,
        variantColor: 'green',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
      },
      {
        variantId: 2235,
        variantQuantity:10,
        variantColor: 'blue',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
      }
    ] ,
    reviews:[] 
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart',this.variants[this.selectedVarient].variantId)
    },
  removeFromCard(){
      this.$emit('remove-from-cart',this.selectedVarient)
    },
    updateProduct(index){
        this.selectedVarient = index
    },
    updateReview(productReview){
      this.reviews.push(productReview)
    }
  },
  
  computed:{
      title(){
          return this.brand + ' ' + this.product
      },
      image(){
          return this.variants[this.selectedVarient].variantImage
      },
      inStock(){
          return this.variants[this.selectedVarient].variantQuantity
      }

  }
}
</script>

<style scoped>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}

.nav-bar {
  background: linear-gradient(-90deg, #84CF6A, #16C0B0);
  height: 60px;
  margin-bottom: 15px;
}

.product {
  display: flex;
}

img {
  border: 1px solid #d8d8d8;
  width:50%;
  margin: 50px;
  box-shadow: 0px .5px 1px #d8d8d8;
}

.product-image {
  flex-basis: 400px;
  margin-top: 70px;
  padding:70px
}

.product-info {
  margin-top: 10px;
  flex-basis: 500px;
  margin-top:150px ;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

button {
  margin-top: 30px;
  border: none;
  background-color: #1E95EA;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
  padding: 10px;
  margin-right: 5px;

  border-radius: 20px;
} 

.disabledButton {
  background-color: #d8d8d8;
}

.review-form {
  width: 30%;
  padding: 20px;
  border: 1px solid #d8d8d8;  
}

input {
  width: 100%;  
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}

.form-style {
  margin-top: 10px;
  flex-basis: 500px;
  margin-top:150px ;
  }
</style>