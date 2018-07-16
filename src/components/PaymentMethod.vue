<template>
  <div id="payment-method">
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
      <div class="bar-done"></div>
      <div class="circle-border rounded-circle now-step d-flex align-items-center justify-content-center ml-3">
        <div class="circle rounded-circle"></div>
      </div>
    </div>
    <div class="bar mx-auto"></div>
    <h1 class="mb-0">Payment Method</h1>
    <h2 class="mb-4">Add your credit card infomation!</h2>
    <form class="mx-auto" novalidate>
      <div class="row mb-4">
        <div class="col-12 d-flex flex-column card-number">
          <label for="card-number">Card Number</label>
          <input type="text" name="card-number" id="card-number" placeholder="234 5678 9012 3456"
            v-model="payment.card" :class="{errorCard: error.card}">
          <span class="visa" :class="{creditcard: payment.card || error.card}">VISA</span>
          <i class="fas fa-exclamation-triangle card-error-i" v-if="error.card"></i>
          <span class="error-triangle card-error-triangle" v-if="error.card"></span>
          <span class="error-word card-error-word" v-if="error.card">INVALID NUMBER</span>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-12 col-sm-6 ">
          <div class="w-100">
            <label for="card-holder">Cardholder Name</label>
            <input type="text" name="card-holder" id="card-holder" class="w-100" placeholder="EXAMPLE NAME"
              v-model="payment.cardHolder">
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div class="w-100">
            <label for="bank-name">Bank Name</label>
            <input type="text" name="bank-name" id="bank-name" class="w-100" placeholder="EXAMPLE BANK"
              v-model="payment.bank">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="w-100">
            <label for="cvv">CVV</label>
            <input type="text" name="cvv" id="cvv" class="w-100" placeholder="123"
              v-model="payment.cvv">
          </div>
        </div>
        <div class="col-8">
          <label for="expire-date">Expire Date</label>
          <div class="row">
            <div class="col-6 select-date">
              <select name="month" id="month" class="w-100"
                v-model="payment.month" :class="{validcolor: payment.month}" v-on:change="monthSelect()">
                <option value="" hidden>MM</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <span class="up-triangle"></span>
              <span class="down-triangle"></span>
            </div>
            <div class="col-6 select-date">
              <select name="day" id="day" class="w-100" v-model="payment.day" :class="{validcolor: payment.day}">
                <option value="" hidden>DD</option>
                <option :value="item" v-for="(item, i) in date" :key="i">{{item}}</option>
              </select>
              <span class="up-triangle"></span>
              <span class="down-triangle"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="input-button" v-if="payment.card == '' || payment.cardHolder == '' || payment.bank == ''
         || payment.cvv == '' || payment.month == '' || payment.day == ''">
        <span>SUBMIT & NEXT</span>
      </div>
      <input type="button" value="SUBMIT & NEXT" class="submit w-100"
        v-if="payment.card != '' && payment.cardHolder != '' && payment.bank != ''
         && payment.cvv != '' && payment.month != '' && payment.day != ''" v-on:click.prevent.stop="submit()">
    </form>
  </div>
</template>

