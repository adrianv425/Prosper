<template>
  <div class="promo">
    <div class="centered">
      <img :src="'./assets/logo.png'" width="100%" height="100%">
    </div>
    <div class="container text-center">
      <div>Prosper&Co.</div>
    </div>
    <div class="centeredButton">
    <button id="nextSlide" ref="nextSlide" type="button" class="btn btn-danger" width="100%" @click="nextSlide">Enter Store</button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },  methods:{
    nextSlide(){
        this.$parent.$parent.$parent.nextSlide()
      }
  },
  }
</script>

<style>
.centered{
    margin:auto;
    width: 50%;
    max-width: 300px;
    max-height: 395px; 
}
.centeredButton{
  width: 50%;
  margin: auto;
  max-width: 107px;
}
.text-center{
    text-align: center;
    font-size: 36px;
}
.promo{
    height: 100%;
}
</style>