<template>
  <div id="app" class="nav-bar">
    <div class="cart">
      <p>Cart({{ count.length }})</p>
    </div>
    <Product @add-to-cart="UpdateCart" @remove-from-cart="removeFromCart" />
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
.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 15px;
}

.cart {
  margin-right: 25px;
  margin-top: 80px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}
</style>