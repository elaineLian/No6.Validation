<template>
  <div id="profile-picture">
    <div class="circle-group d-flex mx-auto">
      <div class="circle-border rounded-circle circle-done mr-5 d-flex">
        <i class="fas fa-check"></i>
      </div>
      <div class="circle-border rounded-circle circle-done mr-5 ml-3 d-flex">
        <i class="fas fa-check"></i>
      </div>
      <div class="bar-done"></div>
      <div class="circle-border rounded-circle now-step d-flex align-items-center justify-content-center mr-5 ml-3">
        <div class="circle rounded-circle"></div>
      </div>
      <div class="circle-border rounded-circle ml-3"></div>
    </div>
    <div class="bar mx-auto"></div>
    <h1 class="mb-0">Update Profile Picture</h1>
    <h2 class="mb-4">We wanna know you more!</h2>
    <form class="mx-auto" novalidate>
      <div class="row">
        <div class="col-12">
          <label for="file" :class="{dropHover: dropHover}" class="mb-4"
            v-on:drop.prevent.stop="dropFile($event)"
            v-on:dragover.prevent.stop="dragOver()"
            v-on:dragleave.prevent.stop="dragLeave()">
            <i class="fas fa-images"></i>
            <div class="d-flex flex-column">
              <span>
                <span>UPLOAD UP TO </span>
                <span>3 PHOTOS</span>
              </span>
              <span class="max-size">MAXIMUM SIZE: 150*150px</span>
            </div>
          </label>
          <input type="file" accept="image/*" multiple name="file" id="file"
            class="d-none" ref="inputfile" v-on:change.prevent.stop="inputFile()">
          <div class="row mb-4" v-if="error">
            <div class="col-12">
              <div class="error">
                <p><i class="fas fa-exclamation-triangle mr-2"></i>ONE FILE IS OVER THE MAXIMUM SIZE</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4" v-for="(item, i) in file" :key="i">
              <div class="back-img" :style="{backgroundImage: 'url(' + item + ')'}">
                <div class="delete" v-on:click="deletePhoto(i)"><i class="fas fa-trash-alt"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="input-button" v-if="file.length == 0">
        <span>SUBMIT & NEXT</span>
      </div>
      <input type="submit" value="SUBMIT & NEXT" class="submit w-100" v-if="file.length != 0" v-on:click.prevent.stop="submit()">
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProfilePicture',
  data () {
    return {
      file: [],
      errorFile: false,
      dropHover: false,
      error: false
    }
  },
  methods: {
    inputFile () {
      const pictures = this.$refs.inputfile.files;
      this.uploadFile(pictures);
    },
    uploadFile (pictures) {
      const Len = pictures.length;
      const fileLen = this.file.length;
      if (Len == 0) {
        return
      } else if (fileLen + Len <= 3) {
        for (let i = 0; i < Len; i++) {
          this.fileSizeLimit(URL.createObjectURL(pictures[i]), fileLen + i);
        }
        this.dropHover = true;
        this.error = false;
      } else if (fileLen + Len > 3) {
        const fileLimit = 3 - fileLen;
        for (let i = 0; i < fileLimit; i++) {
          this.fileSizeLimit(URL.createObjectURL(pictures[i]), fileLen + i);
        }
        this.dropHover = true;
        this.error = false;
      }
    },
    fileSizeLimit (photo, index) {
      const image = new Image();
      image.src = photo;
      image.onload = () => {
        const fileWidth = image.width;
        const fileHeight = image.height;
        if (fileWidth <= 150 && fileHeight <= 150) {
          this.file.splice(index, 0, photo);
        } else {
          if (this.file.length == 0) {
            this.dropHover = false;
          }
          this.error = true;
          console.log('error')
        }
      }
    },
    deletePhoto (index) {
      this.file.splice(index, 1);
      if (this.file.length == 0) {
        this.dropHover = false;
      }
    },
    dropFile (e) {
      const pictures = e.dataTransfer.files;
      this.uploadFile(pictures);
    },
    dragOver () {
      this.dropHover = true;
    },
    dragLeave () {
      this.dropHover = false;
    },
    submit () {
      this.$router.push({
        path: '/PaymentMethod'
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

#profile-picture {
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
      width: 64px + 32px + 64px + 16px;
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
    label[for="file"] {
      height: 140px;
      border: 2px solid $black;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $gray-1;
      padding: 0 10px;
      cursor: pointer;
      i {
        margin-right: 20px;
        font-size: $Title-size;
      }
      div{
        span {
          font-size: $Form-size;
          line-height: 24px;
          @media (max-width: 414px) {
            display: flex;
            flex-direction: column;
          }
          span {
            line-height: 24px;
          }
        }
        .max-size {
          font-size: $Lable-size;
        }
      }
    }
    label.dropHover {
      border: 2px solid $blue;
      color: $blue;
    }
    .error {
      height: 52px;
      background: $orange;
      border: 2px solid $orange;
      border-radius: 8px;
      text-align: center;
      color: $white;
      p {
        line-height: 48px;
        margin-bottom: 0;
        font-size: $Form-size;
        text-align: center;
      }
    }
    .back-img {
      padding-top: 100%;
      background-size: cover;
      background-position: 50% 50%;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
      .delete {
        background: $blue;
        opacity: 0.8;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 52px;
        border-radius: 0 0 8px 8px;
        position: absolute;
        bottom: -52px;
        left: 0;
        transition: .3s cubic-bezier(0, 0.51, 0.6, 0.99);
        cursor: pointer;
        i {
          color: $white;
        }
      }
      &:hover, &:active {
        .delete {
          bottom: 0px;
        }
      }
    }
  }
}
</style>
