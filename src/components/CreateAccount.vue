<template>
  <div id="create-account">
    <div class="circle-group d-flex mx-auto">
      <div class="circle-border rounded-circle now-step d-flex align-items-center justify-content-center mr-5">
        <div class="circle rounded-circle"></div>
      </div>
      <div class="circle-border rounded-circle mr-5 ml-3"></div>
      <div class="circle-border rounded-circle mr-5 ml-3"></div>
      <div class="circle-border rounded-circle ml-3"></div>
    </div>
    <div class="bar mx-auto"></div>
    <h1 class="mb-0">Create Account</h1>
    <h2 class="mb-4">Glad to see you here!</h2>
    <form class="d-flex flex-column mx-auto" novalidate v-on:submit.prevent.stop="submit()">
      <label for="account" class="mb-2">Account</label>
      <input type="email" id="account" placeholder="example@email.com" class="mb-4" :class="{errorAccount: error.account}" v-model="accountData.account">
      <i class="fas fa-exclamation-triangle account-error-i" v-if="error.account"></i>
      <span class="error-triangle account-error-triangle" v-if="error.account"></span>
      <span class="error-word account-error-word" v-if="error.account">INVALID EMAIL</span>
      <label for="password" class="mb-2">Password</label>
      <input type="password" id="password" placeholder="●●●●●●●●" class="mb-4" :class="{errorPassword: error.password.num || error.password.word}" v-model="accountData.password">
      <i class="fas fa-exclamation-triangle password-error-i" v-if="error.password.num || error.password.word"></i>
      <span class="error-triangle password-error-triangle" v-if="error.password.num || error.password.word"></span>
      <span class="error-word password-error-num" v-if="error.password.num">MINIMUM 8 CHARACTERS</span>
      <span class="error-word password-error-word" v-if="error.password.word">ONLY ENGLISH OR NUMBERS</span>
      <label for="comfirm" class="mb-2">Comfirm Password</label>
      <input type="password" id="comfirm" placeholder="●●●●●●●●" :class="{errorComfirm: error.comfirmPassword}" v-model="accountData.comfirmPassword">
      <i class="fas fa-exclamation-triangle comfirm-error-i" v-if="error.comfirmPassword"></i>
      <span class="error-triangle comfirm-error-triangle" v-if="error.comfirmPassword"></span>
      <span class="error-word comfirm-error-word" v-if="error.comfirmPassword">NOT MATCH</span>
      <div class="input-button"
        v-if="accountData.account == '' || accountData.password == '' || accountData.password.length != accountData.comfirmPassword.length">
        <span>SUBMIT & NEXT</span>
      </div>
      <input type="submit" value="SUBMIT & NEXT" class="submit"
        v-if="accountData.account != '' && accountData.password != '' && accountData.password.length == accountData.comfirmPassword.length">
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateAccount',
  data () {
    return {
      accountData: {
        account: '',
        password: '',
        comfirmPassword: ''
      },
      error: {
        account: false,
        password: {
          num: false,
          word: false
        },
        comfirmPassword: false
      }
    }
  },
  methods: {
    submit () {
      const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      const passwordRule = /^[A-Za-z0-9]+[A-Za-z0-9]$/;
      if (this.accountData.account.search(emailRule) == -1) {
        this.error.account = true;
      } else {
        this.error.account = false;
      }
      if (this.accountData.password.length < 8) {
        this.error.password.num = true;
        this.error.password.word = false;
      } else if (this.accountData.password.search(passwordRule) == -1) {
        this.error.password.word = true;
        this.error.password.num = false;
      } else {
        this.error.password.num = false;
        this.error.password.word = false;
      }
      if (this.accountData.password != this.accountData.comfirmPassword) {
        this.error.comfirmPassword = true;
      } else {
        this.error.comfirmPassword = false;
      }
      if (this.error.account == false && this.error.password.num == false &&
        this.error.password.word == false && this.error.comfirmPassword == false) {
        // alert('表單已送出');
        this.accountData.account = '';
        this.accountData.password = '';
        this.accountData.comfirmPassword = '';
        this.$router.push({
          path: '/GeneralInfomation'
        });
      } else if (this.error.account == false && (this.error.password.num == true ||
        this.error.password.word == true || this.error.comfirmPassword == true)) {
        this.accountData.password = '';
        this.accountData.comfirmPassword = '';
      } else {
        this.accountData.account = '';
        this.accountData.password = '';
        this.accountData.comfirmPassword = '';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';
@import '../assets/css/fontawesome-free-5.1.0-web/css/all.css';

#create-account {
  font-family: $Title-font, $font-family-base;
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
    input {
      height: 52px;
      background: $white;
      border: 2px solid $black;
      border-radius: 8px;
      padding: 12px 0 16px 20px;
      &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: $gray-1;
      }
      &::-moz-placeholder { /* Firefox 19+ */
        color: $gray-1;
      }
      &:-ms-input-placeholder { /* IE 10+ */
        color: $gray-1;
      }
      &:-moz-placeholder { /* Firefox 18- */
        color: $gray-1;
      }
    }
    input[type='password'] {
      font-family: 'Lucida Grande';
      font-size: $Password-size;
      &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: $Form-size;
        transform: translateY(-6px);
      }
      &::-moz-placeholder { /* Firefox 19+ */
        font-size: $Form-size;
        transform: translateY(-6px);
      }
      &:-ms-input-placeholder { /* IE 10+ */
        font-size: $Form-size;
        transform: translateY(-6px);
      }
      &:-moz-placeholder { /* Firefox 18- */
        font-size: $Form-size;
        transform: translateY(-6px);
      }
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
    .account-error-i {
      top: 44px;
      right: 20px;
    }
    .password-error-i {
      top: 152px;
      right: 20px;
    }
    .comfirm-error-i {
      top: 260px;
      right: 20px;
    }
    .account-error-triangle {
      top: 54px;
      right: -14px;
    }
    .password-error-triangle {
      top: 162px;
      right: -14px;
    }
    .comfirm-error-triangle {
      top: 270px;
      right: -14px;
    }
    .account-error-word {
      top: 45px;
      right: -124px;
    }
    .password-error-num {
      top: 153px;
      right: -194px;
    }
    .password-error-word {
      top: 153px;
      right: -212px;
    }
    .comfirm-error-word {
      top: 261px;
      right: -107px;
    }
    .errorAccount, .errorPassword, .errorComfirm {
      border: 2px solid $orange;
    }
    @media (max-width: 992px) {
      .account-error-triangle {
        transform: rotate(90deg);
        top: 54px + 29px;
        right: 20px;
      }
      .password-error-triangle {
        transform: rotate(90deg);
        top: 162px + 29px;
        right: 20px;
      }
      .comfirm-error-triangle {
        transform: rotate(90deg);
        top: 270px + 29px;
        right: 20px;
      }
      .account-error-word {
        top: 45px + 45px;
        right: 10px;
      }
      .password-error-num {
        top: 153px + 45px;
        right: 10px;
      }
      .password-error-word {
        top: 153px + 45px;
        right: 10px;
      }
      .comfirm-error-word {
        top: 261px + 45px;
        right: 10px;
      }
    }
    @media (max-width: 414px) {
      .account-error-word, .password-error-num, .password-error-word, .comfirm-error-word {
        font-size: $Lable-size * 0.8;
        padding: 2px 2px;
      }
    }
  }
}
</style>
