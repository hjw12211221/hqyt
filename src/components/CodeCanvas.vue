<template>
<div id="codeCanvas">
  <input type="button" class="verification" v-model="checkCode"/>
  <center @click="changeCode">点击刷新</center>  
</div>
</template>
<script>
export default {
  data () {
    return {
      code:'',
      checkCode: ''
    }
  },
  components: {

  },
  created () {
    this.createCode()
  },
  methods: {
    createCode () {
      this.code = ''
       var codeLength = 4
       var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');  
      for(var i = 0; i < codeLength; i++) {
         var index = Math.floor(Math.random()*36)
         this.code += random[index]
      }
      this.checkCode = this.code
      this.$emit('getCode',this.checkCode)
    },
    changeCode () {
      this.createCode()
    }
  }
}
</script>
<style lang="stylus" scoped>
#codeCanvas
  .verification
    width 100%
    height 100%
    font-size 20px
    background #fff
    color #8b1616
    letter-spacing 10px
    text-indent 15px
    @media screen and (max-width: 320px){
      font-size 15px
      letter-spacing 5px
    }
</style>