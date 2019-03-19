<template>
  <div class="cart">
    <p class="cart-title">Shopping Cart</p>
    <div v-if="total == 0">
      <p class="cart-empty">Your Shopping Cart is Empty!</p>
      <button class="btn btn-lg btn-danger" @click="prevSlide">Shop Now</button>
    </div>
    <div class="items" v-else>
      <div class="item clearfix" v-for="item in items" :key="item.id">
        <img :src="'./assets/' + item.image" class="item-image">
        <div class="item-details">
          <p class="item-title">{{item.title}}</p>
          <p class="item-price">
            <button v-if="item.qty == 1" class="btn btn-sm btn-danger" @click="dec(item)">x</button>
            <button v-else class="btn btn-sm btn-secondary" @click="dec(item)">-</button>
            <span> x{{item.qty}} </span>
            <button class="btn btn-sm btn-success" @click="inc(item)">+</button>
            <span class="right">{{item.qty * item.price | currency}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="cart-total">
      <span>Total</span>
      <span class="right">{{total | currency}}</span>
    </div>
    <div v-if="total != 0">
      <p>Bitcoin Now Accepted!</p>
      <button class="btn btn-lg btn-primary">Pay Now</button>
    </div>
      
  </div>
</template>
<script>
  import State from '../shoppingCartState'
  import _ from 'lodash'
  export default {
    props: ['item'],
    data() {
      return {
        items: State.data.cart
      }
    },
    computed: {
      total () {
        return _.sumBy(this.items, function(item) {
          return (item.price * item.qty)
        })
      }
    },
    methods:{
      inc (item) {
        State.inc(item)
      },
      dec (item) {
        State.dec(item)
      },
      prevSlide(){
        this.$parent.$parent.$parent.prevSlide();
      }
    },
    filters:{
      currency: function(value){
        if (typeof value !== "number") {
          return value;
        }
        var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });
    return formatter.format(value);
      }
    }
  }
</script>
<style>
  .cart{
    height: 100%;
  }
  .shopping-cart {
    height: 100%;
    top: 0;
  }
  .cart-title {
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    padding: 0.75em;
    background: red;
    color: #fff;
  }
  .cart-empty {
    text-align: center;
    margin: 4em 0 0 0;
    min-height: 300px;
  }
  .cart-total {
    background: rgba(215, 215, 215, 0.20);
    margin: 0;
    padding: 0.75em;
  }
  .items {
    min-height: 300px;
  }
  .item {
    padding: 0.75em 0.5em;
    border: 1px solid #ddd;
  }
  .right {
    float: right;
  }
  .item-image {
    float: left;
    width: 20%;
  }
  .item-details {
    float: left;
    width: 80%;
    padding-left: 0.75em;
  }
  .item-title {
    margin: 0;
    font-weight: bold;
  }
  .item-price {
    margin: 0;
    font-size: 0.9em;
  }
</style>