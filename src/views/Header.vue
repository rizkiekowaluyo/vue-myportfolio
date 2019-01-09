<template>
  <div class="header">
    <div class="container">
      <nav class="navbar-container navbar-transparent">
        <div class="navbar-left">
          <a class="navbar-item text-bold" :href="home_url">My <span class="blue">Portofolio</span></a>
        </div>
      
      <menunav></menunav>
      </nav>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuNav from "@/components/MenuNav.vue";

export default {
  components: {
    'menunav': MenuNav
  },
  data(){
    return{
      home_url:document.URL,
    }
  }
};
</script>
