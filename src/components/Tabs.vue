<template>
    <div>
<span class="tab" 
:class="{activeTab : selectedTab === tab}"
 :style="{marginTop:'10px'}" 
 v-for="(tab,index) in tabs" :key="index"
 v-on:click="selectedTab = tab">
    {{tab}} 
</span>

   <div v-show="selectedTab === 'Reviews'">
        <h1>Product review</h1>
        <p v-if="!reviews.length">There is no review</p>

    <ul v-for="(review,index) in reviews" :key="index">
        <li>{{review.name}}</li>
        <li>{{review.description}}</li>
        <li>{{review.reviewRating}}</li>
    </ul>
   </div>

    <div v-show="selectedTab === 'Make a Review'">
        <Review/>
    </div>
</div>
</template>

<script>

import Review from './Review.vue'
export default {
    props:{
        reviews:{
            type:Array
              }
    },
    name:"Tabs",
    components:{
        Review
    },
     data(){
        return {
            tabs:['Reviews','Make a Review'],
            selectedTab:'Reviews'
        }
    },
}
</script>

<style scoped>
.tabs {
    margin-left: 20px;
    cursor: pointer;
  }
.activeTab {
    color: #16C0B0;
    text-decoration: underline;
  }
</style>