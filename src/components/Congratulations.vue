<template>
  <div id="congratulations">
    <div class="circle-group d-flex mx-auto">
      <div class="circle-border rounded-circle circle-done mr-5 d-flex">
        <i class="fas fa-check"></i>
      </div>
      <div class="circle-border rounded-circle circle-done mr-5 ml-3 d-flex">
        <i class="fas fa-check"></i>
      </div>
      <div class="circle-border rounded-circle circle-done mr-5 ml-3 d-flex">
        <i class="fas fa-check"></i>
      </div>
      <div class="circle-border rounded-circle circle-done ml-3 d-flex">
        <i class="fas fa-check"></i>
      </div>
    </div>
    <div class="bar-done mx-auto"></div>
    <h1 class="mb-0">Congratulations</h1>
    <h2 class="mb-4">Now you’re one of us!</h2>
    <div class="mx-auto smile">
      <div>
        <div class="eye mr-5"></div>
        <div class="eye"></div>
      </div>      
      <div class="mouth">
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
    </div>
    <div class="d-flex justify-content-center redirected">
      <a href="#" v-on:click.prevent.stop="redirected()"><span>Redirected to homepage </span><span class="text-nowrap">after 5 seconds…</span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Congratulations',
  data () {
    return {
      
    }
  },
  mounted () {
    setTimeout(() => {
      this.$router.push({
        path: '/CreateAccount'
      });
    }, 5000);
  },
  methods: {
    redirected () {
      this.$router.push({
        path: '/CreateAccount'
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';
@import "../assets/css/fontawesome-free-5.1.0-web/css/all.css";

#congratulations {
  font-family: 'Roboto', $font-family-base;
  color: $black;
  .circle-group {
    width: 256px;
    .circle-border {
      width: 16px;
      height: 16px;
      background: #FFFFFF;
      border: 2px solid $blue-light; 
      z-index: 9;
    }
    .now-step {
      border: 2px solid $blue;
      .circle {
        width: 8px;
        height: 8px;
        background: $blue;
      }
    }
    .circle-done {
      background: $blue;
      border: 2px solid $blue;
      justify-content: center;
      align-items: center;
      i {
        color: $white;
        font-size: $Lable-size * 0.7;
        transform: translateY(0.5px);
      }
    }
  }
  .bar-done {
    width: 256px;
    height: 2px;
    background: $blue;
    z-index: 1;
    transform: translateY(-9px);
    margin-bottom: 40px;
  }
  h1 {
    font-family: $Title-font, $font-family-base;
    font-size: $Title-size;
    font-weight: $Title-weight;
    text-align: center;
    line-height: 57px;
    padding: 0 10px;
    @media (max-width: 414px) {
      font-size: $Title-size / 1.1;
    }
  }
  h2 {
    font-family: $Subtitle-font, $font-family-base;
    font-size: $Subtitle-size;
    font-weight: $Subtitle-weight;
    text-align: center;
    padding: 0 10px;
  }
  .smile {
    width: 230px;
    height: 230px;
    background: $blue-light;
    border-radius: 50%;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      background: $blue-light;
      .eye {
        width: 30px;
        height: 30px;
        background: $white;
        border-radius: 50%;
        margin-top: 30px;
      }
    }
    .mouth {
      background: transparent;
      .top {
        width: 100px;
        height: 50px;
        background: $blue-light;
        z-index: 2;
        transform: translateX(50px);
      }
      .bottom {
        width: 100px;
        height: 100px;
        background: $white;
        border-radius: 50%;
        z-index: 1;
        transform: translateX(-50px);
      }
    }
  }
  .redirected {
    a {
      font-size: $Form-size;
      font-style: italic;
      color: $blue;
      text-align: center;
      line-height: 25px;
      padding: 0 10px;
    }
  }
}
</style>
