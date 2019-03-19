<template>
  <div class="app">
  <Nav></Nav>
  <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <promo></promo>
      </swiper-slide>
      <swiper-slide>
      <div class="products">
        <div class="clearfix">
          <product v-for="product in products" :product="product" :key="product.id"></product>
        </div>
      </div>
      </swiper-slide>
      <swiper-slide>
      <div class="shopping-cart">
        <shopping-cart></shopping-cart>
      </div>
      </swiper-slide>
  </swiper>
  </div>
</template>

<script>
import ShoppingCart from './components/ShoppingCart.vue'
import Product from './components/Product.vue'
import Promo from './components/Promo.vue'
import Nav from './components/Nav.vue'
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'carrousel',
  created () {
    // fetch data from server
    // i m using dummy data for now..
    var dummy = [
      {id: 1, title: 'Cardinal Thive and Succeed Hoodie', price: 49.99, image: 'CardinalThriveSucceedHoodie.png'},
      {id: 2, title: 'Maroon Thrive and Succeed Shirt', price: 21.99, image: 'MaroonThriveSucceedShirt.png'},
      {id: 3, title: 'Orange Thrive and Succeed Crewneck', price: 39.99, image: 'OrangeThriveSucceedCrew.png'},
      {id: 4, title: 'Name of Product 4', price: 20, image: 'logo.png'},
      {id: 5, title: 'Cardinal Thive and Succeed Hoodie', price: 49.99, image: 'CardinalThriveSucceedHoodie.png'},
      {id: 6, title: 'Maroon Thrive and Succeed Shirt', price: 21.99, image: 'MaroonThriveSucceedShirt.png'},
      {id: 7, title: 'Orange Thrive and Succeed Crewneck', price: 39.99, image: 'OrangeThriveSucceedCrew.png'},
      {id: 8, title: 'Name of Product 4', price: 20, image: 'logo.png'}
    ];
    this.products = dummy
  },
  data () {
    return {
      products: [],
      swiperOption: {
        autoHeight: true
      }
    }
  },
  methods:{
    nextSlide(){
        this.swiper.slideNext(1000, false)
        this.swiper.updateAutoHeight(500)
    },
    prevSlide(){
        this.swiper.slidePrev(1000, false)
        this.swiper.updateAutoHeight(500)
    }
  },
  computed:{
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  components: { Product, ShoppingCart, swiper, swiperSlide, Promo, Nav }
}

</script>
<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss'
</style>

<style>

  html{
    height: 100%;
    width: 100%;
  }
  body {
    background-color: black;
    color: white;
    font-family: 'Raleway', sans-serif;
  }
  .clearfix:after {
     content: " ";
     visibility: hidden;
     display: block;
     height: 0;
     clear: both;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
}
  
</style>