<script>
export default {
  name: 'PaymentMethod',
  data () {
    return {
      payment: {
        card: '',
        cardHolder: '',
        bank: '',
        cvv: '',
        month: '',
        day: ''
      },
      date: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
        '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      error: {
        card: false,
      }
    }
  },
  methods: {
    monthSelect () {
      if (this.payment.month == '01' || this.payment.month == '03' || this.payment.month == '05' || this.payment.month == '07' ||
        this.payment.month == '08' || this.payment.month == '10' || this.payment.month == '12') {
        this.date = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
        '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
      } else if (this.payment.month == '02') {
        this.date = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
        '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];
      } else {
        this.date = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
        '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
      }
      this.payment.day = '';
    },
    submit () {
      const cardRule = /^[0-9]+[0-9]$/;
      if (this.payment.card.search(cardRule) == -1) {
        this.error.card = true;
      } else {
        this.error.card = false;
      }
      if (this.error.card == false && this.payment.cardHolder != '' && this.payment.bank != ''
         && this.payment.cvv != '' && this.payment.month != '' && this.payment.day != '') {
        this.error.card = false;
        this.payment.card = '';
        this.payment.cardHolder = '';
        this.payment.bank = '';
        this.payment.cvv = '';
        this.payment.month = '';
        this.payment.day = '';
        this.$router.push({
          path: '/Congratulations'
        });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';
@import "../assets/css/fontawesome-free-5.1.0-web/css/all.css";

#payment-method {
  font-family: 'Roboto', $font-family-base;
  color: $black;
  .circle-group {
    position: relative;
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
    .bar-done {
      width: 64px + 32px + 64px + 16px + 64px + 16px;
      height: 2px;
      background: $blue;
      z-index: 2;
      position: absolute;
      top: 8px;
      left: 0;
    }
  }
  .bar {
    width: 256px;
    height: 2px;
    background: $blue-light;
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
  form {
    max-width: 460px;
    font-family: $Form-font, $font-family-base;
    font-size: $Form-size;
    font-weight: $Form-weight;
    letter-spacing: 0;
    position: relative;
    @media (max-width: 500px) {
      padding-right: 10px;
      padding-left: 10px;
    }
    label {
      line-height: 24px;
    }
    input, select {
      height: 52px;
      background: $white;
      border: 2px solid $black;
      border-radius: 8px;
      padding: 12px 0 16px 20px;
      &::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: $gray-1;
      }
      &::-moz-placeholder {
        /* Firefox 19+ */
        color: $gray-1;
      }
      &:-ms-input-placeholder {
        /* IE 10+ */
        color: $gray-1;
      }
      &:-moz-placeholder {
        /* Firefox 18- */
        color: $gray-1;
      }
    }
    .card-number {
      position: relative;
      .visa {
        width: 25px;
        height: 20px;
        background: $gray-1;
        color: $white;
        font-style: italic;
        font-size: $Lable-size * 0.8;
        text-align: center;
        line-height: 20px;
        position: absolute;
        top: 32px + 16px;
        right: 12.5px + 20px;
      }
      .creditcard {
        display: none;
      }
      i {
        position: absolute;
        color: $orange;
      }
      .error-triangle {
        position: absolute;
        border-top: 4px solid transparent;
        border-right: 6px solid $orange;
        border-bottom: 4px solid transparent;
        border-left: 0;
      }
      .error-word {
        position: absolute;
        background: $orange;
        border-radius: 4px;
        white-space: nowrap;
        font-size: $Lable-size;
        color: $white;
        letter-spacing: 0;
        text-align: left;
        line-height: 14px;
        padding: 6px 8px;
      }
      .card-error-i {
        top: 48px;
        right: 20px + 12px;
      }
      .card-error-triangle {
        top: 54px;
        right: -4px;
      }
      .card-error-word {
        top: 45px;
        right: -131px;
      }
      .errorCard {
        border: 2px solid $orange;
      }
      @media (max-width: 768px) {
        .card-error-triangle {
          transform: rotate(90deg);
          top: 54px + 29px;
          right: 20px;
        }
        .card-error-word {
          top: 45px + 45px;
          right: 10px;
        }
      }
      @media (max-width: 414px) {
        .card-error-word {
          font-size: $Lable-size * 0.8;
          padding: 2px 2px;
        }
      }
    }
    select {
      display: flex;
      align-items: center;
      padding: 10px 0 10px 20px;
      color: $gray-1;
      cursor: pointer;
      -webkit-appearance: none;    /*Chrome 取消 select 預設箭頭樣式*/
      -moz-appearance: none;    /*FF 取消 select 預設箭頭樣式*/
      appearance: none;    /*CSS3 取消 select 預設箭頭樣式*/
      &::-ms-expand {
        display: none;    /*IE 取消 select 預設箭頭樣式*/
      }
      option {
        color: $black;
      }
      @media (max-width: 414px) {
        padding: 10px 0 10px 10px;
      }
    }
    .validcolor {
      color: $black;
    }
    .input-button {
      margin-top: 40px;
      height: 52px;
      background: $blue-light;
      border: 2px solid $blue-light;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $white;
    }
    .submit {
      margin-top: 40px;
      height: 52px;
      padding: 0;
      background: $blue;
      border: 2px solid $blue-light-2;
      border-radius: 8px;
      color: $white;
      text-align: center;
      line-height: 25px;
      cursor: pointer;
    }
    .select-date {
      position: relative;
      .up-triangle {
        display: inline-block;
        border-top: 0;
        border-right: 4px solid transparent;
        border-bottom: 6px solid $black;
        border-left: 4px solid transparent;
        position: absolute;
        top: 18px;
        right: 28px;
      }
      .down-triangle {
        display: inline-block;
        border-top: 6px solid $black;
        border-right: 4px solid transparent;
        border-bottom: 0;
        border-left: 4px solid transparent;
        position: absolute;
        top: 28px;
        right: 28px;
      }
      @media (max-width: 414px) {
        .up-triangle, .down-triangle {
          right: 18px;
        }
      }
    }
  }
}
</style>
