<template>
  <div id="general-infomation">
    <div class="circle-group d-flex mx-auto">
      <div class="circle-border rounded-circle circle-done mr-5 d-flex">
        <i class="fas fa-check"></i>
      </div>
      <div class="bar-done"></div>
      <div class="circle-border rounded-circle now-step d-flex align-items-center justify-content-center mr-5 ml-3">
        <div class="circle rounded-circle"></div>
      </div>
      <div class="circle-border rounded-circle mr-5 ml-3"></div>
      <div class="circle-border rounded-circle ml-3"></div>
    </div>
    <div class="bar mx-auto"></div>
    <h1 class="mb-0">General Infomation</h1>
    <h2 class="mb-4">Tell us who you are!</h2>
    <form class="mx-auto" novalidate>
      <div class="row mb-4">
        <div class="col-12 col-sm-6 d-flex flex-column">
          <label for="name">Name <span class="optional">(optional)</span></label>
          <input type="text" id="name" placeholder="Example Name">
        </div>
        <div class="col-12 col-sm-6 d-flex flex-column phone">
          <label for="phone">Phone*</label>
          <input type="text" id="phone" placeholder="0912 345 678" v-model="infomation.phone" :class="{errorPhone: error.phone}">
          <i class="fas fa-exclamation-triangle phone-error-i" v-if="error.phone"></i>
          <span class="error-triangle phone-error-triangle" v-if="error.phone"></span>
          <span class="error-word phone-error-word" v-if="error.phone">NUMBERS ONLY</span>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-12">
          <label>Birth Date <span class="optional">(optional)</span></label>
        </div>
        <div class="col-4 select-date">
          <select name="year" id="year" class="w-100" v-model="year" :class="{validcolor: year}">
            <option value="" hidden>YYYY</option>
            <option value="1959">1959</option>
            <option value="1960">1960</option>
            <option value="1961">1961</option>
            <option value="1962">1962</option>
            <option value="1963">1963</option>
            <option value="1964">1964</option>
            <option value="1965">1965</option>
            <option value="1966">1966</option>
            <option value="1967">1967</option>
            <option value="1968">1968</option>
            <option value="1969">1969</option>
            <option value="1970">1970</option>
            <option value="1971">1971</option>
            <option value="1972">1972</option>
            <option value="1973">1973</option>
            <option value="1974">1974</option>
            <option value="1975">1975</option>
            <option value="1976">1976</option>
            <option value="1977">1977</option>
            <option value="1978">1978</option>
            <option value="1979">1979</option>
            <option value="1980">1980</option>
            <option value="1981">1981</option>
            <option value="1982">1982</option>
            <option value="1983">1983</option>
            <option value="1984">1984</option>
            <option value="1985">1985</option>
            <option value="1986">1986</option>
            <option value="1987">1987</option>
            <option value="1988">1988</option>
            <option value="1989">1989</option>
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
          </select>
          <span class="up-triangle"></span>
          <span class="down-triangle"></span>
        </div>
        <div class="col-4 select-date">
          <select name="month" id="month" class="w-100" v-model="month" :class="{validcolor: month}" v-on:change="monthSelect()">
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
        <div class="col-4 select-date">
          <select name="day" id="day" class="w-100" v-model="day" :class="{validcolor: day}">
            <option value="" hidden>DD</option>
            <option :value="item" v-for="(item, i) in date" :key="i">{{item}}</option>
          </select>
          <span class="up-triangle"></span>
          <span class="down-triangle"></span>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label class="d-flex flex-column">Address*</label>
        </div>
        <div class="col-6">
          <input type="text" placeholder="City" class="w-100">
        </div>
        <div class="col-6">
          <input type="text" placeholder="Dist" class="w-100">
        </div>
        <div class="col-12 mt-4 detailAddress">
          <input type="text" placeholder="Address Detail" class="w-100" v-model="infomation.detailAddress" :class="{errorDetailAddress: error.detailAddress}">
          <i class="fas fa-exclamation-triangle detailAddress-error-i" v-if="error.detailAddress"></i>
          <span class="error-triangle detailAddress-error-triangle" v-if="error.detailAddress"></span>
          <span class="error-word detailAddress-error-word" v-if="error.detailAddress">REQUIRED FILED</span>
        </div>
      </div>
      <div class="input-button" v-if="infomation.phone == '' || infomation.detailAddress == ''">
        <span>SUBMIT & NEXT</span>
      </div>
      <input type="button" value="SUBMIT & NEXT" class="submit w-100" v-if="infomation.phone != '' && infomation.detailAddress != ''" v-on:click.prevent.stop="submit()">
    </form>
  </div>
