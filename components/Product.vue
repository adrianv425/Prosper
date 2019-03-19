<template>
  <div class="product">
    <img :src="'./assets/' + product.image" class="image">
    <p class="title">{{product.title}}</p>
    <p class="price">
      <span>$ {{product.price}}</span>
      <span class="qty" v-if="qtyInCart > 0">x{{qtyInCart}}</span>
    </p>
    <div class="controls">
      <button class="btn btn-danger" @click="addToCart" v-if="qtyInCart == 0">ADD TO CART</button>
      <div class="clearfix" v-else>
        <button class="btn btn-success" @click="nextSlide">View In Cart</button>
        <button class="btn btn-secondary" @click="dec">Remove</button>
      </div>
    </div>
  </div>
</template>
<script>
  import _ from 'lodash'
  import State from '../shoppingCartState.js'
  export default {
    props: ['product'],
    data() {
      return {
        shared: State.data
      }
    },
    methods: {
      addToCart () {
        State.add(this.product)
      },
      inc () {
        State.inc(this.product)
      },
      dec () {
        State.dec(this.product)
      },
      nextSlide(){
        this.$parent.$parent.$parent.nextSlide()
      }
    },
    computed: {
      qtyInCart () {
        // check for product in cart state
        var found = _.find(this.shared.cart, ['id', this.product.id])
        if(typeof found == 'object') {
          return found.qty
        } else {
          return 0
        }
      }
    }
  }
</script>
<style>
  .product {
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    height: 50%;
    padding: 3% 3%;
    margin-bottom: 1em;
  }
  .image {
    display: block;
    width: 100%;
  }
  .title {
    font-weight: bold;
    margin: 0.35em 0;
  }
  .price {
    margin: 0.35em 0;
    font-size: 0.9em;
  }
  .qty {
    float: right;
  }
  .add-btn, .inc, .dec {
    display: block;
    border: none;
    padding: 0.5em;
    outline: none;
  }
  .add-btn {
    width: 100%;
    background: #41B883;
    color: #fff;
  }
  .inc {
    width: 49%;
    background: #418cb8;
    margin-left: 1%;
    color: #fff;
    float: left;
  }
  .dec {
    width: 49%;
    background: #418cb8;
    color: #fff;
    margin-right: 1%;
    float: left;
  }
</style>