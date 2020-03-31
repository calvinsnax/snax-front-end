/* eslint-disable no-undef */ /* eslint-disable no-undef */ /* eslint-disable
no-undef */
<template>
  <div :class="$style.page">
    <div :class="$style.header">
      <router-link :class="$style.logo" to="/">
        <img src="@/assets/images/logo.svg" alt="SNAX" />
      </router-link>
    </div>

    <div :class="$style.body">
      <button :class="[$style.socialButton, $style.kakao]">
        <i class="fas fa-comment"></i>
        <span :class="$style.name">카카오로 시작하기</span>
      </button>
      <button :class="[$style.socialButton]">
        <i class="far fa-envelope"></i>
        <span :class="$style.name">이메일로 로그인하기</span>
      </button>
    </div>

    <div :class="$style.policy">
      <div :class="$style.text">
        가입을 진행할 경우, 아래의 정책에 대해 동의한 것으로 간주됩니다.
      </div>
      <div :class="$style.links">
        <a>이용약관</a>
        <span>및</span>
        <a>개인정보취급방침</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['facebookInitState', 'kakaoInitState']),
  },

  data() {
    return {
      registerAttempted: false,
    }
  },

  created() {
    this.facebookInit()
    this.kakaoInit()
  },

  methods: {
    ...mapMutations('auth', [
      'setFacebookInitState',
      'setKakaoInitState',
      'setAuthData',
      'setToken',
      'setRefreshToken',
    ]),

    ...mapActions('auth', ['login']),

    facebookInit() {
      console.log('facebook is initialized')
      if (this.facebookInitState) {
        console.log('이미 Facebook SDK가 initialized되었습니다.')
      } else {
        ;(function(d, s, id) {
          let js,
            fjs = d.getElementsByTagName(s)[0]
          if (d.getElementById(id)) return
          js = d.createElement(s)
          js.id = id
          js.src = 'https://connect.facebook.net/ko_KR/sdk.js'
          fjs.parentNode.insertBefore(js, fjs)
        })(document, 'script', 'facebook-jssdk')

        window.fbAsyncInit = () => {
          // eslint-disable-next-line no-undef
          FB.init({
            appId: '712031605888596',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v3.2',
          })
        }

        this.setFacebookInitState(true)
      }
    },
    kakaoInit() {
      console.log('kakao is initiate')
      if (this.kakaoInitState) {
        console.log('이미 카카오 SDK가 initiate되었습니다.')
        return
      }
      // eslint-disable-next-line no-undef
      Kakao.init('1278ddce74936b584f19c4b435cb6a0e')
      this.setKakaoInitState(true)
    },

    // 페이스북 로그인/회원가입
    facebookLogin() {
      console.log('페이스북 로그인 시작')
      // eslint-disable-next-line no-undef
      FB.login(
        async result => {
          console.log('facebook response', result)
          if (result.status !== 'connected') return

          try {
            const loginResult = await this.login({
              type: 'facebook',
              accessToken: result.authResponse.accessToken,
            })

            if (!loginResult && !this.registerAttempted) {
              // 회원가입 시도는 한 번만
              this.facebookRegister()
            }
          } catch (err) {
            console.log('Login view: ', err)
            // 로그인에 실패하여 새로운 계정을 생성합니다.
            if (err.status === 500 && !this.registerAttempted) {
              // 회원가입 시도는 한 번만
              this.facebookRegister()
            }
          }
        },
        { scope: 'public_profile,email' },
      )
    },

    async facebookRegister() {
      // eslint-disable-next-line no-undef
      await FB.api('/me', async facebookRes => {
        console.log('페이스북 계정 정보: ', facebookRes)

        // const profileImage = this.$http.get(`https://graph.facebook.com/${facebookRes.id}/picture?height=1024&type=large`)
        //   .then(result => {
        //     console.log(result)
        //   })
        //   .catch(err => console.log(err))

        const { data } = await this.$http.post('auth/register/facebook', {
          name: facebookRes.name,
          facebookId: facebookRes.id,
        })

        console.log('회원가입 결과: ', data)
        if (!data) return
        this.facebookLogin()
      })

      this.registerAttempted = true
    },

    // 카카오 로그인 / 회원가입
    // kakaoLogin() {
    //   Kakao.Auth.login({
    //     success: authObj => {
    //       console.log(authObj)
    //       Kakao.Auth.getStatus(statusObj => {
    //         console.log(statusObj)
    //         if (statusObj.status === 'connected') {
    //           // this.socialLogin('kakao', authObj.access_token)

    //           this.$http
    //             .post(
    //               'auth/kakao_login',
    //               {},
    //               {
    //                 headers: {
    //                   authorization: 'Bearer ' + authObj.access_token,
    //                 },
    //               },
    //             )
    //             .then(res => {
    //               console.log('로그인 시도에 대한 결과: ', res)

    //               if (res.data.success) {
    //                 // 로그인 성공

    //                 console.log('로그인 성공')

    //                 this.setAuthData({
    //                   isLogin: true,
    //                   userData: res.data.userData,
    //                 })
    //                 this.setToken(res.data.token)
    //                 this.setRefreshToken(res.data.refreshToken)

    //                 this.$localforage
    //                   .setItem('token', res.data.token)
    //                   .then(res => {
    //                     console.log('토큰을 로컬포리지에 ', res)
    //                   })
    //                 this.$localforage.setItem(
    //                   'refreshToken',
    //                   res.data.refreshToken,
    //                 )

    //                 this.$message({
    //                   message: '로그인되었습니다.',
    //                   type: 'success',
    //                 })

    //                 // console.log('결과: ', res)

    //                 // this.$toast.success('로그인되었습니다.', '안내', {
    //                 //   position: 'topCenter'
    //                 // })

    //                 if (this.beforeRoute) {
    //                   this.$router.go(-1)
    //                 } else {
    //                   this.$router.push({ name: 'home' })
    //                 }
    //               } else if (res.data.error === 'no matched user') {
    //                 // this.$toast.error('계정을 찾을 수 없습니다.', '로그인 실패')

    //                 console.log('계정을 찾을 수 없다. 회원가입 시도함.')

    //                 if (!this.registerAttempted) {
    //                   // 회원가입 시도는 한 번만
    //                   this.kakaoRegister(null)
    //                 }
    //               }
    //             })
    //             .catch(err => console.log(err))
    //         }
    //       })
    //     },
    //     fail: err => {
    //       console.log('kakao login failed: ', err)
    //     },
    //   })
    // },

    // kakaoRegister() {
    //   // const vm = this

    //   // eslint-disable-next-line no-undef
    //   Kakao.API.request({
    //     url: '/v2/user/me',
    //     success: userObj => {
    //       console.log(userObj)

    //       // store에 회원가입할 SNS 유저 정보를 저장합니다.
    //       // this.setSocialRegisterData({
    //       //   sns: sns,
    //       //   data: {
    //       //     email: userObj.kakao_account.email ? userObj.kakao_account.email : '',
    //       //     nickname: userObj.properties.nickname ? userObj.properties.nickname : '',
    //       //     photo: userObj.properties.profile_image ? userObj.properties.profile_image : '',
    //       //     id: userObj.id
    //       //   }
    //       // })

    //       this.$http
    //         .post('auth/kakao_register', {
    //           name: userObj.properties.nickname,
    //           kakaoId: userObj.id,
    //         })
    //         .then(res => {
    //           console.log('회원가입 결과: ', res)

    //           if (res.data.success) {
    //             this.kakaoLogin()
    //           } else {
    //             console.log('회원가입에 실패함')
    //           }
    //         })
    //         .catch(err => {
    //           console.log(err)
    //           if (err.code === 11000) {
    //             console.log('이메일이 겹침')
    //           }
    //         })
    //     },
    //   })

    //   this.registerAttempted = true
    // },
  },
}
</script>