</template>

<script>
export default {
  name: "GeneralInfomation",
  data() {
    return {
      year: '',
      month:'',
      day: '',
      date: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
        '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      infomation: {
        phone: '',
        detailAddress: ''
      },
      error: {
        phone: false,
        detailAddress: false
      }
    };
  },
  methods: {
    monthSelect () {
      if (this.month == '01' || this.month == '03' || this.month == '05' || this.month == '07' ||
        this.month == '08' || this.month == '10' || this.month == '12') {
        this.date = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
        '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
      } else if (this.month == '02') {
        this.date = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
        '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];
      } else {
        this.date = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
        '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
      }
      this.day = '';
    },
    submit () {
      const phoneRule = /^[0-9]+[0-9]$/;
      if (this.infomation.phone.search(phoneRule) == -1) {
        this.error.phone = true;
        this.infomation.phone = '';
      } else {
        this.error.phone = false;
      }
      if (this.infomation.detailAddress.length == 0) {
        this.error.detailAddress = true;
        this.infomation.detailAddress = '';
      } else {
        this.error.detailAddress = false;
      }
      if (this.error.phone == false && this.error.detailAddress == false) {
        this.infomation.phone = '';
        this.infomation.detailAddress = '';
        this.$router.push({
          path: '/ProfilePicture'
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/custom.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "../assets/css/fontawesome-free-5.1.0-web/css/all.css";

#general-infomation {
  font-family: "Roboto", $font-family-base;
  color: $black;
  .circle-group {
    position: relative;
    width: 256px;
    .circle-border {
      width: 16px;
      height: 16px;
      background: #ffffff;
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
      width: 64px + 32px;
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
    @media (max-width: 414px) {
      font-size: $Title-size / 1.1;
    }
  }
  h2 {
    font-family: $Subtitle-font, $font-family-base;
    font-size: $Subtitle-size;
    font-weight: $Subtitle-weight;
    text-align: center;
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
    .optional {
      font-weight: $Subtitle-weight;
      font-size: $Form-size / 1.25;
      color: $black;
      letter-spacing: 0;
      line-height: 24px;
    }
    .phone, .detailAddress {
      position: relative;
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
      top: 51px;
      right: -126px;
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
    .phone-error-i {
      top: 48px;
      right: 20px + 11px;
    }
    .detailAddress-error-i {
      top: 16px;
      right: 20px + 11px;
    }
    .phone-error-triangle {
      top: 54px;
      right: -6px;
    }
    .detailAddress-error-triangle {
      top: 22px;
      right: -6px;
    }
    .phone-error-word {
      top: 45px;
      right: -124px;
    }
    .detailAddress-error-word {
      top: 13px;
      right: -124px;
    }
    .errorPhone, .errorDetailAddress {
      border: 2px solid $orange;
    }
    @media (max-width: 768px) {
      .phone-error-triangle {
        transform: rotate(90deg);
        top: 54px + 29px;
        right: 20px;
      }
      .detailAddress-error-triangle {
        transform: rotate(90deg);
        top: 22px + 29px;
        right: 20px;
      }
      .phone-error-word {
        top: 45px + 45px;
        right: 10px;
      }
      .detailAddress-error-word {
        top: 13px + 45px;
        right: 10px;
      }
    }
    @media (max-width: 414px) {
      .phone-error-word, .detailAddress-error-word {
        font-size: $Lable-size * 0.8;
        padding: 2px 2px;
      }
    }
  }
}
</style>
