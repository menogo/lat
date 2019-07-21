<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'Lorem ipsum dolor sit amet.',
    }
  },

  created() {
    // this.$vux.loading.show({
    //   text: 'Loading',
    // })

    // this.$weui.alert('alert')
    // this.$weui.loading('loading')

    // const instance = axios.create({
    //   baseURL: 'https://api.github.com/',
    //   method: 'get',
    //   timeout: 1000,
    //   withCredentials: false,
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    // })

    // instance.get('users/facebook').then(res => {
    //   console.log(res)
    // })

    // axios.get('https://api.github.com/users/google').then(res => {
    //   console.log(res)
    // })

    // this.$fetch('/users/google').then(res => {
    //   console.log(res)
    // })

    // console.log(API)
    // console.log(window.API)

    // this.$fetch(this.API.facebook).then(res => {
    //   console.log(res)
    // })

    // this.$get(this.API.facebook).then(res => {
    //   console.log(res)
    // })

    // this.$http.get(this.API.facebook).then(res => {
    //   console.log(res)
    // })

    this.$http.post(this.API.facebook).then(res => {
      console.log(res)
    })

    this.$http
      .get(this.API.google, {
        loading: false,
      })
      .then(res => {
        console.log(res)
      })
  },
}
</script>