<style lang="scss" module scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 2rem;
  .logo {
    color: $oc-gray-9;
    font-size: 6vw;
    font-weight: $font-weight-bold;
    letter-spacing: 1em;
    padding-left: 1.1em;
    margin-bottom: 1em;
    text-align: center;
    @media (min-width: $small-w) {
      font-size: 1.5rem;
    }
  }
  .description {
    text-align: center;
    color: $oc-gray-8;
    font-size: $font-size-4;
    word-break: keep-all;
  }
}

.body {
  width: 100%;
  max-width: $small-w;
  padding: 0 2rem;
  margin: 0 auto;
}

.socialButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  padding: $padding-0 $padding-4;
  margin-bottom: $margin-2;

  font-size: 0.875rem;
  background-color: white;
  border: 1px solid $oc-gray-1;
  border-radius: 45px;
  outline: none;
  i {
    color: $oc-gray-6;
    font-size: 18px;
    margin-right: $margin-2;
  }

  &.kakao {
    color: #713d3d;
    background-color: #f7e542;
    border-color: #f7e542;
    i {
      color: #713d3d;
    }
  }
}

.policy {
  width: 100%;
  padding: $padding-3;
  text-align: center;
  word-break: keep-all;
  .text {
    color: $oc-gray-6;
    font-size: $font-size-0;
  }
  .links {
    color: $color-primary;
    font-size: $font-size-1;
    a {
      text-decoration: underline;
      margin-right: $margin-0;
    }
    span {
      margin-right: $margin-0;
    }
  }
}
</style>
