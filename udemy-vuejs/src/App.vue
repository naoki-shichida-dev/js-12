<template>
  <div id="app">
    <like-header>
      <h2>everyone</h2>
      <template v-slot:title>
        <h1>total good count</h1>
      </template>
      <h3>nice to me too</h3>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
    </like-header>
    <p>{{ number }}</p>
    <like-number :totalNumber="number" v-on:my-click="number = $event"></like-number>
    <like-number :totalNumber="6"></like-number>

    <button @click="currentComponent = 'MyHome'">MyHome</button>
    <button @click="currentComponent = 'MyAbout'">MyAbout</button>
    <component v-bind:is="currentComponent"></component>
    <div>
      <h2>form</h2>
      <label for="title">title</label>
      <input id="title"
             type="text"
             v-model="eventData.title"
      >
      <p>{{eventData}}</p>
    </div>
    // lazy, trim
    <div>
      <h2>form</h2>
      <label for="title">title</label>
      <input id="title"
             type="text"
             v-model="eventData.title"
      >
      <pre>{{eventData}}</pre>
    </div>
    <textarea id="detail"
              cols="30"
              rows="10"
              v-model="eventData.detail"
    ></textarea>
    <p style="white-space: pre">{{eventData.detail}}</p>
    <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
    <label for="isPrivate">closed</label>
    <input type="radio" id="free" value="$0" v-model="eventData.price">
    <label>free</label>
    <input type="radio" id="no free" value="$100" v-model="eventData.price">
    <label>no free</label>
    <p>place</p>
    <select>
      <option v-for="location in locations" :key="location">{{ location }}</option>
    </select>
  </div>
</template>

<script>
import LikeHeader from "@/components/LikeHeader.vue";
import MyHome from "@/components/MyHome.vue";
import MyAbout from "@/components/MyAbout.vue";

export default {
  data () {
    return {
      number: 10,
      currentComponent: "MyHome",
      locations: ["tokyo", "osaka", "fukuoka"],
      eventData:{
        title: 'title',
        isPrivate: false,
        price: 0
      }
    }
  },
  components: {
    LikeHeader,
    MyHome,
    MyAbout
  }
};
</script>

