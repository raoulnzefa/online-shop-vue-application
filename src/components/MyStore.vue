<template>
<div>   
    <div class="cart">
      <p>Cart({{ count.length }})</p>
    </div>
    <Product @add-to-cart="UpdateCart" @remove-from-cart="removeFromCart" /> 
    <!-- UpdateCard - Listerner -->
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "MyStore",
  components: {
    Product,
  },
  data() {
    return {
      count: [],
    };
  },
  methods: {
    UpdateCart(id) {
      this.count.push(id);
    },

    removeFromCart(index) {
      this.count.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.cart {
  margin-right: 25px;
  margin-top: 80px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}
</style>