<template>
  <div class="content home">
    <h1>Hello!</h1>
    <div class="text">
      My name is Moch Rizki Eko Waluyo .I am a UI Designer and Editor based in Malang. 
      I am a UI developer/designer who interested in design and art, 
      also learn some programming language to support my skill.
    </div>
    <img src="/me.png" id="pic" alt="me"/>
  </div>
</template>

<script type="text/javascript">
  export default {
    methods: {
      appear: function() {
        document.getElementById('pic').className = 'visible'
      },
      disappear: function() {
        document.getElementById('pic').className = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    margin-bottom: 30px;
  }
</style>



