<template>
  <div>
    <div class="form-style">
      <Form @submit.prevent>
        <div>
          <input
            type="text"
            placeholder="Enter Your name"
            v-model="name"
            required
          />
        </div>

        <div>
          <input
            type="textarea"
            placeholder="Description"
            v-model="description"
            required
          />
        </div>

        <div :style="{ marginTop: '10px' }">
          <label for="review">Review</label>
          <select
            name="reviewRating"
            id="reviewRating"
            v-model="reviewRating"
            required
          >
            <option value="">--Select--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div :style="{ marginTop: '10px' }">
          <button v-on:click="submitReview">Submit</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { EventBus } from "./EventBus";

export default {
  name: "Review",
  data() {
    return {
      name: null,
      description: null,
      reviewRating: null,
    };
  },
  beforeCreate() {
    console.log("Before created");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("Before mount");
  },
  mounted() {
    console.log("Mounted");
  },

beforeUpdate(){
  console.log("Before updated")
},
updated(){
  console.log("updated")
},
  methods: {
    submitReview() {
      if (this.name && this.description && this.reviewRating) {
        let productReview = {
          name: this.name,
          description: this.description,
          reviewRating: this.reviewRating,
        };
        console.log("sss", productReview);
        EventBus.$emit("update-review", productReview); //emit an event called update review and pass productReview as a argument - send data
        (this.name = null),
          (this.description = null),
          (this.reviewRating = null);
      }
    },
  },
};
</script>

<style scoped>
.form-style {
  margin-top: 10px;
}
body {
    font-family: tahoma;
    color:#282828;
    margin: 0px;
  }
.review-form {
    width: 400px;
    padding: 20px;
    margin: 40px;
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
</style>